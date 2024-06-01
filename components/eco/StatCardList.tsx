import { FC, useMemo } from "react";
import Card from "../nano/Card";
import Text from "../nano/Text";
import { fetchSWR } from "@/lib/swr";

const useStatCardList = () => {
  const { data: dataStat } = fetchSWR("/api/stat-top");

  const data = useMemo(
    () => [
      {
        label: "Unresolved",
        value: dataStat?.data?.unresolved ?? 0,
      },
      {
        label: "Overdue",
        value: dataStat?.data?.overdue ?? 0,
      },
      {
        label: "Open",
        value: dataStat?.data?.open ?? 0,
      },
      {
        label: "On hold",
        value: dataStat?.data?.on_hold ?? 0,
      },
    ],
    [dataStat]
  );

  return { data };
};

const StatCardList: FC = () => {
  const { data } = useStatCardList();
  return (
    <div className="mt-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {data.map((item, index) => (
          <Card
            key={index}
            className="hover:border-primary group hover:shadow-primary hover:shadow"
          >
            <Text
              className="text-center group-hover:text-primary"
              colors="gray"
            >
              {item.label}
            </Text>
            <p className="mt-4 text-3xl text-center group-hover:text-primary font-bold">
              {item.value}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default StatCardList;
