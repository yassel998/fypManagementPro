import "./supervisorHome.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import ArChart from "../../components/areaChart/ArChart";

const SupervisorHome = () => {
  return (
    <div className="supervisorHome">
      <Sidebar role="supervisor" />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="headOfDeptSup" />
          <Widget type="SupProf" />
          <Widget type="SupStudent" />
          <Widget type="SupActivation" />
        </div>
        <div className="charts">
          <ArChart />
        </div>
      </div>
    </div>
  );
};

export default SupervisorHome;
