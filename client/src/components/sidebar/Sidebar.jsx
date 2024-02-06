import "./sidebar.scss";
import { menu } from "../../assets/data";
import { Link, useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Sidebar = ({ role }) => {
  const menuItems = menu[role] || [];

  const navigate = useNavigate();

  // Define the home page path based on the user's role
  const homePagePath =
    role === "supervisor"
      ? "/supervisor"
      : role === "student"
      ? "/student"
      : role === "headOfDepartment"
      ? "/headOfDepartment"
      : "/professor";

  const { logout } = useContext(AuthContext);

  const handleLogout = async () => {
    await logout();
    navigate("/"); // Navigate after logout
  };
  return (
    <div className="sidebar">
      <div className="top">
        <Link to={homePagePath} style={{ textDecoration: "none" }}>
          <img src={require("../../assets/logo.png")} alt="" />
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          {menuItems.map((menuItem) => (
            <div key={menuItem.title}>
              <p className="title">{menuItem.title}</p>
              {menuItem.listItems.map((listItem) => (
                <Link
                  to={listItem.url}
                  key={listItem.title}
                  style={{ textDecoration: "none" }}
                >
                  <li>
                    <listItem.icon className="icon" />
                    <span>{listItem.title}</span>
                  </li>
                </Link>
              ))}
              {menuItem.title === "UTILISATEUR" && (
                <li onClick={handleLogout}>
                  <LogoutIcon className="icon" />
                  <span>Se déconnecter</span>
                </li>
              )}
            </div>
          ))}
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
