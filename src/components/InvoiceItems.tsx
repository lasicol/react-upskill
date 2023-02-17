import { TextField, Grid, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useFormikContext, FieldArray } from "formik";
import { TFormikValues } from "../routes/createInvoice";

export default function InvoiceItems() {
  const { values, handleChange } = useFormikContext<TFormikValues>();
  return (
    <FieldArray name="invoiceItems">
      {({ insert, remove, push }) => (
        <>
          {values.invoiceItems.map((item, index) => (
            <Grid spacing={1} container key={`invoiceItem[${index}]`}>
              {" "}
              <Grid item xs={6} style={{ paddingLeft: 30 }}>
                <TextField
                  variant="standard"
                  fullWidth
                  id={`invoiceItems[${index}].name`}
                  name={`invoiceItems[${index}].name`}
                  label="Name"
                  type="text"
                  value={item.name}
                  onChange={handleChange}
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
                  id={`invoiceItems[${index}].amount`}
                  name={`invoiceItems[${index}].amount`}
                  label="Amount"
                  type="number"
                  value={item.amount}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
                <TextField
                  style={{
                    width: "21.9%",
                    display: "inline-block",
                    margin: "0 1.1% 0 0",
                    padding: 0,
                  }}
                  variant="standard"
                  id={`invoiceItems[${index}].unit`}
                  name={`invoiceItems[${index}].unit`}
                  label="Unit"
                  type="text"
                  value={item.unit}
                  onChange={handleChange}
                />
                <TextField
                  style={{
                    width: "21.9%",
                    display: "inline-block",
                    margin: "0 1.1% 0 0",
                    padding: 0,
                  }}
                  variant="standard"
                  id={`invoiceItems[${index}].tax`}
                  name={`invoiceItems[${index}].tax`}
                  label="Tax"
                  type="number"
                  value={item.tax}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
                <TextField
                  style={{
                    width: "21.9%",
                    display: "inline-block",
                    margin: "0 1.1% 0 0",
                    padding: 0,
                  }}
                  variant="standard"
                  id={`invoiceItems[${index}].price`}
                  name={`invoiceItems[${index}].price`}
                  label="Price"
                  type="number"
                  value={item.price}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
                <DeleteIcon
                  onClick={() => {
                    remove(index);
                  }}
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
            </Grid>
          ))}
          <Grid item xs={10} />
          <Grid item xs={2}>
            <Button
              onClick={() => {
                push({
                  name: "",
                  amount: 1,
                  unit: "",
                  tax: 0,
                  price: 0,
                });
              }}
              variant="contained"
            >
              Add Item
            </Button>
          </Grid>
        </>
      )}
    </FieldArray>
  );
}
