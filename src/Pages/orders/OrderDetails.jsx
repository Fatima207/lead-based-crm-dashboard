import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Grid,
  Button,
} from "@mui/material";

const OrderDetails = ({ open, handleClose, order }) => {
  if (!order) return null;

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle>Order Details</DialogTitle>

      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography><b>Order ID:</b> {order.id}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography><b>Billing Name:</b> {order.billingName}</Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography><b>Date:</b> {order.orderDate}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography><b>Total:</b> ${order.total}</Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography><b>Status:</b> {order.status}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography><b>Payment:</b> {order.paymentMethod}</Typography>
          </Grid>
        </Grid>
      </DialogContent>

      <Button onClick={handleClose} sx={{ m: 2 }} variant="contained">
        Close
      </Button>
    </Dialog>
  );
};

export default OrderDetails;