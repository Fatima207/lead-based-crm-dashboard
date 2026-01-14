export const orderColumns = [
  { field: "id", headerName: "Order ID", width: 130 },
  { field: "billingName", headerName: "Billing Name", width: 180 },
  { field: "orderDate", headerName: "Order Date", width: 140 },
  { field: "total", headerName: "Total ($)", width: 120 },
  { field: "paymentMethod", headerName: "Payment Method", width: 160 },
  { field: "status", headerName: "Status", width: 130 },
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
