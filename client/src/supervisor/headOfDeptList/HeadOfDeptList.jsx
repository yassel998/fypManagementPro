import "./headOfDept.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
import Swal from "sweetalert2";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useState, useEffect } from "react";

const HeadOfDeptList = () => {
  // fetching the list of head of departments
  const [chefDepList, setChefDepList] = useState([]);

  useEffect(() => {
    let mounted = true;
    axios
      .get("/users/allChefDep")
      .then((response) => {
        if (mounted) {
          setChefDepList(response.data);
        }
      })
      .catch((error) => {
        console.error(
          "There was an error fetching the department heads:",
          error
        );
      });

    return () => {
      mounted = false;
    };
  }, []);

  console.log(chefDepList);

  async function handleRoleChange(userId) {
    const { value: accept } = await Swal.fire({
      title: "Changer le rôle",
      text: "Êtes-vous sûr de vouloir changer le rôle de chef de département à professeur?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Annuler",
      confirmButtonText: "Oui, changer le rôle",
    });

    // if (accept) {
    //   Swal.fire("Vous avez accepté de changer le rôle :)");
    //   // Add your logic for role change here
    // }
    if (accept) {
      const newRole = 2; // Assuming '2' is the ID for 'professeur'
      axios
        .post("/api/changeUserRole", {
          userId,
          newRole,
        })
        .then(function (response) {
          Swal.fire("Le rôle a été changé avec succès!");
          // Handle further actions after the role change, such as refreshing data on the page
        })
        .catch(function (error) {
          console.log(error);
          Swal.fire("Erreur lors du changement de rôle.");
        });
    }
  }

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
        Swal.fire(
          "Supprimé!",
          "Le chef de département a été supprimé.",
          "success"
        );
        // Add your logic for deletion here
      }
    });
  };
  const userColumns = [
    // { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "Chefs de Département",
      width: 220,
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
      width: 210,
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
            <div className="changeButton" onClick={handleRoleChange}>
              Changer
            </div>
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
          rows={chefDepList}
          title={"Les Chefs de Départements"}
          slug={"Chef de Département"}
          add={true}
          role={1}
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

export default HeadOfDeptList;
