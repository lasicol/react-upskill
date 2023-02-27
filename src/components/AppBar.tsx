import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to={`/`} style={{ textDecoration: "none", color: "#FFF" }}>
            <Button color="inherit">Invoices</Button>
          </Link>
          <Link
            to={"/invoices/create"}
            style={{ textDecoration: "none", color: "#FFF" }}
          >
            <Button color="inherit">Add New Invoice</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
