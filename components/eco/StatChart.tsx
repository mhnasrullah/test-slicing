import { FC, useMemo } from "react";
import Card from "../nano/Card";
import Text from "../nano/Text";
import Chart from "../macro/Chart";
import clsx from "clsx";
import { fetchSWR } from "@/lib/swr";

const useStatChart = () => {
  const { data: dataStat } = fetchSWR("/api/stat-chart");

  const data = useMemo(() => {
    return {
      chart: dataStat?.data?.chart ?? [],
      detail: [
        {
          label: "Resolved",
          value: dataStat?.data?.detail?.resolved ?? 0,
        },
        {
          label: "Received",
          value: dataStat?.data?.detail?.received ?? 0,
        },
        {
          label: "Average First Response Time",
          value: dataStat?.data?.detail?.avg_st_response_time ?? "-",
        },
        {
          label: "Average Response Time",
          value: dataStat?.data?.detail?.avg_response_time ?? "-",
        },
        {
          label: "Resolution within SLA",
          value: dataStat?.data?.detail?.resolution_within_sla ?? "-",
        },
      ],
    };
  }, [dataStat]);

  return { data: data.detail, chart: data.chart };
};

const StatChart: FC = () => {
  const { data, chart: chartData } = useStatChart();
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
          <Chart data={chartData} />
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

export default StatChart;
