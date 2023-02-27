import { TextField, Grid } from "@mui/material";

export default function NumberAndDate() {
  return (
    <>
      <Grid item xs={5} container spacing={4} direction={"row"} sx={{ ml: 4 }}>
        <Grid item xs={12}>
          <TextField
            variant="standard"
            fullWidth
            id="no"
            name="no"
            label="No."
            type="text"
          />
        </Grid>
        <Grid item xs={12} container spacing={2}>
          <Grid item xs={6}>
            <TextField
              variant="standard"
              fullWidth
              id="current_date"
              name="current_date"
              label="Current Date"
              type="date"
              InputLabelProps={{ shrink: true }}
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
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
