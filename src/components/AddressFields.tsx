import { TextField } from "@mui/material";
import { useFormikContext } from "formik";
import { TFormikValues } from "../routes/createInvoice";

type Props = {
  containerType: "recipient" | "sender";
};

export default function AddressFields({ containerType }: Props) {
  const { values, handleChange } = useFormikContext<TFormikValues>();
  const fields = [
    {
      name: `${containerType}_companyName`,
      label: "Company Name",
      type: "text",
      value: values[`${containerType}`].companyName,
      onChange: handleChange,
    },
    {
      name: `${containerType}_city`,
      label: "City",
      type: "text",
      value: values[`${containerType}`].city,
      onChange: handleChange,
    },
    {
      name: `${containerType}_street`,
      label: "Street",
      type: "text",
      value: values[`${containerType}`].street,
      onChange: handleChange,
    },
    {
      name: `${containerType}_postcode`,
      label: "Postcode",
      type: "text",
      value: values[`${containerType}`].postcode,
      onChange: handleChange,
    },
    {
      name: `${containerType}_nip`,
      label: "NIP",
      type: "text",
      value: values[`${containerType}`].nip,
      onChange: handleChange,
    },
    {
      name: `${containerType}_tel`,
      label: "Tel",
      type: "text",
      value: values[`${containerType}`].tel,
      onChange: handleChange,
    },
    {
      name: `${containerType}_email`,
      label: "E-Mail",
      type: "text",
      value: values[`${containerType}`].email,
      onChange: handleChange,
    },
    {
      name: `${containerType}_bank_account`,
      label: "Bank Account",
      type: "text",
      value: values[`${containerType}`].bankAccount,
      onChange: handleChange,
    },
  ];

  return (
    <>
      {fields.map((field) => (
        <TextField
          variant="standard"
          fullWidth
          id={field.name}
          name={field.name}
          label={field.label}
          type={field.type}
          key={field.name}
          value={field.value}
          onChange={handleChange}
        />
      ))}
    </>
  );
}
