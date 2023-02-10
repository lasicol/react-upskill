import * as React from "react";
import { TextField } from "@mui/material";

export default function AddressFields() {
  return (
    <>
      {" "}
      <TextField
        variant="standard"
        fullWidth
        id="company_name"
        name="company_name"
        label="Company Name"
        type="text"
      />
      <TextField
        variant="standard"
        fullWidth
        id="city"
        name="city"
        label="City"
        type="text"
      />
      <TextField
        variant="standard"
        fullWidth
        id="street"
        name="street"
        label="Street"
        type="text"
      />
      <TextField
        variant="standard"
        fullWidth
        id="postcode"
        name="postcode"
        label="Postcode"
        type="text"
      />
      <TextField
        variant="standard"
        fullWidth
        id="nip"
        name="nip"
        label="NIP"
        type="text"
      />
      <TextField
        variant="standard"
        fullWidth
        id="tel"
        name="tel"
        label="Tel"
        type="text"
      />
      <TextField
        variant="standard"
        fullWidth
        id="email"
        name="email"
        label="E-mail"
        type="email"
      />
      <TextField
        variant="standard"
        fullWidth
        id="bank_account"
        name="bank_account"
        label="Bank account"
        type="text"
      />
    </>
  );
}
