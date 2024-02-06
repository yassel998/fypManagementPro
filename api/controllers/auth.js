import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
  //CHECK EXISTING USER
  const q = "SELECT * FROM users WHERE email = ?  ";

  db.query(q, req.body.email, (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("User already exists!");

    //Hash the password and create a user
    const salt = bcrypt.genSaltSync(10);
    //Without a salt, if two users have the same password, they would generate the same hash and also salt improves the security of stored passwords
    const hash = bcrypt.hashSync(req.body.password, salt);

    const q =
      "INSERT INTO users(`filiere`,`firstName`,`lastName`,`dateOfBirth`,`email`,`phone`,`address`,`apogeeNumber`,`password`,`cne`) VALUES (?)";
    const values = [
      req.body.filiere,
      req.body.firstName,
      req.body.lastName,
      req.body.dateOfBirth,
      req.body.email,
      req.body.phone,
      req.body.address,
      req.body.apogeeNumber,
      hash,
      req.body.cne,
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);

      // Insert prerequisites if any
      const userId = data.insertId;
      const prerequisites = req.body.prerequis;

      if (Array.isArray(prerequisites) && prerequisites.length) {
        prerequisites.forEach((prerequisiteId) => {
          const insertPrerequisiteQuery =
            "INSERT INTO student_prerequisites (id_student, id_prerequisite) VALUES (?, ?)";
          db.query(
            insertPrerequisiteQuery,
            [userId, prerequisiteId],
            (err, data) => {
              if (err) {
                console.log(err);
              }
            }
          );
        });
      }

      return res.status(200).json("User has been created.");
    });
  });
};

export const login = (req, res) => {
  //CHECK USER

  const q = "SELECT * FROM users WHERE email = ?";

  db.query(q, [req.body.email], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0)
      return res.status(404).json("Utilisateur non trouvé!");

    //If there is no error and our user exist we are going to check our password
    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );

    //If our password is not correct
    if (!isPasswordCorrect)
      return res.status(400).json("Mauvais email ou mot de passe !");

    //create our token
    const token = jwt.sign({ id: data[0].id }, "jwtkey"); //jwtkey : secret-key
    const { password, ...other } = data[0]; //send other informations not password

    res
      .cookie("access_token", token, {
        //access_token is the cookie-name
        httpOnly: true, //for extra security
      })
      .status(200)
      .json(other);
  });
};

export const logout = (req, res) => {
  res.clearCookie("access_token",{
    sameSite:"none",
    secure:true
  }).status(200).json("User has been logged out.")
};