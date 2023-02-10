import * as React from "react";
import { TextField, Grid } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
export default function InvoiceItem() {
  return (
    <>
      {" "}
      <Grid item xs={6} style={{ paddingLeft: 30 }}>
        <TextField
          variant="standard"
          fullWidth
          id="item_name"
          name="item_name"
          label="Name"
          type="text"
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          style={{
            width: "21.9%",
            display: "inline-block",
            margin: "0 1.1% 0 0",
            padding: 0,
          }}
          variant="standard"
          id="amount"
          name="amount"
          label="Amount"
          type="number"
        />
        <TextField
          style={{
            width: "21.9%",
            display: "inline-block",
            margin: "0 1.1% 0 0",
            padding: 0,
          }}
          variant="standard"
          id="unit"
          name="unit"
          label="Unit"
          type="text"
        />
        <TextField
          style={{
            width: "21.9%",
            display: "inline-block",
            margin: "0 1.1% 0 0",
            padding: 0,
          }}
          variant="standard"
          id="tax"
          name="tax"
          label="Tax"
          type="number"
        />
        <TextField
          style={{
            width: "21.9%",
            display: "inline-block",
            margin: "0 1.1% 0 0",
            padding: 0,
          }}
          variant="standard"
          id="price"
          name="price"
          label="Price"
          type="number"
        />
        <DeleteIcon
          style={{
            width: "8%",
            display: "inline-block",
            margin: "0 0 0 0",
            padding: "20 0 12 0",
          }}
        >
          delete
        </DeleteIcon>
      </Grid>{" "}
    </>
  );
}
