import { Grid, Typography } from "@mui/material";
import AddressFields from "./AddressFields";

export default function RecipientContainer() {
  return (
    <>
      <Grid item container xs={6} sx={{ pr: 2, pl: 2 }}>
        <Grid item xs={12}>
          <Typography variant="h4">Recipient</Typography>
        </Grid>
        <Grid item xs={12}>
          <AddressFields containerType="recipient" />
        </Grid>
      </Grid>
    </>
  );
}
