import { BaseTypeComponent } from "@/utils/types";
import clsx from "clsx";
import { FC } from "react";

interface ButtonProps extends BaseTypeComponent {
  colors?: "dark" | "gray" | "primary";
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
  className,
  children,
  type = "button",
  colors = "primary",
  onClick,
}) => {
  return (
    <button
      className={clsx(
        {
          "bg-dark": colors === "dark",
          "bg-gray": colors === "gray",
          "bg-primary text-white": colors === "primary",
        },
        "p-2 w-full rounded-md",
        className
      )}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
export default Button;
