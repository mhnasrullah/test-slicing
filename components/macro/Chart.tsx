import { FC } from "react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Chart: FC<{
  data: any[];
}> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <AreaChart
        width={730}
        height={250}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorR" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#354efe" stopOpacity={0.2} />
            <stop offset="95%" stopColor="#354efe" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorL" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#7f8188" stopOpacity={0.2} />
            <stop offset="95%" stopColor="#7f8188" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="x" />
        <YAxis />
        {/* <CartesianGrid strokeDasharray="3" /> */}
        <Tooltip />
        <Area
          type="monotone"
          dataKey="recent"
          stroke="#354efe"
          fillOpacity={1}
          fill="url(#colorR)"
        />
        <Area
          type="monotone"
          dataKey="last"
          stroke="#7f8188"
          fillOpacity={1}
          fill="url(#colorL)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Chart;
