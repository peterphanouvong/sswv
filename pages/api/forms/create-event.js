import { PrismaClient } from "@prisma/client";
import { prisma } from "../../../db/index.ts";

export default async function handler(req, res) {
  // Get data submitted in request's body.
  const body = req.body;
  const { name, location, price, startTime, endTime } = body;

  // Optional logging to see the responses
  // in the command line where next.js app is running.

  // // Guard clause checks for first and last name,
  // // and returns early if they are not found
  // if (!body.first || !body.last) {
  //   // Sends a HTTP bad request error code
  //   return res.status(400).json({ data: 'First or last name not found' })
  // }
  await prisma.event.create({
    data: {
      name,
      location,
      price,
      startTime: new Date(startTime),
      endTime: new Date(endTime),
    },
  });

  res.redirect(307, "/events/create");
}
