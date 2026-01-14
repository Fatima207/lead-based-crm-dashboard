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

const NewDelivery = ({ open, handleClose, handleSave, editDelivery }) => {
  const [form, setForm] = useState({
    id: "",
    customer: "",
    address: "",
    date: "",
    status: "",
  });

  useEffect(() => {
    if (editDelivery) {
      setForm(editDelivery);
    } else {
      setForm({
        id: "",
        customer: "",
        address: "",
        date: "",
        status: "",
      });
    }
  }, [editDelivery]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = () => {
    handleSave({
      ...form,
      id: editDelivery ? form.id : "DL" + Date.now().toString().slice(-4),
    });
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle>
        {editDelivery ? "Edit Delivery" : "Add Delivery"}
      </DialogTitle>

      <DialogContent>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={12}>
            <TextField
              label="Customer"
              name="customer"
              fullWidth
              value={form.customer}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Address"
              name="address"
              fullWidth
              value={form.address}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              label="Delivery Date"
              name="date"
              fullWidth
              value={form.date}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              label="Status"
              name="status"
              fullWidth
              value={form.status}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button variant="contained" onClick={submit}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewDelivery;
