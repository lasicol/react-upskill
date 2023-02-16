import { Button, Grid } from "@mui/material";

export default function ActionButtons() {
  return (
    <>
      <Grid item xs={3}>
        <Button variant="contained" style={{ margin: 3 }}>
          Save
        </Button>
        <Button variant="contained" style={{ margin: 3 }}>
          Cancel
        </Button>
      </Grid>
    </>
  );
}
