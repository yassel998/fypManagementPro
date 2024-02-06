import "./student.scss";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
import Datatable from "../../components/datatable/Datatable.jsx";
import { userRows } from "../../assets/data.js";
import Swal from "sweetalert2";

const StudnetList = () => {
  //delete
  const handleDeletion = () => {
    Swal.fire({
      title: "Êtes vous sûr?",
      text: "Vous ne pourrez pas revenir en arrière!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Annuler",
      confirmButtonText: "Oui, supprimer",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Supprimé!", "L'étudiant  a été supprimé.", "success");
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
            <div className="deleteButton" onClick={handleDeletion}>
              Supprimer
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="headOfDeptList">
      <Sidebar role="supervisor" />
      <div className="headOfDeptListContainer">
        <Navbar />
        <Datatable
          columns={userColumns}
          rows={userRows}
          title={"Les Étudiants-es"}
          slug={"Professeurs-es"}
          add={false}
        />
      </div>
    </div>
  );
};

export default StudnetList;
