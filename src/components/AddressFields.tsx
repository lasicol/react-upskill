import { TextField } from "@mui/material";

export default function AddressFields() {
  const fields = [
    {
      name: "company_name",
      label: "Company Name",
      type: "text",
    },
    {
      name: "city",
      label: "City",
      type: "text",
    },
    {
      name: "street",
      label: "Street",
      type: "text",
    },
    {
      name: "postcode",
      label: "Postcode",
      type: "text",
    },
    {
      name: "nip",
      label: "NIP",
      type: "text",
    },
    {
      name: "tel",
      label: "Tel",
      type: "text",
    },
    {
      name: "email",
      label: "E-Mail",
      type: "text",
    },
    {
      name: "bank_account",
      label: "Bank Account",
      type: "text",
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
        />
      ))}
    </>
  );
}
