import "./professorProfile.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Profile from "../../components/profile/Profile";

const ProfessorProfile = () => {
  return (
    <div className="professorProfile">
      <Sidebar role="professor" />
      <div className="professorProfileContainer">
        <Navbar />
        <div className="profile">
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default ProfessorProfile;
