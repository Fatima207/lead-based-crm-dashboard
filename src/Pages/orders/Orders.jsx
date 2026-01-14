import { useEffect, useState } from "react";

import "./orders.scss";
import Sidebar from "../../Component/sidebar/Sidebar";
import Navbar from "../../Component/navbar/Navbar";

import { DataGrid } from "@mui/x-data-grid";
import { orderColumns, orderRows } from "../../datatablesource";

// MUI
import {
  Box,
  Button,
  Typography,
  IconButton,
  Tooltip,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import NewOrder from "./NewOrder";


const Orders = () => {
  const [viewOrder, setViewOrder] = useState(null);

  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [editOrder, setEditOrder] = useState(null);

  // ✅ LOAD ORDERS (SAFE)
  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders"));

    if (storedOrders && storedOrders.length > 0) {
      setData(storedOrders);
    } else {
      localStorage.setItem("orders", JSON.stringify(orderRows));
      setData(orderRows);
    }
  }, []);

  // ✅ DELETE
  const handleDelete = (id) => {
    const updated = data.filter((item) => item.id !== id);
    setData(updated);
    localStorage.setItem("orders", JSON.stringify(updated));
  };

  // ✅ ADD / UPDATE
  const handleSave = (order) => {
    const updatedOrders = editOrder
      ? data.map((item) => (item.id === editOrder.id ? order : item))
      : [...data, order];

    setData(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
    setOpen(false);
    setEditOrder(null);
  };

  // ✅ VIEW DETAILS COLUMN (COMPACT)
  const viewColumn = [
    {
      field: "view",
      headerName: "Details",
      width: 120,
      sortable: false,
      renderCell: (params) => (
        <Button
          variant="contained"
          size="small"
          sx={{
            textTransform: "none",
            borderRadius: "16px",
            fontSize: "12px",
            px: 1.5,
          }}
           onClick={() => {
          setViewOrder(params.row); // ✅ THIS LINE MAKES IT WORK
        }}
        >
          View
        </Button>
      ),
    },
  ];

  // ✅ ACTION COLUMN (COMPACT ICONS)
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
              color="primary"
              onClick={() => {
                setEditOrder(params.row);
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
    <div className="orders">
      <Sidebar />
      <div className="ordersContainer">
        <Navbar />

        <Box sx={{ p: 3 }}>
          {/* HEADER */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Typography variant="h5" fontWeight={600}>
              Orders
            </Typography>

            <Button
              variant="contained"
              size="small"
              startIcon={<AddIcon fontSize="small" />}
              onClick={() => {
                setEditOrder(null);
                setOpen(true);
              }}
            >
              Add Order
            </Button>
          </Box>

          {/* TABLE */}
          <DataGrid
            rows={data}
            columns={orderColumns.concat(viewColumn, actionColumn)}
            pageSize={9}
            rowsPerPageOptions={[9]}
            autoHeight
            disableSelectionOnClick
            rowHeight={48}
            sx={{
              fontSize: "13px",
              "& .MuiDataGrid-columnHeaders": {
                fontSize: "13px",
                fontWeight: 600,
              },
              "& .MuiDataGrid-cell": {
                py: 0.5,
              },
            }}
          />
        </Box>
      </div>

      {/* MODAL */}
      <NewOrder
        open={open}
        handleClose={() => {
          setOpen(false);
          setEditOrder(null);
        }}
        handleSave={handleSave}
        editOrder={editOrder}
      />

      {/* VIEW MODAL */}
{viewOrder && (
  <NewOrder
    open={Boolean(viewOrder)}
    handleClose={() => setViewOrder(null)}
    editOrder={viewOrder}
    handleSave={() => {}} // disabled
    viewOnly
  />
)}
    </div>
  );
};

export default Orders;
