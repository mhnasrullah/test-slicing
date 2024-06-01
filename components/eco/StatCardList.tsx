import { FC } from "react";
import Card from "../Card";
import Text from "../nano/Text";

const useStatCardList = () => {
  const data = [
    {
      label: "Unresolved",
      value: 60,
    },
    {
      label: "Overdue",
      value: 16,
    },
    {
      label: "Open",
      value: 43,
    },
    {
      label: "On hold",
      value: 64,
    },
  ];

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
