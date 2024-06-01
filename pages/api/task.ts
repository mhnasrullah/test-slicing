// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.status(405).json({ message: "Method Not Allowed" });
    return;
  }

  const data = [
    {
      label: "Finish ticket update",
      status: "urgent",
      complete: false,
    },
    {
      label: "Create new ticket example",
      status: "new",
      complete: false,
    },
    {
      label: "Update ticket report",
      status: "default",
      complete: true,
    },
  ];

  return res.status(200).json(data);
}
