// ================= USERS =================
export const userColumns = [
  { field: "id", headerName: "ID", width: 90 },

  { field: "username", headerName: "User", width: 130 },

  { field: "email", headerName: "Email", width: 180 },

  { field: "age", headerName: "Age", width: 70 },

  { field: "phone", headerName: "Phone", width: 120 },

  { field: "role", headerName: "Role", width: 100 },

  { field: "status", headerName: "Status", width: 90 },
];

export const userRows = [
  {
    id: "U1001",
    username: "Munfees",
    email: "m@gmail.com",
    age: 21,
    phone: "9163945988",
    role: "Frontend Developer",
    status: "Active",
  },
];
// ================= ORDERS =================
export const orderColumns = [
  { field: "id", headerName: "Order ID", width: 110 },
  { field: "billingName", headerName: "Billing Name", width: 160 },
  { field: "orderDate", headerName: "Date", width: 120 },
  { field: "total", headerName: "Total ($)", width: 100 },
  { field: "paymentMethod", headerName: "Payment", width: 130 },
  { field: "status", headerName: "Status", width: 110 },
];

export const orderRows = [
  {
    id: "SK2540",
    billingName: "Neal Matthews",
    orderDate: "07 Oct 2019",
    total: 400,
    paymentMethod: "Mastercard",
    status: "Paid",
  },
  {
    id: "SK2541",
    billingName: "Jamal Burns",
    orderDate: "08 Oct 2019",
    total: 380,
    paymentMethod: "Visa",
    status: "Pending",
  },
];

import { Chip } from "@mui/material";

// ================= DELIVERY =================
export const deliveryColumns = [
  { field: "id", headerName: "Delivery ID", width: 110 },

  { field: "customer", headerName: "Customer", width: 150 },

  { field: "address", headerName: "Address", width: 180 },

  { field: "date", headerName: "Date", width: 120 },

  {
    field: "status",
    headerName: "Status",
    width: 120,
    renderCell: (params) => (
      <Chip
        label={params.value}
        size="small"
        color={
          params.value === "Delivered"
            ? "success"
            : params.value === "Pending"
            ? "warning"
            : "info"
        }
      />
    ),
  },
];

export const deliveryRows = [
  {
    id: "DL1001",
    customer: "John Doe",
    address: "New York",
    date: "10 Feb 2024",
    status: "Delivered",
  },
  {
    id: "DL1002",
    customer: "Sara Smith",
    address: "California",
    date: "12 Feb 2024",
    status: "Pending",
  },
];
