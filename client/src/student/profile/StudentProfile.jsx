import "./studentProfile.scss";
import Profile from "../../components/profile/Profile";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const StudentProfile = () => {
  return (
    <div className="studentProfile">
      <Sidebar role="student" />
      <div className="studentProfileContainer">
        <Navbar />
        <div className="profile">
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
