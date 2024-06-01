import { BaseTypeComponent } from "@/utils/types";
import clsx from "clsx";
import { FC } from "react";

const BaseLayout: FC<BaseTypeComponent> = ({ children, className }) => (
  <div
    className={clsx(
      "px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32 min-h-screen",
      className
    )}
  >
    {children}
  </div>
);

export default BaseLayout;
