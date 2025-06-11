// app/api/xr/user-access-lookup/route.ts
import { NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma';
import { rateLimiter } from '@/lib/limiter';
import { getClientIp } from '@/lib/ip';
import { z } from 'zod';
import crypto from 'crypto';

const SHARED_SECRET = process.env.SJSFI_SHARED_SECRET || '';
const VALID_API_KEYS = {
    // 'sis': process.env.SJSFI_SIS_API_KEY,
    'lms': process.env.SJSFI_LMS_API_KEY,
    'hrms': process.env.SJSFI_HRMS_API_KEY // don't use self apikey
}

const schema = z.object({
    email: z.string().email()
});

function verifySignature(body: string, timestamp: string, signature: string): boolean {
    const hmac = crypto.createHmac('sha256', SHARED_SECRET);
    hmac.update(body + timestamp);
    const digest = hmac.digest('hex');
    // console.log('Computed digest:', digest);
    return digest === signature;
}

export async function POST(request: NextRequest) {
    // console.log('POST /xr/user-access-lookup called');
    // Get client IP from headers
    const userIP = await getClientIp();

    try {
        await rateLimiter.consume(userIP, 1);
    } catch {
        return Response.json({ error: 'Too many requests' }, { status: 429 });
    }

    // Check for API key in the Authorization header and if it matches a valid trusted key
    const auth = request.headers.get('authorization') || '';
    const apiKey = auth.split(' ')[1];
    if (!apiKey || !Object.values(VALID_API_KEYS).includes(apiKey)) {
        return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const timestamp = request.headers.get('x-timestamp') || '';
    const signature = request.headers.get('x-signature') || '';

    const now = Date.now();
    const tsInt = parseInt(timestamp, 10);
    if (!timestamp || !signature || isNaN(tsInt) || Math.abs(now - tsInt) > 5 * 60 * 1000) {
        return Response.json({ error: 'Invalid request' }, { status: 400 });
    }

    const rawBody = await request.text();
    if (!verifySignature(rawBody, timestamp, signature)) {
        return Response.json({ error: 'Invalid signature' }, { status: 403 });
    }

    let email: string;
    try {
        const parsed = schema.parse(JSON.parse(rawBody));
        email = parsed.email;
    } catch {
        // console.error('Validation error:', err);
        return Response.json({ error: 'Invalid request' }, { status: 400 });
    }

    if (!email) {
        return Response.json({ error: 'Invalid request, contact the administrator for help.' }, { status: 400 });
    }

    try {
        const user = await prisma.user.findFirst({
            where: { email: email },
            select: {
                email: true,
                role: true,
            },
        })

        if (!user) {
            console.log('User not found:', email);
            return Response.json({ error: 'Not found' }, { status: 404 });
        }

        // Transform the response to flatten role names
        const transformedUser = {
            ...user,
            role: user.role
        }
        console.log('User found:', transformedUser);
        return Response.json(transformedUser);
    } catch {
        // console.error('Database error:', err);
        return Response.json({ error: 'Server error' }, { status: 500 });
    } finally {
        if (process.env.NODE_ENV === 'development') {
            await prisma.$disconnect();
        }
    }
}
