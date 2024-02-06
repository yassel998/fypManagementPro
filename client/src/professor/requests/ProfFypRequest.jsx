import "./profFypRequest.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
import { projectRequestRows } from "../../assets/data.js";
import { Tooltip, Typography } from "@mui/material";
import Swal from "sweetalert2";

const ProfFypRequest = () => {
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
  const columns = [
    {
      field: "title",
      headerName: "Titre",
      type: "string",
      width: 300,
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
      field: "student",
      headerName: "Étudiant-e",
      width: 180,
    },
    {
      field: "sendedAt",
      headerName: "Projet - Date/Heure Demande",
      width: 210,
    },
    {
      field: "status", //pending, rejected, accepted
      headerName: "Statut",
      width: 100,
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
    <div className="profFypRequest">
      <Sidebar role="professor" />
      <div className="profFypRequestContainer">
        <Navbar />
        <Datatable
          columns={columns}
          rows={projectRequestRows}
          title={"Liste des Demandes de Projets de Fin d'Études"}
          slug={"Professeur-e"}
        />
      </div>
    </div>
  );
};

export default ProfFypRequest;
