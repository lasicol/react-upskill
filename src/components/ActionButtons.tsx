import { Button, Grid } from "@mui/material";
import { useFormikContext } from "formik";

export default function ActionButtons() {
  const { submitForm } = useFormikContext();
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
