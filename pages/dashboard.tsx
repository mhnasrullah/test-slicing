import Header from "@/components/eco/Header";
import StatCardList from "@/components/eco/StatCardList";
import StatChart from "@/components/eco/StatChart";
import Task from "@/components/eco/Task";
import UnresolvedTicket from "@/components/eco/UnresolvedTicket";
import DashboardLayout from "@/components/layouts/Dashboard";
import { useGetRole } from "@/utils/hook";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Dashboard() {
  const [role] = useGetRole();
  const router = useRouter();

  useEffect(() => {
    if (role === "GUEST") {
      router.replace("/ticket");
    }
  }, [role])

  return (
    <DashboardLayout>
      <Header />
      <StatCardList />
      <StatChart />
      <div className="mt-6 lg:flex lg:gap-6">
        <UnresolvedTicket />
        <Task />
      </div>
    </DashboardLayout>
  );
}
