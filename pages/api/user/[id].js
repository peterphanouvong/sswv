import { prisma } from "../../../db/index.ts";

export default async function handler(req, res) {
  // Get data submitted in request's body.
  const { id } = req.query;

  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
    include: {
      profile: {
        include: {
          activeKidsVoucher: true,
        },
      },
    },
  });
  res.status(200).json(user);
}
