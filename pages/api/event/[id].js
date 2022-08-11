import { prisma } from "../../../db/index.ts";

export default async function handler(req, res) {
  // Get data submitted in request's body.
  const { id } = req.query;

  const event = await prisma.event.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  console.log(event);

  res.status(200).json(event);
}
