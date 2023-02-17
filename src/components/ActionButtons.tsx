import { Button, Grid } from "@mui/material";
import { useFormikContext } from "formik";

export default function ActionButtons() {
  const { submitForm } = useFormikContext();
  return (
    <>
      <Grid item xs={3}>
        <Button
          variant="contained"
          onClick={async function () {
            try {
              await submitForm();
            } catch (err) {
              console.log(err);
            }
          }}
          style={{ margin: 3 }}
        >
          Save
        </Button>
        <Button variant="contained" style={{ margin: 3 }}>
          Cancel
        </Button>
      </Grid>
    </>
  );
}
