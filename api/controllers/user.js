import { db } from "../db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

//************************************Supervisor*****************************************/
//create accoutns for professors/hod
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
    const values = [req.body.email, hash, req.body.filiere, req.body.role];

    db.query(query, values, (error, data) => {
      if (error) {
        return res.status(500).json(error);
      }
      return res.json("Faculty member has been created.");
    });
  });
};

//list of users(hod & professors)
export const getAllHeadsOfDepartments = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.status(401).json("Not authenticated!");
  }

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) {
      return res.status(403).json("Token is not valid!");
    }

    const role = req.query.role;

    const query = `
      SELECT users.id, users.firstName, users.lastName, users.email,users.phone, filieres.filiere AS filiereName 
      FROM users 
      JOIN filieres ON users.filiere = filieres.id_filiere 
      WHERE users.role = ?
    `;

    db.query(query, role, (error, results) => {
      if (error) {
        return res.status(500).json(error);
      }
      if (results.length === 0) {
        return res
          .status(404)
          .json({ message: "No heads of departments found" });
      }
      res.json(results);
    });
  });
};

export const changeUserRole = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.status(401).json("Not authenticated!");
  }

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) {
      return res.status(403).json("Token is not valid!");
    }

    const userId = req.body.userId;
    const newRole = req.body.newRole;

    const query = "UPDATE users SET role = ? WHERE id = ?";

    const values = [newRole, userId];

    db.query(query, values, (error, data) => {
      if (error) {
        return res.status(500).json(error);
      }
      if (data.affectedRows > 0) {
        return res.json("User role has been successfully changed.");
      } else {
        return res.status(404).json("User not found.");
      }
    });
  });
};
