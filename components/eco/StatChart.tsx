import { FC } from "react";
import Card from "../Card";
import Text from "../nano/Text";
import Chart from "../macro/Chart";
import clsx from "clsx";

const useStatChart = () => {
  const data = [
    {
      label: "Resolved",
      value: 449,
    },
    {
      label: "Received",
      value: 426,
    },
    {
      label: "Average First Response Time",
      value: "33m",
    },
    {
      label: "Average Response Time",
      value: "3h 8m",
    },
    {
      label: "Resolution within SLA",
      value: "94%",
    },
  ];
  return { data };
};

const StatChart: FC = () => {
  const { data } = useStatChart();
  return (
    <Card className="mt-6">
      <div className="lg:flex">
        <div className="flex-1 lg:pr-4">
          <div className="mb-4">
            <Text className="font-bold">Today&#39;s Trends</Text>
            <div className="flex justify-between items-center">
              <p className="text-sm">as of 25 May 2019 09:41 PM</p>
              <div className="flex gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-[20px] border border-primary" />
                  <p className="text-sm">Today</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-[20px] border border-gray" />
                  <p className="text-sm">Yesterday</p>
                </div>
              </div>
            </div>
          </div>
          <Chart
            data={[
              {
                x: "0",
                last: 35,
                recent: 15,
              },
              {
                x: "1",
                last: 20,
                recent: 20,
              },
              {
                x: "3",
                last: 35,
                recent: 50,
              },
              {
                x: "4",
                last: 25,
                recent: 30,
              },
              {
                x: "5",
                last: 50,
                recent: 60,
              },
              {
                x: "6",
                last: 45,
                recent: 50,
              },
            ]}
          />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-1 lg:border-l lg:border-l-l-gray">
          {data.map((item, index) => (
            <div
              key={index}
              className={clsx("p-4", {
                "lg:border-t lg:border-t-l-gray": index > 0,
              })}
            >
              <Text
                className="text-center text-sm group-hover:text-primary"
                colors="gray"
              >
                {item.label}
              </Text>
              <p className="mt-4 text-xl text-center group-hover:text-primary font-bold">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default StatChart