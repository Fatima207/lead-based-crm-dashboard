import { useEffect, useState } from "react";
import "./delivery.scss"
import Sidebar from "../../Component/sidebar/Sidebar";
import Navbar from "../../Component/navbar/Navbar";

import { DataGrid } from "@mui/x-data-grid";
import { deliveryColumns, deliveryRows } from "../../datatablesource";

import { Box, Button, Typography, IconButton, Tooltip } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import NewDelivery from "./NewDelivery";

const Delivery = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [editDelivery, setEditDelivery] = useState(null);

  // LOAD DELIVERY DATA
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("delivery"));

    if (stored && stored.length > 0) {
      setData(stored);
    } else {
      localStorage.setItem("delivery", JSON.stringify(deliveryRows));
      setData(deliveryRows);
    }
  }, []);

  // DELETE
  const handleDelete = (id) => {
    const updated = data.filter((d) => d.id !== id);
    setData(updated);
    localStorage.setItem("delivery", JSON.stringify(updated));
  };

  // ADD / UPDATE
  const handleSave = (delivery) => {
    const updated = editDelivery
      ? data.map((d) => (d.id === editDelivery.id ? delivery : d))
      : [...data, delivery];

    setData(updated);
    localStorage.setItem("delivery", JSON.stringify(updated));
    setOpen(false);
    setEditDelivery(null);
  };

  // ACTION COLUMN
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 110,
      sortable: false,
      renderCell: (params) => (
        <Box sx={{ display: "flex", gap: 0.5 }}>
          <Tooltip title="Edit">
            <IconButton
              size="small"
              onClick={() => {
                setEditDelivery(params.row);
                setOpen(true);
              }}
            >
              <EditIcon fontSize="small" />
            </IconButton>
          </Tooltip>

          <Tooltip title="Delete">
            <IconButton
              size="small"
              color="error"
              onClick={() => handleDelete(params.row.id)}
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
      ),
    },
  ];

  return (
    <div className="delivery">
      <Sidebar />
      <div className="deliveryContainer">
        <Navbar />

        <Box sx={{ p: 3 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 2,
            }}
          >
            <Typography variant="h5" fontWeight={600}>
              Delivery
            </Typography>

            <Button
              variant="contained"
              size="small"
              startIcon={<AddIcon fontSize="small" />}
              onClick={() => {
                setEditDelivery(null);
                setOpen(true);
              }}
            >
              Add Delivery
            </Button>
          </Box>

          <DataGrid
            rows={data}
            columns={deliveryColumns.concat(actionColumn)}
            pageSize={9}
            rowsPerPageOptions={[9]}
            autoHeight
            rowHeight={48}
            sx={{ fontSize: "13px" }}
          />
        </Box>
      </div>

      <NewDelivery
        open={open}
        handleClose={() => {
          setOpen(false);
          setEditDelivery(null);
        }}
        handleSave={handleSave}
        editDelivery={editDelivery}
      />
    </div>
  );
};

export default Delivery; // ✅ THIS LINE FIXES EVERYTHING
