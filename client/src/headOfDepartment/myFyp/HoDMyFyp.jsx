import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
import { userRows } from "../../assets/data";

const HoDMyFyp = () => {
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
      <Sidebar role="headOfDepartment" />
      <div className="professorMyFypContainer">
        <Navbar />
        <Datatable
          columns={columns}
          rows={userRows}
          title={"Mes Projets de Fin d'Études"}
          // slug={"Chef de Département"}
          addfyp={true}
          path="/headOfDepartment/newFyp"
        />
      </div>
    </div>
  );
};

export default HoDMyFyp;
