// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method Not Allowed" });
    return;
  }
  const { email, password } = req.body;

  if (email === "admin@admin.com" && password === "admin123") {
    return res.status(200).json({
      message: "Login Success",
      data: { username: "Admin", role: "ADMIN" },
    });
  }

  if (email === "guest@guest.com" && password === "guest123") {
    return res.status(200).json({
      message: "Login Success",
      data: { username: "Guest", role: "GUEST" },
    });
  }

  return res.status(401).json({ message: "Email or Password is wrong" });
}
