import "./password.scss";
import ChangePassword from "../../components/changePassword/ChangePassword";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const PasswordStd = () => {
  return (
    <div className="passwordStd">
      <Sidebar role="student" />
      <div className="passwordStdContainer">
        <Navbar />
        <div className="password">
          <ChangePassword />
        </div>
      </div>
    </div>
  );
};

export default PasswordStd;
