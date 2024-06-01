// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.status(405).json({ message: "Method Not Allowed" });
    return;
  }

  const data = [
    {
      label: "Waiting on feature request",
      value: 4238,
    },
    {
      label: "Awaiting customer response",
      value: 1005,
    },
    {
      label: "Awaiting developer fix",
      value: 914,
    },
    {
      label: "Pending",
      value: 281,
    },
  ];

  return res.status(200).json(data);
}
