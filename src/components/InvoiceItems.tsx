import { TextField, Grid, Button, IconButton, Divider } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useFormikContext, FieldArray } from "formik";
import { TFormikValues } from "../routes/CreateInvoice";

export default function InvoiceItems() {
  const { values, handleChange } = useFormikContext<TFormikValues>();
  return (
    <FieldArray name="invoiceItems">
      {({ insert, remove, push }) => (
        <>
          {values.invoiceItems.map((item, index) => (
            <Grid
              container
              key={`invoiceItem[${index}]`}
              spacing={2}
              sx={{
                mx: "auto",
              }}
            >
              <Grid item md={6} xs={12}>
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
              <Grid item container md={6} xs={12} spacing={1} wrap="nowrap">
                <Grid item xs={3}>
                  <TextField
                    variant="standard"
                    id={`invoiceItems[${index}].amount`}
                    name={`invoiceItems[${index}].amount`}
                    label="Amount"
                    type="number"
                    value={item.amount}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>

                <Grid item xs={2}>
                  <TextField
                    variant="standard"
                    id={`invoiceItems[${index}].unit`}
                    name={`invoiceItems[${index}].unit`}
                    label="Unit"
                    type="text"
                    value={item.unit}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    variant="standard"
                    id={`invoiceItems[${index}].tax`}
                    name={`invoiceItems[${index}].tax`}
                    label="Tax"
                    type="number"
                    value={item.tax}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    variant="standard"
                    id={`invoiceItems[${index}].price`}
                    name={`invoiceItems[${index}].price`}
                    label="Price"
                    type="number"
                    value={item.price}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>

                <Grid item xs={1} sx={{ mt: 2 }}>
                  <IconButton>
                    <DeleteIcon
                      onClick={() => {
                        remove(index);
                      }}
                    >
                      delete
                    </DeleteIcon>
                  </IconButton>
                </Grid>
              </Grid>
              <Grid item xs={12} sx={{ marginBottom: 1 }}>
                <Divider />
              </Grid>
            </Grid>
          ))}
          <Grid container item xs={12} direction={"row-reverse"}>
            <Grid
              item
              container
              xs={6}
              md={4}
              spacing={2}
              justifyContent={"flex-end"}
            >
              <Grid item alignSelf={"flex-end"}>
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
            </Grid>
          </Grid>
        </>
      )}
    </FieldArray>
  );
}
