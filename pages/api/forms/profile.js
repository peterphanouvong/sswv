import { prisma } from "../../../db/index.ts";

export default async function handler(req, res) {
  // Get data submitted in request's body.
  const body = req.body;
  const { id, firstName, lastName, email, vnswId } = body;

  // Optional logging to see the responses
  // in the command line where next.js app is running.

  // // Guard clause checks for first and last name,
  // // and returns early if they are not found
  // if (!body.first || !body.last) {
  //   // Sends a HTTP bad request error code
  //   return res.status(400).json({ data: 'First or last name not found' })
  // }
  await prisma.user.update({
    where: {
      id,
    },
    data: {
      firstName,
      lastName,
      email,
    },
  });

  await prisma.profile.update({
    where: {
      id,
    },
    data: {
      vnswId,
    },
  });

  res.redirect(307, `/profile`);
}
