import "./details.scss";
const Details = ({ setOpen, selectedRow }) => {
  return (
    <div className="det">
      <div className="modal">
        <span className="close" onClick={() => setOpen(false)}>
          X
        </span>
        <h1>Test</h1>
        <div className="detailItem">
          <div className="itemKey">Titre : </div>
          <div className="itemValue">{selectedRow.title}</div>
        </div>
        <div className="detailItem">
          <div className="itemKey">Description :</div>
          <div className="itemValue">{selectedRow.description}</div>
        </div>
        <div className="detailItem">
          <div className="itemKey">Domaine :</div>
          <div className="itemValue">{selectedRow.domain}</div>
        </div>
        <div className="detailItem">
          <div className="itemKey">Professeur-e :</div>
          <div className="itemValue">{selectedRow.prof}</div>
        </div>
        <div className="detailItem">
          <div className="itemKey">Email :</div>
          <div className="itemValue">{selectedRow.email}</div>
        </div>
        <div className="detailItem">
          <div className="itemKey">Prérequis :</div>
          <div className="itemValue">{selectedRow.prerequisites}</div>
        </div>
      </div>
    </div>
  );
};

export default Details;
