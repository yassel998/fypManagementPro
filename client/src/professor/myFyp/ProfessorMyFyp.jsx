import { userRows } from "../../assets/data";
import Datatable from "../../components/datatable/Datatable";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./myFyp.scss";

const ProfessorMyFyp = () => {
  const columns = [
    {
      field: "title",
      headerName: "Titre",
      type: "string",
      width: 330,
    },
    {
      field: "numberStd",
      headerName: "№ étuds",
      type: "string",
      width: 90,
    },
    {
      field: "year",
      headerName: "Année universitaire",
      type: "string",
      width: 190,
    },
    {
      field: "status",
      headerName: "Statut",
      type: "string",
      width: 190,
    },
    {
      field: "action",
      headerName: "Action",
      width: 240,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div className="details">détails</div>
            <div className="edit">modifier</div>
            <div className="delete">supprimer</div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="professorMyFyp">
      <Sidebar role="professor" />
      <div className="professorMyFypContainer">
        <Navbar />
        <Datatable
          columns={columns}
          rows={userRows}
          title={"Mes Projets de Fin d'Études"}
          // slug={"Chef de Département"}
          addfyp={true}
          path="/professor/newFyp"
        />
      </div>
    </div>
  );
};

export default ProfessorMyFyp;
