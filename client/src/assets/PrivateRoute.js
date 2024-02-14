import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

//allowedRole (0 supervisor, 1 head of department, 2 professor, 3 student)
const PrivateRoute = ({ allowedRole }) => {
  const { currentUser } = useContext(AuthContext); // get the current user

  // Check if there is a current user and if their role matches the allowed role for this route
  const isAuthorized = currentUser && currentUser.role === allowedRole;

  return isAuthorized ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
