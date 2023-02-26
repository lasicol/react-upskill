import { TextField, Grid } from "@mui/material";
import { useFormikContext } from "formik";
import { TFormikValues } from "../routes/CreateInvoice";

export default function NumberAndDate() {
  const { values, handleChange } = useFormikContext<TFormikValues>();

  return (
    <>
      <Grid item container direction="column" spacing={2} xs={6} ml={{ md: 2 }}>
        <Grid item>
          <TextField
            variant="standard"
            fullWidth
            id="no"
            name="no"
            label="No."
            type="text"
            value={values.no}
            onChange={handleChange}
          />
        </Grid>
        <Grid item container spacing={2} xs="auto" flexGrow={"grow"}>
          <Grid item xs={12} md={6}>
            <TextField
              variant="standard"
              fullWidth
              id="current_date"
              name="current_date"
              label="Current Date"
              type="date"
              InputLabelProps={{ shrink: true }}
              defaultValue={values.currentDate}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              variant="standard"
              fullWidth
              id="valid_until_date"
              name="valid_until_date"
              label="Valid Until Date"
              type="date"
              InputLabelProps={{ shrink: true }}
              defaultValue={values.validUntilDate}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
