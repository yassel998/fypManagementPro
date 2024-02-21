import { db } from "../db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const createFacultyMember = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.status(401).json("Not authenticated!");
  }

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) {
      return res.status(403).json("Token is not valid!");
    }

    // hash the password before storing it
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const query =
      "INSERT INTO users (email, password, filiere, role) VALUES (?, ?, ?, ?)";
    const values = [
      req.body.email,
      hash,
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
