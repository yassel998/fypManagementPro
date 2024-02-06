import "./newfyp.scss";
import AddFyp from "../../components/addFyp/AddFyp";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const NewFyp = () => {
  return (
    <div className="newfyp">
      <Sidebar role="professor" />
      <div className="newfypContainer">
        <Navbar />
        <div className="newpfe">
          <AddFyp />
        </div>
      </div>
    </div>
  );
};

export default NewFyp;
