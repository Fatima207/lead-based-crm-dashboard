import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import { useEffect, useState } from "react";

const NewOrder = ({
  open,
  handleClose,
  handleSave,
  editOrder,
  viewOnly = false, // ✅ NEW PROP
}) => {
  const [form, setForm] = useState({
    id: "",
    billingName: "",
    orderDate: "",
    total: "",
    paymentMethod: "",
    status: "",
  });

  // ✅ LOAD DATA FOR EDIT / VIEW
  useEffect(() => {
    if (editOrder) {
      setForm(editOrder);
    } else {
      setForm({
        id: "",
        billingName: "",
        orderDate: "",
        total: "",
        paymentMethod: "",
        status: "",
      });
    }
  }, [editOrder]);

  // ✅ HANDLE INPUT
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ SAVE (ONLY FOR ADD / EDIT)
  const submit = () => {
    if (viewOnly) return;

    handleSave({
      ...form,
      id: editOrder ? form.id : "SK" + Date.now().toString().slice(-4),
    });
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle>
        {viewOnly ? "View Order" : editOrder ? "Edit Order" : "Add New Order"}
      </DialogTitle>

      <DialogContent>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={12}>
            <TextField
              label="Billing Name"
              name="billingName"
              fullWidth
              value={form.billingName}
              onChange={handleChange}
              disabled={viewOnly}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              label="Order Date"
              name="orderDate"
              fullWidth
              value={form.orderDate}
              onChange={handleChange}
              disabled={viewOnly}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              label="Total"
              name="total"
              fullWidth
              value={form.total}
              onChange={handleChange}
              disabled={viewOnly}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              label="Payment Method"
              name="paymentMethod"
              fullWidth
              value={form.paymentMethod}
              onChange={handleChange}
              disabled={viewOnly}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              label="Status"
              name="status"
              fullWidth
              value={form.status}
              onChange={handleChange}
              disabled={viewOnly}
            />
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>Close</Button>

        {!viewOnly && (
          <Button variant="contained" onClick={submit}>
            Save
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default NewOrder;
