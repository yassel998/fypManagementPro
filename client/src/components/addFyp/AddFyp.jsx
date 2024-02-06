import { useState } from "react";
import "./addfyp.scss";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const AddFyp = () => {
  const [value, setValue] = useState("");
  console.log(value);
  return (
    <div className="addfyp">
      <h1>Créer un nouveau projet de fin d'études</h1>
      <div className="addfypContainer">
        <div className="content">
          <input type="text" placeholder="Titre" />
          <div className="editorContainer">
            <ReactQuill
              className="editor"
              theme="snow"
              value={value}
              onChange={setValue}
            />
          </div>
        </div>
        <div className="menu">
          <div className="item">
            <h1>Information supplémentaire</h1>
            <span>
              <b>№ étudiants-es :</b>
              <select name="" id="">
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
              </select>
            </span>
            <span>
              <b>Prérequis</b>
              <select name="" id="">
                <option value="">C</option>
                <option value="">HTML</option>
                <option value="">SQL</option>
                <option value="">Python</option>
              </select>
            </span>
            <div className="buttons">
              <button>Réinitialiser</button>
              <button>Créer</button>
            </div>
          </div>
          <div className="item">
            <h1>Domaine</h1>
            <div className="cat">
              <input
                type="radio"
                name=""
                id="DeveloppementWeb"
                value="DeveloppementWeb"
              />
              <label htmlFor="DeveloppementWeb">Développement Web</label>
            </div>
            <div className="cat">
              <input
                type="radio"
                name="domaineInformatique"
                id="MachineLearning"
                value="MachineLearning"
              />
              <label htmlFor="MachineLearning">Apprentissage automatique</label>
            </div>
            <div className="cat">
              <input
                type="radio"
                name="domaineInformatique"
                id="NetworkSecurity"
                value="NetworkSecurity"
              />
              <label htmlFor="NetworkSecurity">Sécurité réseau</label>
            </div>
            <div className="cat">
              <input
                type="radio"
                name="domaineInformatique"
                id="DatabaseManagement"
                value="DatabaseManagement"
              />
              <label htmlFor="DatabaseManagement">
                Gestion de base de données
              </label>
            </div>
            <div className="cat">
              <input
                type="radio"
                name="domaineInformatique"
                id="ArtificialIntelligence"
                value="ArtificialIntelligence"
              />
              <label htmlFor="ArtificialIntelligence">
                Intelligence artificielle
              </label>
            </div>
            <div className="cat">
              <input
                type="radio"
                name="domaineInformatique"
                id="Cybersecurity"
                value="Cybersecurity"
              />
              <label htmlFor="Cybersecurity">Cybersécurité</label>
            </div>
            <div className="cat">
              <input
                type="radio"
                name="domaineInformatique"
                id="SoftwareEngineering"
                value="SoftwareEngineering"
              />
              <label htmlFor="SoftwareEngineering">Génie logiciel</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFyp;
