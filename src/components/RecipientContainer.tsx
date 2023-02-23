import { Grid, Typography } from "@mui/material";
import AddressFields from "./AddressFields";

export default function RecipientContainer() {
  return (
    <>
      <Grid item container xs={12} md={6}>
        <Grid item>
          <Typography variant="h4">Recipient</Typography>
        </Grid>
        <Grid item>
          <AddressFields containerType="recipient" />
        </Grid>
      </Grid>
    </>
  );
}
