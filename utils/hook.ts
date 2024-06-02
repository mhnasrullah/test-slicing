import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const useGetRole = () => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [role, setRole] = useState<null | "GUEST" | "ADMIN">(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      if (
        localStorage.getItem("user") &&
        ["ADMIN", "GUEST"].includes(
          JSON.parse(localStorage.getItem("user") || "{}")?.role
        )
      ) {
        setRole(JSON.parse(localStorage.getItem("user") || "{}")?.role);
      } else {
        router.replace("/");
      }
    }
  }, [isClient]);

  return [role];
};
