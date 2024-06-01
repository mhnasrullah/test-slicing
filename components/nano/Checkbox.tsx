import { BaseTypeComponent } from "@/utils/types";
import { IconCheck } from "@tabler/icons-react";
import clsx from "clsx";
import { FC } from "react";

interface CheckboxProps extends BaseTypeComponent {
  isChecked?: boolean;
}

const Checkbox: FC<CheckboxProps> = ({ children, className, isChecked }) => {
  return (
    <div className={clsx("flex", className)}>
      <div className="mr-2">
        {isChecked ? (
          <div className="bg-primary rounded-full w-5 h-5 flex items-center justify-center">
            <IconCheck color="white" size={20} />
          </div>
        ) : (
          <div className="border border-l-gray rounded-full w-5 h-5"></div>
        )}
      </div>
      {children}
    </div>
  );
};
export default Checkbox;
