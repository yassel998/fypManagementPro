import "./studentHome.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const StudentHome = () => {
  return (
    <div className="studentHome">
      <Sidebar role={"student"} />
      <div className="homeContainer">
        <Navbar />
        <div className="text">
          Bienvenue sur la plateforme, vous pouvez gérer l'ensemble de votre
          processus de projet de fin d'études grâce à ce tableau de bord.
          Naviguez à l'aide de la barre latérale et de la barre de navigation.
          <br />
          <br />
          <h2>Informations supplémentaires :</h2>
          <p>
            Un calendrier avec fonctionnalité de planification sera bientôt
            ajouté. Vous pourrez l'utiliser pour gérer vos tâches et bien plus
            encore.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentHome;
