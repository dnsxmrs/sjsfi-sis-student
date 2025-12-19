import { getCurrentUser } from '@/app/_actions/user';

export default async function DispalyName() {
    const currentUser = await getCurrentUser();
    const { firstName, lastName, studentNo } = currentUser || { firstName: 'Guest', lastName: 'User', studentNo: 'N/A' };

    return (
        <div className="bg-white rounded-lg shadow-sm mb-4 sm:mb-6">
            <div className="p-3 sm:p-4">
                <h2 className="text-base sm:text-lg font-medium text-red-800">
                    {firstName} {lastName} <span className="text-black">({studentNo})</span>
                </h2>
            </div>
        </div>
    )
}