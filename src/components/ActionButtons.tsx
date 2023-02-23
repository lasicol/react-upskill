import { Button, Grid } from "@mui/material";
import { useFormikContext } from "formik";

export default function ActionButtons() {
  const { submitForm } = useFormikContext();

  const onSubmit = async () => {
    try {
      await submitForm();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <Grid
        item
        container
        xs={6}
        md={4}
        spacing={2}
        justifyContent={{
          xs: "flex-start",
          md: "flex-end",
        }}
        direction={{
          xs: "column",
          md: "row",
        }}
      >
        <Grid item md="auto">
          <Button
            sx={{
              width: {
                xs: "100%",
              },
            }}
            variant="contained"
            onClick={onSubmit}
          >
            Save
          </Button>
        </Grid>
        <Grid item md="auto">
          <Button
            sx={{
              width: {
                xs: "100%",
              },
            }}
            variant="contained"
          >
            Cancel
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
