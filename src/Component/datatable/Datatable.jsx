import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

// MUI Icons
import { Box, Typography, Button, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Datatable = () => {
  const [data, setData] = useState([]);

  // Default rows to ensure the UI looks attractive on first load
  const INITIAL_ROWS = [
    { id: "1768325", user: "Neal Matthews", email: "neal@example.com", age: 32, phone: "+1 234 567", status: "Active", img: "https://images.pexels.com/photos/1840608/pexels-photo-1840608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: "1768326", user: "Jamal Burns", email: "jamal@example.com", age: 28, phone: "+1 987 654", status: "Active", img: "https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: "1768327", user: "Sarah Jenkins", email: "sarah@example.com", age: 25, phone: "+1 444 222", status: "Pending", img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  ];

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users"));
    if (!storedUsers || storedUsers.length === 0) {
      localStorage.setItem("users", JSON.stringify(INITIAL_ROWS));
      setData(INITIAL_ROWS);
    } else {
      setData(storedUsers);
    }
  }, []);

  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
    localStorage.setItem("users", JSON.stringify(updatedData));
  };

  const columns = [
    {
      field: "user",
      headerName: "User",
      flex: 1.5, 
      minWidth: 180,
      renderCell: (params) => (
        <div className="cellWithImg">
          <img 
            className="cellImg" 
            src={params.row.img || "https://cdn-icons-png.flaticon.com/512/149/149071.png"} 
            alt="avatar" 
          />
          {params.row.user || params.row.username || "New User"}
        </div>
      ),
    },
    { field: "id", headerName: "ID", flex: 0.8, minWidth: 100 },
    { field: "email", headerName: "Email", flex: 1.2, minWidth: 160 },
    { field: "age", headerName: "Age", flex: 0.4, minWidth: 50 },
    { field: "phone", headerName: "Phone", flex: 1, minWidth: 120 },
    {
      field: "status",
      headerName: "Status",
      flex: 0.7,
      minWidth: 90,
      renderCell: (params) => (
        <span className={`cellWithStatus ${params.row.status.toLowerCase()}`}>
          {params.row.status}
        </span>
      ),
    },
    {
      field: "action",
      headerName: "Actions",
      flex: 0.8, // Reduced flex since View is removed
      minWidth: 100,
      sortable: false,
      renderCell: (params) => (
        <div className="cellAction">
          <IconButton color="primary" component={Link} to={`/users/edit/${params.row.id}`}>
            <EditIcon fontSize="small" />
          </IconButton>
          <IconButton color="error" onClick={() => handleDelete(params.row.id)}>
            <DeleteIcon fontSize="small" />
          </IconButton>
        </div>
      ),
    },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Users
        <Link to="/users/new" className="link">
          <AddIcon /> Add New User
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        autoHeight
        disableSelectionOnClick
        sx={{
          border: "none",
          "& .MuiDataGrid-columnSeparator": { display: "none" },
          "& .MuiDataGrid-cell:focus": { outline: "none" },
        }}
      />
    </div>
  );
};

export default Datatable;