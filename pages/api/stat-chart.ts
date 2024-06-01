// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.status(405).json({ message: "Method Not Allowed" });
    return;
  }

  const dataChart = [
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
  ];

  return res.status(200).json({
    chart: dataChart,
    detail: {
      resolved: 449,
      received: 426,
      avg_st_response_time: "33m",
      avg_response_time: "3h 8m",
      resolution_within_sla: "94%",
    }
  });
}
