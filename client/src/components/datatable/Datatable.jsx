import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import AddUser from "../../components/addUser/AddUser.jsx";
import { useState } from "react";
import { Link } from "react-router-dom";

const Datatable = ({ columns, rows, title, slug, add, addfyp, path }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="datatable">
      <div className="datatableTitle">
        <h1>{title}</h1>
        {add && (
          <div className="add" onClick={() => setOpen(true)}>
            Ajouter
          </div>
        )}
        {addfyp && (
          <div className="add">
            <Link
              style={{
                textDecoration: "none",
                color: "inherit", // Use the default color
                padding: "inherit", // Use the default padding
              }}
              to={path}
            >
              Créer un nouveau PFE
            </Link>
          </div>
        )}
      </div>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 9 },
          },
        }}
        pageSizeOptions={[5, 9]}
        // checkboxSelection
      />
      {open && <AddUser setOpen={setOpen} slug={slug} />}
    </div>
  );
};

export default Datatable;
