import { Link, useNavigate } from "react-router-dom";
import "./login.scss";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/authContext";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [err, setError] = useState(null);

  const { currentUser, login } = useContext(AuthContext);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
    } catch (err) {
      setError(err.response.data);
    }
  };

  //This useEffect will run whenever currentUser changes
  //navigate based on the updated currentUser state
  useEffect(() => {
    if (currentUser) {
      switch (currentUser.role) {
        case 0:
          navigate("/supervisor");
          break;
        case 1:
          navigate("/headOfDepartment");
          break;
        case 2:
          navigate("/professor");
          break;
        case 3:
        default:
          navigate("/student");
      }
    }
  }, [currentUser, navigate]);

  return (
    <div className="login">
      <div className="container">
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <h1>Se Connecter</h1>
            <div className="input-box">
              <input
                type="email"
                name="email"
                placeholder="email"
                required
                onChange={handleChange}
              />
              <PersonIcon className="logo" />
            </div>
            <div className="input-box">
              <input
                type="password"
                name="password"
                placeholder="mot de passe"
                required
                onChange={handleChange}
              />
              <LockIcon className="logo" />
            </div>
            <div className="rememberForgot">
              <label>
                <input type="checkbox" />
                &nbsp;Se souvenir de moi &nbsp;
              </label>
              <Link className="forgot">Mot de passe oublié ?</Link>
            </div>
            <button className="btn" type="submit">
              Se Connecter
            </button>
            {err && <p className="error-message">{err}</p>}
            <div className="register-link">
              <p>Vous n'avez pas de compte ?</p> &nbsp;&nbsp;
              <Link className="linkReg" to="./register">
                Inscription
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
