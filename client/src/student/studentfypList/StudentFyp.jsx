import "./studentfyp.scss";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
import Datatable from "../../components/datatable/Datatable.jsx";
import { projectRows } from "../../assets/data.js";
import Swal from "sweetalert2";
import { Tooltip, Typography } from "@mui/material";
import { useState } from "react";
import Details from "../../components/details/Details.jsx";

const StudentFyp = () => {
  const [open, setOpen] = useState(false);

  const [selectedRow, setSelectedRow] = useState(null);

  //get data to  display it in the modal
  async function handleViewClick(row) {
    await setSelectedRow(row);
    setOpen(true);
  }

  async function handleRequest() {
    await Swal.fire({
      title: "Confirmer la Demande d'Affectation",
      text: "Êtes-vous sûr de vouloir accepter cette demande d'affectation pour travailler sur ce projet de fin d'études ?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Annuler",
      confirmButtonText: "Oui, envoyer la demande",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Demande d'affectation envoyée avec succès !"
          // Add your logic for handling the acceptance of the student's request here
        );
      }
    });
  }

  const userColumns = [
    // { field: "id", headerName: "ID", width: 70 },
    {
      field: "title",
      headerName: "Titre PFE",
      width: 310,
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
      width: 220,
    },
    {
      field: "numberOfStudents",
      headerName: "Nbr d'Étudiants",
      type: "string",
      width: 135,
    },
    {
      field: "availableSlots",
      headerName: "Places Disponibles",
      type: "string",
      width: 135,
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
      width: 150,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            {/* <div className="details" onClick={() => setOpen(true)}> */}
            <div
              className="details"
              onClick={() => handleViewClick(params.row)}
            >
              détails
            </div>
            <div className="request" onClick={handleRequest}>
              postuler
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
          rows={projectRows}
          title={"Liste des Projets de Fin d'Études"}
        />
        {open && <Details setOpen={setOpen} selectedRow={selectedRow} />}
      </div>
    </div>
  );
};

export default StudentFyp;
