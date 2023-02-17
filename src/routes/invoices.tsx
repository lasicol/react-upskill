import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";
import { TFormikValues } from "./createInvoice";
import axios from "axios";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function Invoices() {
  const [invoices, setInvoices] = useState<TFormikValues[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/invoices")
      .then((resp) => setInvoices(resp.data));
  }, []);

  return (
    <Grid container>
      <Grid item xs={1}></Grid>
      <Grid item xs={10} style={{ marginTop: 20 }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>No.</TableCell>
                <TableCell align="right">Created</TableCell>
                <TableCell align="right">Valid Until</TableCell>
                <TableCell align="right">Amount</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {invoices.map((row) => (
                <TableRow
                  key={row.no}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.no}
                  </TableCell>
                  <TableCell align="right">{row.currentDate}</TableCell>
                  <TableCell align="right">{row.validUntilDate}</TableCell>
                  <TableCell align="right">
                    {row.invoiceItems.reduce((acc, cur) => {
                      return acc + cur.price;
                    }, 0)}
                  </TableCell>
                  <TableCell align="right">dupa</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
  );
}
