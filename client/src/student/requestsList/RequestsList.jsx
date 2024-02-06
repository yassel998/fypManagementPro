import "./requestsList.scss";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
import Datatable from "../../components/datatable/Datatable.jsx";
import { projectRequestRows } from "../../assets/data.js";
import Swal from "sweetalert2";
import { Tooltip, Typography } from "@mui/material";

const RequestsList = () => {
  async function handleAccept() {
    await Swal.fire({
      title: "Accepter le Projet",
      text: "Êtes-vous sûr de vouloir accepter de travailler sur ce projet de fin d'études ?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Annuler",
      confirmButtonText: "Oui, accepter le projet",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Vous avez accepté de travailler sur ce projet avec succès !"
          // Add your logic for handling the acceptance of the project here
        );
      }
    });
  }

  //cancel the request
  const handleCancellation = () => {
    Swal.fire({
      title: "Annuler la Demande",
      text: "Êtes-vous sûr de vouloir annuler cette demande de projet de fin d'études ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Annuler",
      confirmButtonText: "Oui, annuler la demande",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Demande Annulée",
          "La demande a été annulée avec succès.",
          "success"
        );
        // Add your logic for handling the cancellation here
      }
    });
  };
  const userColumns = [
    // { field: "id", headerName: "ID", width: 70 },
    {
      field: "title",
      headerName: "Titre PFE",
      width: 270,
      renderCell: (params) => {
        return (
          <Tooltip title={params.row.title} placement="top">
            <div style={{ whiteSpace: "pre-line", overflow: "hidden" }}>
              <Typography>{params.row.title}</Typography>
            </div>
          </Tooltip>
        );
      },
    },
    {
      field: "prof",
      headerName: "Professeur-e",
      type: "string",
      width: 200,
    },
    {
      field: "email",
      headerName: "Email",
      type: "string",
      width: 190,
    },

    {
      field: "postulationDate",
      headerName: "Postulé à",
      type: "string",
      width: 110,
    },
    {
      field: "status",
      headerName: "Statut",
      type: "string",
      width: 88,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div className="changeButton" onClick={handleAccept}>
              Accepter
            </div>
            <div className="deleteButton" onClick={handleCancellation}>
              Annuler
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="stdRequestList">
      <Sidebar role="student" />
      <div className="stdRequestListContainer">
        <Navbar />
        <Datatable
          columns={userColumns}
          rows={projectRequestRows}
          title={"Liste des Demandes de Projets de Fin d'Études"}
          slug={"Professeur-e"}
        />
      </div>
    </div>
  );
};

export default RequestsList;
