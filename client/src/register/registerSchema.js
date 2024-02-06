import * as yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

const dateOfBirthValidation = yup
  .date("Veuillez saisir une date de naissance valide")
  .test({
    name: "isValidDate",
    message: "Veuillez saisir une date de naissance valide",
    test: (value) => {
      // Use a custom validation function for more specific date checks
      if (!value) return true; // Empty value is handled by required validation
      const date = new Date(value);
      return !isNaN(date.getTime());
    },
  })
  .max(new Date(), "La date de naissance ne peut pas être dans le futur");
export const schema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^[A-Za-z ]*$/, "Veuillez saisir un prénom valide")
    .required("Champ obligatoire"),

  lastName: yup
    .string()
    .matches(/^[A-Za-z ]*$/, "Veuillez saisir un nom valide")
    .required("Champ obligatoire"),

  dateOfBirth: dateOfBirthValidation.required("Champ obligatoire"),

  email: yup
    .string()
    .email("Veuillez entrer une adresse e-mail valide")
    .required("Champ obligatoire"),

  phone: yup
    .string()
    .matches(phoneRegExp, "Le numéro de téléphone n'est pas valide")
    .required("Champ obligatoire"),

  address: yup
    .string()
    .matches(/^[A-Za-z0-9\s,-]*$/, "Veuillez saisir une adresse valide")
    .required("Champ obligatoire"),

  apogeeNumber: yup
    .number()
    .integer("Le numéro Apogée doit être un nombre entier")
    .integer("Le numéro Apogée doit être un nombre entier")
    .min(10000000, "Le numéro Apogée doit comporter exactement 8 chiffres")
    .max(99999999, "Le numéro Apogée doit comporter exactement 8 chiffres")
    .required("Champ obligatoire"),

  cne: yup
    .string()
    .matches(/^[A-Za-z]\d{6}$/, "Veuillez saisir un CNE valide")
    .required("Champ obligatoire"),

  password: yup
    .string()
    .min(5, "Le mot de passe doit comporter au moins cinq caractères")
    .matches(passwordRules, {
      message:
        "Le mot de passe doit contenir au moins une lettre majuscule, une lettre minuscule et un chiffre",
    })
    .required("Champ obligatoire"),

  confirmPassword: yup
    .string()
    .oneOf(
      [yup.ref("password"), null],
      "Les mots de passe doivent correspondre"
    )
    .required("Champ obligatoire"),

  filiere: yup.string().required("Veuillez sélectionner une filière."),
});
