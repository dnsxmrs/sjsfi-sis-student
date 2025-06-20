import StatsCards from '@/components/registrar/StatsCards';
import { RecentRegistrationsTable } from '@/components/registrar/RecentRegistrationTable';
import { RecentPendingRegistrations } from '@/components/registrar/RecentPendingRegistration';
import { getActiveStudentCount } from '@/app/_actions/getRegDashboard';

export default async function RegistrarHomePage() {
  const activeStudentCount = await getActiveStudentCount();
  return (
    <div className="p-6 space-y-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatsCards activeStudentCount={activeStudentCount} />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
            <RecentRegistrationsTable />
            <RecentPendingRegistrations />
        </div>
    </div>
  );
}