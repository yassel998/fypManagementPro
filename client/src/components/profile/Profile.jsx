import "./profile.scss";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
// import EmailIcon from "@mui/icons-material/Email";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import { useState } from "react";

const Profile = () => {
  const [file, setFile] = useState("");

  return (
    <div className="profile">
      <h1>Editer le profil</h1>
      <div className="user">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Anna Becker</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentityIcon className="userShowIcon" />
              <span className="userShowInfoTitle">annabeck99</span>
            </div>
            <div className="userShowInfo">
              <CalendarMonthIcon className="userShowIcon" />
              <span className="userShowInfoTitle">10.12.1999</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneIphoneIcon className="userShowIcon" />
              <span className="userShowInfoTitle">+1 123 456 67</span>
            </div>
            <div className="userShowInfo">
              <LocationOnIcon className="userShowIcon" />
              <span className="userShowInfoTitle">annabeck99</span>
            </div>
            <div className="userShowInfo">
              <PermIdentityIcon className="userShowIcon" />
              <span className="userShowInfoTitle">annabeck99</span>
            </div>
            <div className="userShowInfo">
              <PermIdentityIcon className="userShowIcon" />
              <span className="userShowInfoTitle">annabeck99</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
              className="userShowImg"
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image : <DriveFolderUploadIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
              <div className="formInput">
                <label htmlFor="">Nom</label>
                <input type="text" placeholder="test" />
              </div>
              <div className="formInput">
                <label htmlFor="">Nom</label>
                <input type="text" placeholder="test" />
              </div>

              <div className="formInput">
                <label htmlFor="">Nom</label>
                <input type="text" placeholder="test" />
              </div>
              <div className="formInput">
                <label htmlFor="">Nom</label>
                <input type="text" placeholder="test" />
              </div>
              <div className="formInput">
                <label htmlFor="">Nom</label>
                <input type="text" placeholder="test" />
              </div>
              <div className="formInput">
                <label htmlFor="">Nom</label>
                <input type="text" placeholder="test" />
              </div>
              <div className="formInput">
                <label htmlFor="">Nom</label>
                <input type="text" placeholder="test" />
              </div>
              <button>update</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
