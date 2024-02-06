import LineChartBox from "../../components/lineChart/LineChartBox";
import Navbar from "../../components/navbar/Navbar";
import PieChartBox from "../../components/pieChart/PieChart";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";
import "./professorHome.scss";

const ProfessorHome = () => {
  const data = [
    { year: 2018, students: 15 },
    { year: 2019, students: 22 },
    { year: 2020, students: 17 },
    { year: 2021, students: 13 },
    { year: 2022, students: 5 },
    { year: 2023, students: 10 },
    { year: 2024, students: 20 },
  ];

  const pieChartdata = [
    { name: "Web Development", value: 150, color: "#0088FE" },
    { name: "Artificial Intelligence", value: 120, color: "#00C49F" },
    { name: "Database Systems", value: 80, color: "#FFBB28" },
    { name: "Software Engineering", value: 100, color: "#FF8042" },
    { name: "Cybersecurity", value: 90, color: "#AF19FF" },
    { name: "Mobile App Development", value: 70, color: "#FF4D4D" },
    { name: "Data Science", value: 110, color: "#36A2EB" },
    { name: "Networks", value: 60, color: "#4CAF50" },
  ];
  return (
    <div className="professorHome">
      <Sidebar role="professor" />
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
            title="Répartition des Projets par Domaine"
          />
          <LineChartBox
            data={data}
            xDataKey="year"
            yDataKey="students"
            titel="L'Évolution du Nombre d'Étudiants Supervisés"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfessorHome;
