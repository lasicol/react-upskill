import * as React from "react";
import { TextField } from "@mui/material";
import { useFormikContext } from "formik";
import { TFormikValues } from "../routes/createInvoice";

type Props = {
  containerType: "recipient" | "sender";
};

export default function AddressFields({ containerType }: Props) {
  const { values, handleChange } = useFormikContext<TFormikValues>();
  return (
    <>
      {" "}
      <TextField
        variant="standard"
        fullWidth
        id={`${containerType}_companyName`}
        name={`${containerType}_companyName`}
        label="Company Name"
        type="text"
        value={values[`${containerType}`].companyName}
        onChange={handleChange}
      />
      <TextField
        variant="standard"
        fullWidth
        id={`${containerType}_city`}
        name={`${containerType}_city`}
        label="City"
        type="text"
        value={values[`${containerType}`].city}
        onChange={handleChange}
      />
      <TextField
        variant="standard"
        fullWidth
        id={`${containerType}_street`}
        name={`${containerType}_street`}
        label="Street"
        type="text"
        value={values[`${containerType}`].street}
        onChange={handleChange}
      />
      <TextField
        variant="standard"
        fullWidth
        id={`${containerType}_postcode`}
        name={`${containerType}_postcode`}
        label="Postcode"
        type="text"
        value={values[`${containerType}`].postcode}
        onChange={handleChange}
      />
      <TextField
        variant="standard"
        fullWidth
        id={`${containerType}_nip`}
        name={`${containerType}_nip`}
        label="NIP"
        type="text"
        value={values[`${containerType}`].nip}
        onChange={handleChange}
      />
      <TextField
        variant="standard"
        fullWidth
        id={`${containerType}_tel`}
        name={`${containerType}_tel`}
        label="Tel"
        type="text"
        value={values[`${containerType}`].tel}
        onChange={handleChange}
      />
      <TextField
        variant="standard"
        fullWidth
        id={`${containerType}_email`}
        name={`${containerType}_email`}
        label="E-mail"
        type="text"
        value={values[`${containerType}`].email}
        onChange={handleChange}
      />
      <TextField
        variant="standard"
        fullWidth
        id={`${containerType}_bankAccount`}
        name={`${containerType}_bankAccount`}
        label="Bank account"
        type="text"
        value={values[`${containerType}`].bankAccount}
        onChange={handleChange}
      />
    </>
  );
}
