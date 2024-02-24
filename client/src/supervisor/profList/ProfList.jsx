import "./prof.scss";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
import Datatable from "../../components/datatable/Datatable.jsx";
import Swal from "sweetalert2";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useState, useEffect } from "react";

const ProfList = () => {
  // fetching the list of professors
  const [profList, setProfList] = useState([]);

  const fetchProfList = () => {
    axios
      .get("/users/allUsers", {
        params: {
          role: 2,
        },
      })
      .then((response) => {
        setProfList(response.data);
      })
      .catch((error) => {
        console.error(
          "There was an error fetching the department heads:",
          error
        );
      });
  };

  useEffect(() => {
    fetchProfList();
  }, []);

  const handleRoleChange = async (userId) => {
    const { value: accept } = await Swal.fire({
      title: "Changer le rôle",
      text: "Êtes-vous sûr de vouloir changer le rôle de professeur à chef de département ?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Annuler",
      confirmButtonText: "Oui, changer le rôle",
    });

    if (accept) {
      const newRole = 1;
      axios
        .put("/users/changeRole", { userId, newRole })
        .then(function (response) {
          Swal.fire({
            title: "Le rôle a été changé avec succès!",
            icon: "success",
            confirmButtonText: "OK",
          }).then((result) => {
            if (result.isConfirmed) {
              fetchProfList(); // Re-fetch the list after the role change
            }
          });
        })
        .catch(function (error) {
          console.log(error);
          Swal.fire("Erreur lors du changement de rôle.");
        });
    }
  };

  //delete
  const handleDeletion = (userId) => {
    Swal.fire({
      title: "Êtes-vous sûr?",
      text: "Vous ne pourrez pas revenir en arrière!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Annuler",
      confirmButtonText: "Oui, supprimer",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`/users/deleteUser/${userId}`)
          .then((response) => {
            Swal.fire(
              "Supprimé!",
              "Le chef de département a été supprimé.",
              "success"
            );
            fetchProfList();
          })
          .catch((error) => {
            console.error("Error deleting user:", error);
            Swal.fire(
              "Erreur!",
              "Une erreur s'est produite lors de la suppression.",
              "error"
            );
          });
      }
    });
  };

  const userColumns = [
    // { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "Professeurs-es",
      width: 240,
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
      field: "filiereName",
      headerName: "Nom du Département",
      type: "string",
      width: 310,
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
      width: 120,
    },
    {
      field: "action",
      headerName: "Action",
      width: 170,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div
              className="changeButton"
              onClick={() => handleRoleChange(params.row.id)}
            >
              Changer
            </div>
            <div
              className="deleteButton"
              onClick={() => handleDeletion(params.row.id)}
            >
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
          rows={profList}
          title={"Les Professeurs-es"}
          slug={"Professeur-e"}
          add={true}
          role={2}
        />
        {/* notification for Account created successfully!  */}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </div>
  );
};

export default ProfList;
