import { db } from "../db.js";

//retrieving the list of faculties
export const getFaculties = (req, res) => {
  // Query to select all faculties from the filieres table
  const q = "SELECT id_filiere, filiere FROM filieres";

  db.query(q, (err, data) => {
    if (err) {
      // If there's an error during the query, return a server error response
      return res.status(500).json(err);
    }
    if (data.length === 0) {
      // If no faculties are found, return a 'not found' response
      return res.status(404).json("No faculties found");
    }

    // If faculties are found, return them in the response
    return res.status(200).json(data);
  });
};

//retrieving the list of faculties
export const getPrerequisites = (req, res) => {
  // Query to select all faculties from the filieres table
  const q = "SELECT id_prerequisite, id_filiere, prerequisite FROM prerequisites";

  db.query(q, (err, data) => {
    if (err) {
      // If there's an error during the query, return a server error response
      return res.status(500).json(err);
    }
    if (data.length === 0) {
      // If no prerequisites are found, return a 'not found' response
      return res.status(404).json("No prerequisites found");
    }

    // If faculties are found, return them in the response
    return res.status(200).json(data);
  });
};
