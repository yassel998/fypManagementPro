import "./register.scss";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useFormik } from "formik";
import { schema } from "./registerSchema";
import axios from "axios";
import Swal from "sweetalert2";

const Register = () => {
  //fetches the list of faculties from the backend
  const [faculty, setFaculty] = useState([]);
  useEffect(() => {
    const fetchFaculties = async () => {
      try {
        const res = await axios.get("/faculties/");
        setFaculty(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchFaculties();
  }, []);

  //Transform the 'faculty' array into a format suitable for 'react-select'.
  const faculties =
    faculty.length > 0
      ? faculty.map((f) => ({
          value: f.id_filiere,
          label: f.filiere,
        }))
      : [];

  //fetches the list of prerequisites from the backend
  const [prerequisite, setPrerequisites] = useState([]);
  useEffect(() => {
    const fetchPrerequisites = async () => {
      try {
        const res = await axios.get("/faculties/prerequisites");
        setPrerequisites(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchPrerequisites();
  }, []);

  //alert in case of email already exists!
  const showEmailExistsAlert = () => {
    Swal.fire({
      title: "Email existe déjà!",
      text: "Veuillez saisir une autre adresse e-mail",
      icon: "warning",
      confirmButtonText: "OK",
    });
  };

  const onSubmit = async (values, actions) => {
    try {
      await axios.post("/auth/register", values);
      showRegistrationSuccessAlert(); // Call the success alert here
    } catch (err) {
      showEmailExistsAlert();
    }
    // Temporarily disabling form reset for testing
    // actions.resetForm();
  };

  //registration is OK
  const navigate = useNavigate();
  const showRegistrationSuccessAlert = () => {
    Swal.fire({
      title: "Inscription Réussie!",
      text: "Votre inscription a été effectuée avec succès. Bienvenue à bord!",
      icon: "success",
      confirmButtonText: "Super!",
    }).then(() => {
      // Navigate to the login page
      navigate("/"); // Replace '/login' with the actual login page path
    });
  };

  //formik
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched,
    setFieldValue,
    setFieldTouched,
    isSubmitting,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      email: "",
      phone: "",
      address: "",
      apogeeNumber: "",
      password: "",
      confirmPassword: "",
      cne: "",
      filiere: "",
      prerequis: [],
    },
    validationSchema: schema,
    onSubmit,
  });

  // Filter prerequisites based on the selected faculty
  const filteredPrerequisites = prerequisite.filter(
    (prerequisite) => prerequisite.id_filiere === values.filiere
  );

  //Transform the 'prerequisite' array into a format suitable for 'react-select'.
  const prerequisites =
    filteredPrerequisites.length > 0
      ? filteredPrerequisites.map((p) => ({
          value: p.id_prerequisite,
          label: p.prerequisite,
        }))
      : [];

  const selectedPrerequisites = prerequisites.filter((option) =>
    values.prerequis.includes(option.value)
  );

  const handlePrerequisites = (e) => {
    const ids = Array.isArray(e) ? e.map((x) => x.value) : [];
    setFieldValue("prerequis", ids);
  };

  const [file, setFile] = useState("");

  const animatedComponents = makeAnimated();

  return (
    <div className="register">
      <div className="container">
        <div className="title">
          <div className="left">
            <div className="right">
              <Link
                to="/"
                style={{ color: "black", fontSize: 18, textDecoration: "none" }}
              >
                Vous avez déjà un compte?
              </Link>
            </div>
            <header>Inscription</header>
          </div>
        </div>
        <form onSubmit={handleSubmit} action="">
          <div className="fields">
            <div className="input-field">
              <label htmlFor="">Prénom</label>
              <input
                type="text"
                placeholder="Entrez votre prénom"
                id="firstName"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.firstName && touched.firstName ? "input-error" : ""
                }
              />
              {errors.firstName && touched.firstName && (
                <p className="error">{errors.firstName}</p>
              )}
            </div>
            <div className="input-field">
              <label htmlFor="">Nom</label>
              <input
                type="text"
                placeholder="Entrez votre nom"
                id="lastName"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.lastName && touched.lastName ? "input-error" : ""
                }
              />
              {errors.lastName && touched.lastName && (
                <p className="error">{errors.lastName}</p>
              )}
            </div>
            <div className="input-field">
              <label htmlFor="">Date de naissance</label>
              <input
                type="date"
                id="dateOfBirth"
                value={values.dateOfBirth}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.dateOfBirth && touched.dateOfBirth ? "input-error" : ""
                }
              />
              {errors.dateOfBirth && touched.dateOfBirth && (
                <p className="error">{errors.dateOfBirth}</p>
              )}
            </div>
            <div className="input-field">
              <label htmlFor="">E-mail</label>
              <input
                type="email"
                placeholder="Entrez votre adresse e-mail"
                id="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.email && touched.email ? "input-error" : ""}
              />
              {errors.email && touched.email && (
                <p className="error">{errors.email}</p>
              )}
            </div>
            <div className="input-field">
              <label htmlFor="">Numéro de téléphone</label>
              <input
                type="number"
                placeholder="Entrez votre numéro de téléphone"
                id="phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.phone && touched.phone ? "input-error" : ""}
              />
              {errors.phone && touched.phone && (
                <p className="error">{errors.phone}</p>
              )}
            </div>
            <div className="input-field">
              <label htmlFor="">Adresse</label>
              <input
                type="text"
                placeholder="Entrez votre adresse"
                id="address"
                value={values.address}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.address && touched.address ? "input-error" : ""
                }
              />
              {errors.address && touched.address && (
                <p className="error">{errors.address}</p>
              )}
            </div>
            <div className="input-field">
              <label htmlFor="">Numéro apogée</label>
              <input
                type="number"
                placeholder="Entrez votre numéro d'apogée"
                id="apogeeNumber"
                value={values.apogeeNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.apogeeNumber && touched.apogeeNumber
                    ? "input-error"
                    : ""
                }
              />
              {errors.apogeeNumber && touched.apogeeNumber && (
                <p className="error">{errors.apogeeNumber}</p>
              )}
            </div>
            <div className="input-field">
              <label htmlFor="">Mot de passe</label>
              <input
                type="password"
                placeholder="Entrez votre mot de passe"
                id="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.password && touched.password ? "input-error" : ""
                }
              />
              {errors.password && touched.password && (
                <p className="error">{errors.password}</p>
              )}
            </div>
            <div className="input-field">
              <label htmlFor="">Confirmer mot de passe</label>
              <input
                type="password"
                placeholder="Confirmer votre mot de passe"
                id="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.confirmPassword && touched.confirmPassword
                    ? "input-error"
                    : ""
                }
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <p className="error">{errors.confirmPassword}</p>
              )}
            </div>
            <div className="input-field">
              <label htmlFor="">
                CNE <span className="cne">(Code national de l'étudiants)</span>
              </label>
              <input
                type="text"
                placeholder="Enter votre CNE"
                id="cne"
                value={values.cne}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.cne && touched.cne ? "input-error" : ""}
              />
              {errors.cne && touched.cne && (
                <p className="error">{errors.cne}</p>
              )}
            </div>
            <div className="input-field">
              <label htmlFor="">Filière</label>
              <Select
                options={faculties}
                menuPlacement="top"
                placeholder="Sélectionnez votre filière"
                value={faculties.find(
                  (faculty) => faculty.label === values.filiere
                )}
                onChange={(value) => setFieldValue("filiere", value.value)}
                onBlur={() => setFieldTouched("filiere", true)}
                className={
                  errors.filiere && touched.filiere ? "select-error" : "select"
                }
              />
              {errors.filiere && touched.filiere && (
                <p className="error">{errors.filiere}</p>
              )}
            </div>
            <div className="input-field">
              <label htmlFor="">Prérequis</label>
              <Select
                options={prerequisites}
                onChange={handlePrerequisites}
                value={selectedPrerequisites} // Set to the array of selected option objects
                menuPlacement="top"
                isMulti
                components={animatedComponents}
                placeholder="Sélectionnez vos prérequis"
                className="select"
              />
            </div>
          </div>
          <div className="bottom">
            <div className="image">
              <img
                src={
                  file
                    ? URL.createObjectURL(file)
                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                }
                alt=""
              />
              <label htmlFor="file">
                Image: <DriveFolderUploadOutlinedIcon className="icon" />
              </label>
              <input
                type="file"
                id="file"
                onChange={(e) => setFile(e.target.files[0])}
                style={{ display: "none" }}
              />
            </div>
            <button disabled={isSubmitting} type="submit">
              <span>Enregistrer</span>
              <ArrowForwardIcon />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
