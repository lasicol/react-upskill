import { TextField } from "@mui/material";
import { useFormikContext } from "formik";
import { TFormikValues, TPersonalInfo } from "../routes/CreateInvoice";
type TContainerType = "recipient" | "sender";
type Props = {
  containerType: TContainerType;
};

export default function AddressFields({ containerType }: Props) {
  const { values, handleChange } = useFormikContext<TFormikValues>();
  const fields: {
    name: `${TContainerType}.${keyof TPersonalInfo}`;
    label: string;
    type: string;
    value: string | number;
  }[] = [
    {
      name: `${containerType}.companyName`,
      label: "Company Name",
      type: "text",
      value: values[`${containerType}`].companyName,
    },
    {
      name: `${containerType}.city`,
      label: "City",
      type: "text",
      value: values[`${containerType}`].city,
    },
    {
      name: `${containerType}.street`,
      label: "Street",
      type: "text",
      value: values[`${containerType}`].street,
    },
    {
      name: `${containerType}.postcode`,
      label: "Postcode",
      type: "text",
      value: values[`${containerType}`].postcode,
    },
    {
      name: `${containerType}.nip`,
      label: "NIP",
      type: "text",
      value: values[`${containerType}`].nip,
    },
    {
      name: `${containerType}.tel`,
      label: "Tel",
      type: "text",
      value: values[`${containerType}`].tel,
    },
    {
      name: `${containerType}.email`,
      label: "E-Mail",
      type: "text",
      value: values[`${containerType}`].email,
    },
    {
      name: `${containerType}.bankAccount`,
      label: "Bank Account",
      type: "text",
      value: values[`${containerType}`].bankAccount,
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
