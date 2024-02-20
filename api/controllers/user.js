import { db } from "../db.js";
import jwt from "jsonwebtoken";

export const createFacultyMember = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.status(401).json("Not authenticated!");
  }

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) {
      return res.status(403).json("Token is not valid!");
    }

    const query =
      "INSERT INTO users (email, password, filiere, role) VALUES (?, ?, ?, ?)";
    const values = [
      req.body.email,
      req.body.password,
      req.body.filiere,
      req.body.role,
    ];

    db.query(query, values, (error, data) => {
      if (error) {
        return res.status(500).json(error);
      }
      return res.json("Faculty member has been created.");
    });
  });
};
