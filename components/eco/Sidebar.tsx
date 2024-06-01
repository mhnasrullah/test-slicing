import {
  IconBook,
  IconGraph,
  IconLamp,
  IconMedal,
  IconSettings,
  IconTicket,
  IconUser,
  IconX,
} from "@tabler/icons-react";
import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC } from "react";
import Text from "../nano/Text";

const useSidebar = () => {
  const router = useRouter();

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
    },
    {
      label: "Tickets",
      active: router.pathname === "/tickets",
      icon: (
        <IconTicket
          color={router.pathname === "/tickets" ? "#fffefe" : "#7f8188"}
        />
      ),
      onClick: () => router.push("/tickets"),
    },
    {
      label: "Ideas",
      active: false,
      icon: <IconLamp color="#7f8188" />,
      onClick: () => {},
    },
    {
      label: "Contacts",
      active: false,
      icon: <IconLamp color="#7f8188" />,
      onClick: () => {},
    },
    {
      label: "Agents",
      active: false,
      icon: <IconUser color="#7f8188" />,
      onClick: () => {},
    },
    {
      label: "Articles",
      active: false,
      icon: <IconBook color="#7f8188" />,
      onClick: () => {},
    },
  ];
  const menuB = [
    {
      label: "Settings",
      active: false,
      icon: <IconSettings color="#7f8188" />,
      onClick: () => {},
    },
    {
      label: "Subscriptions",
      active: false,
      icon: <IconMedal color="#7f8188" />,
      onClick: () => {},
    },
  ];

  return { menuA, menuB, router };
};

const Sidebar: FC<{
  showSidebar: boolean;
  setShowSidebar: (value: boolean) => void;
}> = ({ setShowSidebar, showSidebar }) => {
  const { menuA, menuB, router } = useSidebar();
  return (
    <aside
      className={clsx(
        "bg-dark absolute inset-0 lg:static py-6 lg:flex-[2] min-h-screen",
        {
          "hidden lg:block": !showSidebar,
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
        <button className="lg:hidden" onClick={() => setShowSidebar(false)}>
          <IconX color="#b7b8c6" />
        </button>
      </div>

      <div className="mt-6">
        {menuA.map((item, index) => (
          <button
            className={clsx("px-6 py-4 flex w-full", {
              "bg-white bg-opacity-5": item.active,
              "border-l-4 border-white": item.active,
            })}
            type="button"
            key={index}
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
        ))}
        <hr className="border-[#ffffff22] my-6" />
        {menuB.map((item, index) => (
          <button
            className={clsx("px-6 py-4 flex w-full", {
              "bg-white bg-opacity-5": item.active,
              "border-l-4 border-white": item.active,
            })}
            type="button"
            key={index}
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
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;