import "./changePassword.scss";
import Swal from "sweetalert2";

const ChangePassword = () => {
  async function handleChangePassword() {
    const { value: accept } = await Swal.fire({
      title: "Changer le mot de passe",
      text: "Êtes-vous sûr de vouloir changer votre mot de passe ?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Annuler",
      confirmButtonText: "Oui, changer le mot de passe",
    });

    if (accept) {
      // Add your logic for password change here
      // You can include the form for the current password, new password, and repeat new password here
      // Call your backend API to update the password
      // Display a success message after a successful password change
      Swal.fire("Votre mot de passe a été changé avec succès :)");
    }
  }

  return (
    <div className="passwordChange">
      <div className="passwordWrapper">
        <h1>Change Password</h1>
        <form action="">
          <input type="text" placeholder="current password" />
          <input type="text" placeholder="new password" />
          <input type="text" placeholder="repeat new password" />
        </form>
        <button onClick={handleChangePassword}>Change</button>
      </div>
    </div>
  );
};

export default ChangePassword;
