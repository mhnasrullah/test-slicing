import { BaseTypeComponent } from "@/utils/types";
import clsx from "clsx";
import { FC } from "react";

interface TextProps extends BaseTypeComponent {
  size?: "sm" | "md" | "lg";
  colors?: "dark" | "gray" | "light";
}

const Text: FC<TextProps> = ({ className, children, size = "md", colors }) => {
  return (
    <p
      className={clsx(
        {
          "text-sm": size === "sm",
          "text-base": size === "md",
          "text-2xl": size === "lg",
        },
        {
          "text-dark": colors === "dark",
          "text-gray": colors === "gray",
          "text-white": colors === "light",
        },
        className
      )}
    >
      {children}
    </p>
  );
};
export default Text;
