
# SJSFI Student Information System

Saint Joseph School of Fairview Inc. (SJSFI) is a private educational institution located in Quezon City. This project is an enrollment and student information system designed to streamline and manage the school's enrollment process and student records.

## Tech Stack

- **Next.js** (React framework)
- **TypeScript**
- **Prisma ORM**
- **Clerk** (Authentication Service)
- **Supabase** (Database & Auth)
- **Node.js**
- **PostgreSQL**
- **Tailwind CSS**

## Features

This system is focused on the student side. Key features include:

- Student login
- Viewing class schedules
- Accessing school notifications and announcements
- Viewing school policies
- Secure authentication and session management

## Getting Started

### Prerequisites

- Node.js (latest LTS recommended)
- Access to the `.env` file (ask a developer)

### Setup Instructions

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Configure environment:**
   - Obtain a copy of the `.env` file from the developers and place it in the project root.

3. **Generate Prisma client:**

   ```bash
   npx prisma generate
   ```

4. **Run the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. **Lint before committing:**

   ```bash
   npm run lint
   ```

Visit [http://localhost:3000](http://localhost:3000) to view the application.

## Licensing

This project is licensed for use by Saint Joseph School of Fairview Inc. (SJSFI). For more information, please contact the project maintainers or SJSFI administration.
