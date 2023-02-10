import React from "react";
import { TextField, Grid } from "@mui/material";

export default function NumberAndDate() {
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
            //   value={formik.values.password}
            //   onChange={formik.handleChange}
            //   error={formik.touched.password && Boolean(formik.errors.password)}
            //   helperText={formik.touched.password && formik.errors.password}
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
              //   value={formik.values.password}
              //   onChange={formik.handleChange}
              //   error={formik.touched.password && Boolean(formik.errors.password)}
              //   helperText={formik.touched.password && formik.errors.password}
            />
          </Grid>

          <Grid item xs={6}>
            {" "}
            <TextField
              variant="standard"
              fullWidth
              id="valid_until_date"
              name="valid_until_date"
              label="Valid Until Date"
              type="date"
              InputLabelProps={{ shrink: true }}
              //   value={formik.values.password}
              //   onChange={formik.handleChange}
              //   error={formik.touched.password && Boolean(formik.errors.password)}
              //   helperText={formik.touched.password && formik.errors.password}
            />
          </Grid>
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </>
  );
}
