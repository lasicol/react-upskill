import { Button, Grid } from "@mui/material";
import { useFormikContext } from "formik";

export default function ActionButtons() {
  const { submitForm } = useFormikContext();
  return (
    <>
      <Grid container item>
        <Grid item>
          <Button
            variant="contained"
            onClick={async function () {
              try {
                await submitForm();
              } catch (err) {
                console.log(err);
              }
            }}
          >
            Save
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained">Cancel</Button>
        </Grid>
      </Grid>
    </>
  );
}
