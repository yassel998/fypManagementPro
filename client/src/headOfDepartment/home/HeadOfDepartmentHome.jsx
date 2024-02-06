import "./headOfdept.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";
import LineChartBox from "../../components/lineChart/LineChartBox";
import PieChartBox from "../../components/pieChart/PieChart";

const HeadOfDepartmentHome = () => {
  const data = [
    { year: 2018, fyps: 13 },
    { year: 2019, fyps: 19 },
    { year: 2020, fyps: 22 },
    { year: 2021, fyps: 13 },
    { year: 2022, fyps: 5 },
    { year: 2023, fyps: 15 },
    { year: 2024, fyps: 13 },
  ];

  const pieChartdata = [
    { name: "En Attente", value: 14, color: "#0088FE" },
    { name: "En Cours", value: 3, color: "#00C49F" },
    { name: "Terminé", value: 1, color: "#FFBB28" },
    { name: "Soutenu", value: 2, color: "#FF8042" },
  ];

  return (
    <div className="headOfDepartmentHome">
      <Sidebar role="headOfDepartment" />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="profStudent" />
          <Widget type="profFyp" />
          <Widget type="profStudentSupervised" />
          <Widget type="profAllFyp" />
        </div>
        <div className="charts">
          <PieChartBox
            data={pieChartdata}
            title="État d'Avancement des Projets"
          />
          <LineChartBox
            data={data}
            xDataKey="year"
            yDataKey="fyps"
            titel="L'Évolution du Nombre d'Étudiants Supervisés"
          />
        </div>
      </div>
    </div>
  );
};

export default HeadOfDepartmentHome;
