import { BaseTypeComponent } from "@/utils/types";
import clsx from "clsx";
import { FC } from "react";

const Card: FC<BaseTypeComponent> = ({ children, className }) => (
  <div
    className={clsx(
      "rounded-md border border-gray bg-white p-4 w-full",
      className
    )}
  >
    {children}
  </div>
);

export default Card;
