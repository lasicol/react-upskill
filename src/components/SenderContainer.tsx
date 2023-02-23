import { Grid, Typography } from "@mui/material";
import AddressFields from "./AddressFields";

export default function SenderContainer() {
  return (
    <>
      <Grid item container xs={12} md={6}>
        <Grid item>
          <Typography variant="h4">Sender</Typography>
        </Grid>
        <Grid item>
          <AddressFields containerType="sender" />
        </Grid>
      </Grid>
    </>
  );
}
