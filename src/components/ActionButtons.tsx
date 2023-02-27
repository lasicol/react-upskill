import { Button, Grid } from "@mui/material";

export default function ActionButtons() {
  return (
    <>
      <Grid
        container
        item
        xs={7}
        sx={{ mr: 4 }}
        flexWrap="nowrap"
        justifyContent={"flex-end"}
        spacing={1}
      >
        <Grid item xs={2}>
          <Button variant="contained" fullWidth>
            Save
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" fullWidth>
            Cancel
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
