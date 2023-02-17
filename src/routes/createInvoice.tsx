import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import SenderContainer from "../components/SenderContainer";
import RecipientContainer from "../components/RecipientContainer";
import NumberAndDate from "../components/NumberAndDate";
import ActionButtons from "../components/ActionButtons";
import { Formik, Form } from "formik";
import { format } from "date-fns";
import InvoiceItems from "../components/InvoiceItems";
import axios from "axios";

export type TPersonalInfo = {
  companyName: string;
  city: string;
  street: string;
  postcode: string;
  nip: string;
  tel: string;
  email: string;
  bankAccount: string;
};

export type TFormikValues = {
  no: string;
  currentDate: string;
  validUntilDate?: string;
  recipient: TPersonalInfo;
  sender: TPersonalInfo;
  invoiceItems: TInvoiceItem[];
};

export type TInvoiceItem = {
  name: string;
  amount: number;
  unit: string;
  tax: number;
  price: number;
};

export default function CreateInvoice() {
  const initialValues: TFormikValues = {
    no: "",
    currentDate: format(new Date(), "yyyy-MM-dd"),
    recipient: {
      companyName: "",
      city: "",
      street: "",
      postcode: "",
      nip: "",
      tel: "",
      email: "",
      bankAccount: "",
    },
    sender: {
      companyName: "",
      city: "",
      street: "",
      postcode: "",
      nip: "",
      tel: "",
      email: "",
      bankAccount: "",
    },
    invoiceItems: [
      {
        name: "",
        amount: 1,
        unit: "",
        tax: 0,
        price: 0,
      },
    ],
  };

  return (
    <Formik
      initialValues={initialValues}
      //   validate={(values) => {
      //     const errors: { token?: any } = {};
      //     if (values.no.length < 5) {
      //       errors.token = "Invalid code. Too short.";
      //     }
      //     return errors;
      //   }}
      onSubmit={(values) => {
        console.log(values);
        axios.post("http://localhost:3001/invoices", values);
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {(props: { values: TFormikValues }) => (
        <Form>
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
              <InvoiceItems />
            </Grid>
          </Box>
        </Form>
      )}
    </Formik>
  );
}
