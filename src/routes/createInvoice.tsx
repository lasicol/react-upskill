import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import Divider from "@mui/material/Divider";
import InvoiceItem from "../components/InvoiceItem";
import SenderContainer from "../components/SenderContainer";
import RecipientContainer from "../components/RecipientContainer";
import NumberAndDate from "../components/NumberAndDate";
import ActionButtons from "../components/ActionButtons";

export default function CreateInvoice() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} sx={{ marginTop: 2 }}>
        <NumberAndDate />
        <Grid item xs={3} />
        <ActionButtons />
        <Grid item xs={1} />
        <Grid item xs={12} sx={{ marginTop: 2, marginBottom: 2 }}>
          <Divider />
        </Grid>
        <Grid
          item
          xs={12}
          container
          direction={"row"}
          sx={{ marginTop: 2, marginBottom: 2 }}
        >
          <RecipientContainer />
          <SenderContainer />
        </Grid>
        <InvoiceItem />
        <Grid item xs={10} />
        <Grid item xs={2}>
          <Button variant="contained">Add Item</Button>
        </Grid>
      </Grid>
    </Box>
  );
}
