import "./request.scss";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
import Datatable from "../../components/datatable/Datatable.jsx";
import { userRows } from "../../assets/data.js";
import Swal from "sweetalert2";

const RequestList = () => {

  //accept
  async function handleAcceptation() {
    const { value: accept } = await Swal.fire({
      title: "Confirmer l'acceptation de la demande d'inscription",
      text: "Êtes-vous sûr de vouloir accepter la demande d'inscription de l'étudiant?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Annuler",
      confirmButtonText: "Oui, accepter la demande",
    });

    if (accept) {
      Swal.fire("Demande acceptée :)", "L'étudiant a été ajouté avec succès.", "success");
      // Add your logic for role change here
    }
  }

  //refuse
  const handleRejection = () => {
    Swal.fire({
      title: "Êtes-vous sûr de rejeter la demande d'inscription?",
      text: "Vous ne pourrez pas revenir en arrière!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Annuler",
      confirmButtonText: "Oui, rejeter la demande",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Demande rejetée!", "La demande d'inscription a été rejetée.", "success");
        // Add your logic for deletion here
      }
    });
  };
  const userColumns = [
    // { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: " Étudiants-es",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {`${params.row.fname} ${params.row.lname}`}
          </div>
        );
      },
    },
    {
      field: "departmentName",
      headerName: "Nom du Département",
      type: "string",
      width: 190,
    },
    {
      field: "email",
      headerName: "Email",
      type: "string",
      width: 190,
    },
    {
      field: "phone",
      headerName: "Téléphone",
      type: "string",
      width: 130,
    },
    {
      field: "creationDate",
      headerName: "Créé à",
      type: "string",
      width: 110,
    },
    {
      field: "action",
      headerName: "Action",
      width: 170,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div className="changeButton" onClick={handleAcceptation}>
              Accepter
            </div>
            <div className="deleteButton" onClick={handleRejection}>
              Rejeter
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="requestLsit">
      <Sidebar role="supervisor" />
      <div className="requestLsitContainer">
        <Navbar />
        <Datatable
          columns={userColumns}
          rows={userRows}
          title={"Liste des demandes d'inscription"}
          add={false}
        />
      </div>
    </div>
  );
};

export default RequestList;
