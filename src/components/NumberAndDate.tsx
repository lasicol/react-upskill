import { TextField, Grid } from "@mui/material";
import { useFormikContext } from "formik";
import { TFormikValues } from "../routes/createInvoice";

export default function NumberAndDate() {
  const { values, handleChange } = useFormikContext<TFormikValues>();

  return (
    <>
      <Grid item xs={5} container spacing={4} direction={"row"}>
        <Grid item xs={1} />
        <Grid item xs={10}>
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
        <Grid item xs={1} />
        <Grid item xs={1} />
        <Grid item xs={10} container spacing={2}>
          <Grid item xs={6}>
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

          <Grid item xs={6}>
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
        <Grid item xs={1} />
      </Grid>
    </>
  );
}
