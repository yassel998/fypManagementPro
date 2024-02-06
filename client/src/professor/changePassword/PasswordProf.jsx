import "./passwordProf.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import ChangePassword from "../../components/changePassword/ChangePassword";

const PasswordProf = () => {
  return (
    <div className="passwordProf">
      <Sidebar role="professor" />
      <div className="passwordProfContainer">
        <Navbar />
        <div className="password">
          <ChangePassword />
        </div>
      </div>
    </div>
  );
};

export default PasswordProf;
