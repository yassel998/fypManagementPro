import "./hodNewFyp.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import AddFyp from "../../components/addFyp/AddFyp";

const HoDnewFyp = () => {
  return (
    <div className="hoDnewFyp">
      <Sidebar role="headOfDepartment" />
      <div className="hoDnewFypContainer">
        <Navbar />
        <div className="newpfe">
          <AddFyp />
        </div>
      </div>
    </div>
  );
};

export default HoDnewFyp;
