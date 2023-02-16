import { TextField, Grid } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
export default function InvoiceItem() {
  return (
    <>
      <Grid container spacing={1} wrap="nowrap">
        <Grid item xs={6} sx={{ ml: 3, mr: 3 }}>
          <TextField
            variant="standard"
            fullWidth
            id="item_name"
            name="item_name"
            label="Name"
            type="text"
          />
        </Grid>
        <Grid item container xs={6} spacing={1} wrap="nowrap">
          <Grid item xs={3}>
            <TextField
              variant="standard"
              id="amount"
              name="amount"
              label="Amount"
              type="number"
            />
          </Grid>

          <Grid item xs={2}>
            <TextField
              variant="standard"
              id="unit"
              name="unit"
              label="Unit"
              type="text"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              variant="standard"
              id="tax"
              name="tax"
              label="Tax"
              type="number"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              variant="standard"
              id="price"
              name="price"
              label="Price"
              type="number"
            />
          </Grid>

          <Grid item xs={1} sx={{ mt: 2.5 }}>
            <DeleteIcon>delete</DeleteIcon>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
