import "./addUser.scss";

const AddUser = ({ setOpen, slug }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    //add new item

    setOpen(false);
  };
  return (
    <div className="addUser">
      <div className="modal">
        <span className="close" onClick={() => setOpen(false)}>
          X
        </span>
        <h1>Ajouter nouveau / nouvelle {slug}</h1>
        <form onSubmit={handleSubmit}>
          <div className="item">
            <label>Email</label>
            <input type="email" placeholder="email@gmail.com" />
          </div>
          <div className="item">
            <label>password</label>
            <input type="string" placeholder="password" />
          </div>
          <div className="item">
            <label> Département</label>
            <input type="string" placeholder="test" />
          </div>
          <button>Ajouter</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
