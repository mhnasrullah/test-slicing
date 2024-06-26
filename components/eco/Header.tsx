import { IconBell, IconMenu, IconSearch } from "@tabler/icons-react";
import { FC } from "react";
import Text from "../nano/Text";
import Image from "next/image";
import { useNavbar } from "@/store";

const Header: FC<{
  page?: string;
}> = ({
  page = "Overview",
}) => {
  const { show } = useNavbar((state) => state);
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-2">
        <button onClick={show} className="lg:hidden">
          <IconMenu color="#b7b8c6" />
        </button>
        <Text size="lg" className="font-bold" colors="dark">
          {page}
        </Text>
      </div>
      <div className="flex">
        <div className="border-r-[1px] flex gap-4 pr-4 border-r-l-gray">
          <button type="button">
            <IconSearch color="#b7b8c6" />
          </button>
          <button type="button">
            <IconBell color="#b7b8c6" />
          </button>
        </div>
        <div className="flex gap-4 items-center pl-4">
          <Text className="hidden md:block">Jones Ferdinand</Text>
          <Image
            src="/avatar.avif"
            alt="Jones Ferdinand"
            className="rounded-full"
            width={40}
            height={40}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
