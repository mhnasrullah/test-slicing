// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.status(405).json({ message: "Method Not Allowed" });
    return;
  }

  const data = [
    {
      photo: "https://api.dicebear.com/8.x/bottts/jpg?seed=TomCruise",
      message: "Meeting with Tom Cruise",
      name: "Tom Cruise",
      date: "2021-09-01T16:20:00.000Z",
      last_update: "updated 1 day ago",
      priority: "High",
    },
    {
      photo: "https://api.dicebear.com/8.x/bottts/jpg?seed=ScarlettJohansson",
      message: "Ticket with Scarlett Johansson",
      name: "Scarlett Johansson",
      date: "2021-10-12T09:15:00.000Z",
      last_update: "updated 2 days ago",
      priority: "Normal",
    },
    {
      photo: "https://api.dicebear.com/8.x/bottts/jpg?seed=RobertDowneyJr",
      message: "Meeting with Robert Downey Jr.",
      name: "Robert Downey Jr.",
      date: "2021-11-05T14:30:00.000Z",
      last_update: "updated 3 hours ago",
      priority: "Low",
    },
    {
      photo: "https://api.dicebear.com/8.x/bottts/jpg?seed=ChrisHemsworth",
      message: "Ticket with Chris Hemsworth",
      name: "Chris Hemsworth",
      date: "2021-12-22T18:45:00.000Z",
      last_update: "updated 1 week ago",
      priority: "High",
    },
    {
      photo: "https://api.dicebear.com/8.x/bottts/jpg?seed=NataliePortman",
      message: "Meeting with Natalie Portman",
      name: "Natalie Portman",
      date: "2022-01-15T11:00:00.000Z",
      last_update: "updated 4 hours ago",
      priority: "Normal",
    },
    {
      photo: "https://api.dicebear.com/8.x/bottts/jpg?seed=ChrisEvans",
      message: "Ticket with Chris Evans",
      name: "Chris Evans",
      date: "2022-02-18T08:20:00.000Z",
      last_update: "updated 5 days ago",
      priority: "Low",
    },
    {
      photo: "https://api.dicebear.com/8.x/bottts/jpg?seed=MarkRuffalo",
      message: "Meeting with Mark Ruffalo",
      name: "Mark Ruffalo",
      date: "2022-03-09T13:50:00.000Z",
      last_update: "updated 1 month ago",
      priority: "High",
    },
    {
      photo: "https://api.dicebear.com/8.x/bottts/jpg?seed=JeremyRenner",
      message: "Ticket with Jeremy Renner",
      name: "Jeremy Renner",
      date: "2022-04-25T17:30:00.000Z",
      last_update: "updated 2 weeks ago",
      priority: "Normal",
    },
    {
      photo: "https://api.dicebear.com/8.x/bottts/jpg?seed=PaulRudd",
      message: "Meeting with Paul Rudd",
      name: "Paul Rudd",
      date: "2022-05-16T10:40:00.000Z",
      last_update: "updated 6 hours ago",
      priority: "Low",
    },
    {
      photo: "https://api.dicebear.com/8.x/bottts/jpg?seed=BenedictCumberbatch",
      message: "Ticket with Benedict Cumberbatch",
      name: "Benedict Cumberbatch",
      date: "2022-06-05T09:00:00.000Z",
      last_update: "updated 3 days ago",
      priority: "High",
    },
    {
      photo: "https://api.dicebear.com/8.x/bottts/jpg?seed=BrieLarson",
      message: "Meeting with Brie Larson",
      name: "Brie Larson",
      date: "2022-07-21T15:15:00.000Z",
      last_update: "updated 1 hour ago",
      priority: "Normal",
    },
    {
      photo: "https://api.dicebear.com/8.x/bottts/jpg?seed=TomHolland",
      message: "Ticket with Tom Holland",
      name: "Tom Holland",
      date: "2022-08-14T12:25:00.000Z",
      last_update: "updated 1 month ago",
      priority: "Low",
    },
    {
      photo: "https://api.dicebear.com/8.x/bottts/jpg?seed=ChadwickBoseman",
      message: "Meeting with Chadwick Boseman",
      name: "Chadwick Boseman",
      date: "2022-09-27T14:50:00.000Z",
      last_update: "updated 2 days ago",
      priority: "High",
    },
    {
      photo: "https://api.dicebear.com/8.x/bottts/jpg?seed=ElizabethOlsen",
      message: "Ticket with Elizabeth Olsen",
      name: "Elizabeth Olsen",
      date: "2022-10-18T11:30:00.000Z",
      last_update: "updated 4 weeks ago",
      priority: "Normal",
    },
    {
      photo: "https://api.dicebear.com/8.x/bottts/jpg?seed=SebastianStan",
      message: "Meeting with Sebastian Stan",
      name: "Sebastian Stan",
      date: "2022-11-29T09:10:00.000Z",
      last_update: "updated 6 hours ago",
      priority: "Low",
    },
    {
      photo: "https://api.dicebear.com/8.x/bottts/jpg?seed=AnthonyMackie",
      message: "Ticket with Anthony Mackie",
      name: "Anthony Mackie",
      date: "2022-12-22T16:45:00.000Z",
      last_update: "updated 5 days ago",
      priority: "High",
    },
    {
      photo: "https://api.dicebear.com/8.x/bottts/jpg?seed=DonCheadle",
      message: "Meeting with Don Cheadle",
      name: "Don Cheadle",
      date: "2023-01-30T08:20:00.000Z",
      last_update: "updated 1 day ago",
      priority: "Normal",
    },
    {
      photo: "https://api.dicebear.com/8.x/bottts/jpg?seed=ChrisPratt",
      message: "Ticket with Chris Pratt",
      name: "Chris Pratt",
      date: "2023-02-15T12:50:00.000Z",
      last_update: "updated 3 hours ago",
      priority: "Low",
    },
    {
      photo: "https://api.dicebear.com/8.x/bottts/jpg?seed=ZoeSaldana",
      message: "Meeting with Zoe Saldana",
      name: "Zoe Saldana",
      date: "2023-03-08T18:15:00.000Z",
      last_update: "updated 2 weeks ago",
      priority: "High",
    },
    {
      photo: "https://api.dicebear.com/8.x/bottts/jpg?seed=DaveBautista",
      message: "Ticket with Dave Bautista",
      name: "Dave Bautista",
      date: "2023-04-21T10:30:00.000Z",
      last_update: "updated 1 month ago",
      priority: "Normal",
    },
  ];

  const { page = 1, limit = 10 } = req.query;

  const start = (Number(page) - 1) * Number(limit);
  const end = Number(page) * Number(limit);

  return res.status(200).json({
    data: data.slice(start, end),
    meta: {
      page: Number(page),
      total_page: Math.ceil(data.length / Number(limit)),
      start_data: start + 1,
      end_data: end > data.length ? data.length : end,
      total_data: data.length,
    },
  });
}
