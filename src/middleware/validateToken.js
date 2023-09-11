import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const authrequired = (req, res, next) => {
  try {
    const token = req.cookies.token; // Obtén el token desde las cookies

    if (!token) {
      return res.status(401).json({ message: "Authorization denied" });
    }

    jwt.verify(token, TOKEN_SECRET, (error, user) => {
      if (error) {
        return res.status(401).json({ message: "Invalid token" });
      }
      
      req.user = user;
      next();
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};