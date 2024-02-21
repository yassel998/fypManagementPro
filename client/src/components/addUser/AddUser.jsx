import "./addUser.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import Select from "react-select";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddUser = ({ setOpen, slug, role }) => {
  // fetches the list of faculties from the backend
  const [faculty, setFaculty] = useState([]);
  // State to track the selected option
  const [selectedFaculty, setSelectedFaculty] = useState(null);

  useEffect(() => {
    const fetchFaculties = async () => {
      try {
        const res = await axios.get("/faculties");
        setFaculty(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchFaculties();
  }, []);

  // transform the 'faculty' array into a format suitable for 'react-select'.
  const faculties =
    faculty.length > 0
      ? faculty.map((f) => ({
          value: f.id_filiere,
          label: f.filiere,
        }))
      : [];

  // Handler for when an option is selected
  const handleFacultyChange = (selectedOption) => {
    setSelectedFaculty(selectedOption.value);
    // Update faculty field in inputs state.
    setInputs((prevInputs) => ({
      ...prevInputs,
      filiere: selectedOption.value,
    }));
  };

  // initializes state to manage form inputs
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    filiere: selectedFaculty,
    role: role,
  });

  // update form input values based on user input
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/users/createMember", inputs);
      // ntrotification for Account created successfully!
      toast.success("Compte créé avec succès !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } catch (err) {
      console.log(err);
    }

    setOpen(false);
  };
  return (
    <div className="addUser">
      <div className="modal">
        <span className="close" onClick={() => setOpen(false)}>
          X
        </span>
        <h1>Ajouter nouveau / nouvelle {slug}</h1>
        <form onSubmit={handleSubmit}>
          <div className="item">
            <label>Email</label>
            <input
              type="email"
              placeholder="email@gmail.com"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="item">
            <label>Mot de passe</label>
            <input
              type="string"
              placeholder="*******"
              name="password"
              onChange={handleChange}
            />
          </div>
          <div className="item">
            <label> Département</label>
            <Select
              options={faculties}
              menuPlacement="top"
              placeholder="Sélectionnez votre filière"
              value={faculties.find(
                (faculty) => faculty.value === selectedFaculty
              )}
              onChange={handleFacultyChange}
            />
          </div>
          <button>Ajouter</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
