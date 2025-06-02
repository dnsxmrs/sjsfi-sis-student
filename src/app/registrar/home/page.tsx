import StatsCards from '@/components/registrar/StatsCards';
import { RecentRegistrationsTable } from '@/components/registrar/RecentRegistrationTable';
import { RecentPendingRegistrations } from '@/components/registrar/RecentPendingRegistration';

export default function RegistrarHomePage() {
  return (
    <div className="p-6 space-y-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatsCards />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
            <RecentRegistrationsTable />
            <RecentPendingRegistrations />
        </div>
    </div>
   
  );
}