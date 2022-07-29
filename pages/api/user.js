// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { prisma } from "../../db/index.ts";
export default async function handler(req, res) {
  const body = req.body;

  // see if the user exists
  const existingUser = await prisma.user.findUnique({
    where: {
      id: body.id,
    },
  });

  if (existingUser == null) {
    // if not, create a user and create profile
    const newUser = await prisma.user.create({
      data: {
        id: body.id,
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.preferred_email,
      },
    });

    await prisma.profile.create({
      data: {
        id: body.id,
      },
    });

    res.status(200).json(newUser);
  }

  res.status(200).json({ message: "Did not create new user" });
}
