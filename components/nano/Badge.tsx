import { BaseTypeComponent } from "@/utils/types";
import clsx from "clsx";
import { FC } from "react";

interface BadgeProps extends BaseTypeComponent {
  type?: "NETRAL" | "WARNING" | "SUCCESS" | "DANGER";
}

const Badge: FC<BadgeProps> = ({ className, children, type = "NETRAL" }) => {
  return (
    <p
      className={clsx(
        "px-2 py-1 rounded-md inline-block text-xs font-semibold",
        {
          "text-dark bg-dark-white": type === "NETRAL",
          "text-white bg-yellow-500": type === "WARNING",
          "text-white bg-green-500": type === "SUCCESS",
          "text-white bg-red-500": type === "DANGER",
        },
        className
      )}
    >
      {children}
    </p>
  );
};
export default Badge;
