import Sidebar from "@/components/eco/Sidebar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const useDashboardLayout = () => {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      if (
        !localStorage.getItem("user") ||
        !["ADMIN", "GUEST"].includes(
          JSON.parse(localStorage.getItem("user") || "{}")?.role
        )
      )
        router.replace("/");
    }
  }, [isClient]);
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const _ = useDashboardLayout();

  return (
    <div className="min-h-screen flex bg-dark-white">
      <Sidebar />
      <div className="p-6 w-full lg:flex-[8] lg:max-h-screen lg:overflow-auto">
        {children}
      </div>
    </div>
  );
}
