import { prisma } from "../../../db/index.ts";

export default async function handler(req, res) {
  // Get data submitted in request's body.
  const { id } = req.query;

  const profile = await prisma.profile.findUnique({
    where: {
      id: id,
    },
  });

  res.status(200).json(profile);
}
