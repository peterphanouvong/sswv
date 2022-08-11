import { prisma } from "../../../db/index.ts";

export default async function handler(req, res) {
  const events = await prisma.event.findMany();

  res.status(200).json(events);
}
