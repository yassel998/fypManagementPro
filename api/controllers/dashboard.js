import { db } from "../db.js";

//********************************supervisor******************************************

//retrieves the total number of heads of department
export const getNumberOfHeadsOfDepartment = (req, res) => {
  const query = "SELECT COUNT(*) AS num FROM users WHERE role = 1";

  db.query(query, (err, result) => {
    if (err) {
      console.error(err);
      return res
        .status(500)
        .json({ message: "An error occurred while fetching data." });
    }

    res.status(200).json(result[0]);
  });
};

//retrieves the total number of professors
export const getNumberOfProfessors = (req, res) => {
  const query = "SELECT COUNT(*) AS num FROM users WHERE role = 2";

  db.query(query, (err, result) => {
    if (err) {
      console.error(err);
      return res
        .status(500)
        .json({ message: "An error occurred while fetching data." });
    }

    res.status(200).json(result[0]);
  });
};

//retrieves the total number of activated student accounts
export const getNumberOfStudents = (req, res) => {
  const query =
    "SELECT COUNT(*) AS num FROM users WHERE role = 3 AND isValid = 1";

  db.query(query, (err, result) => {
    if (err) {
      console.error(err);
      return res
        .status(500)
        .json({ message: "An error occurred while fetching data." });
    }

    res.status(200).json(result[0]);
  });
};

//retrieves the total number of no-activated student accounts
export const getNumberOfPendingActivations = (req, res) => {
  const query =
    "SELECT COUNT(*) AS num FROM users WHERE role = 3 AND isValid = 0";

  db.query(query, (err, result) => {
    if (err) {
      console.error(err);
      return res
        .status(500)
        .json({ message: "An error occurred while fetching data." });
    }

    res.status(200).json(result[0]);
  });
};
