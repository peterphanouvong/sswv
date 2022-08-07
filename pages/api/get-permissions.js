import { decode } from "jsonwebtoken";
import Cookies from "cookies";

// Get the permissions of the current user by looking at the JWT

export default function handler(req, res) {
  const cookies = new Cookies(req, res);

  const jwt = cookies.get("kinde_token");
  console.log("COOKIES:", jwt);
  res.status(200).json({ name: "John Doe" });
}
