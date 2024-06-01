import Header from "@/components/eco/Header";
import Sidebar from "@/components/eco/Sidebar";
import StatCardList from "@/components/eco/StatCardList";
import StatChart from "@/components/eco/StatChart";
import Task from "@/components/eco/Task";
import UnresolvedTicket from "@/components/eco/UnresolvedTicket";
import { FC, useState } from "react";

const DashboardContent: FC<{
  setShowSidebar: (value: boolean) => void;
}> = ({ setShowSidebar }) => {
  return (
    <div className="p-6 w-full lg:flex-[8]">
      <Header setShowSidebar={setShowSidebar} />
      <StatCardList />
      <StatChart />
      <div className="mt-6 lg:flex lg:gap-6">
        <UnresolvedTicket />
        <Task />
      </div>
    </div>
  );
};

export default function Dashboard() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="min-h-screen flex bg-dark-white">
      <Sidebar setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
      <DashboardContent setShowSidebar={setShowSidebar} />
    </div>
  );
}
