import {
  IconBook,
  IconGraph,
  IconLamp,
  IconLogout,
  IconMedal,
  IconSettings,
  IconTicket,
  IconUser,
  IconUsersGroup,
  IconX,
} from "@tabler/icons-react";
import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import Text from "../nano/Text";
import { useNavbar } from "@/store";
import { useGetRole } from "@/utils/hook";

const useSidebar = () => {
  const router = useRouter();
  const [role] = useGetRole();

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.replace("/");
  };

  const menuA = [
    {
      label: "Overview",
      active: router.pathname === "/dashboard",
      icon: (
        <IconGraph
          color={router.pathname === "/dashboard" ? "#fffefe" : "#7f8188"}
        />
      ),
      onClick: () => router.push("/dashboard"),
      show: role === "ADMIN",
    },
    {
      label: "Tickets",
      active: router.pathname === "/ticket",
      icon: (
        <IconTicket
          color={router.pathname === "/ticket" ? "#fffefe" : "#7f8188"}
        />
      ),
      onClick: () => router.push("/ticket"),
      show: true,
    },
    {
      label: "Ideas",
      active: false,
      icon: <IconLamp color="#7f8188" />,
      onClick: () => {},
      show: role === "ADMIN",
    },
    {
      label: "Contacts",
      active: false,
      icon: <IconUsersGroup color="#7f8188" />,
      onClick: () => {},
      show: role === "ADMIN",
    },
    {
      label: "Agents",
      active: false,
      icon: <IconUser color="#7f8188" />,
      onClick: () => {},
      show: role === "ADMIN",
    },
    {
      label: "Articles",
      active: false,
      icon: <IconBook color="#7f8188" />,
      onClick: () => {},
      show: role === "ADMIN",
    },
  ];
  const menuB = [
    {
      label: "Settings",
      active: false,
      icon: <IconSettings color="#7f8188" />,
      onClick: () => {},
      show: role === "ADMIN",
    },
    {
      label: "Subscriptions",
      active: false,
      icon: <IconMedal color="#7f8188" />,
      onClick: () => {},
      show: role === "ADMIN",
    },
    {
      label: "Logout",
      active: false,
      icon: <IconLogout color="red" />,
      onClick: handleLogout,
      show: true,
    },
  ];

  return { menuA, menuB };
};

const Sidebar: FC = () => {
  const { menuA, menuB } = useSidebar();
  const { isShow, hide } = useNavbar((state) => state);

  return (
    <aside
      className={clsx(
        "bg-dark absolute inset-0 z-[1000] lg:static py-6 lg:flex-[2] min-h-screen",
        {
          "hidden lg:block": !isShow,
        }
      )}
    >
      <div className="flex items-center justify-between gap-4 py-6 px-6">
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt="Sekawan Media" width={50} height={50} />
          <Text colors="gray" size="lg">
            Dashboard Kit
          </Text>
        </div>
        <button className="lg:hidden" onClick={hide}>
          <IconX color="#b7b8c6" />
        </button>
      </div>

      <div className="mt-6">
        {menuA.map(
          (item, index) =>
            item.show && (
              <button
                className={clsx("px-6 py-4 flex w-full", {
                  "bg-white bg-opacity-5": item.active,
                  "border-l-4 border-white": item.active,
                })}
                type="button"
                key={index}
                onClick={item.onClick}
              >
                {item.icon}
                <Text
                  className={clsx("ml-4", {
                    "text-white": item.active,
                    "text-gray": !item.active,
                  })}
                >
                  {item.label}
                </Text>
              </button>
            )
        )}
        <hr className="border-[#ffffff22] my-6" />
        {menuB.map(
          (item, index) =>
            item.show && (
              <button
                className={clsx("px-6 py-4 flex w-full", {
                  "bg-white bg-opacity-5": item.active,
                  "border-l-4 border-white": item.active,
                })}
                type="button"
                key={index}
                onClick={item.onClick}
              >
                {item.icon}
                <Text
                  className={clsx("ml-4", {
                    "text-white": item.active,
                    "text-gray": !item.active,
                  })}
                >
                  {item.label}
                </Text>
              </button>
            )
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
