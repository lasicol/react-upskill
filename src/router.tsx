import { createBrowserRouter } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Invoice from "./routes/invoice";
import CreateInvoice from "./routes/createInvoice";

export default createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Invoice />,
      },
      {
        path: "invoices/:id",
        element: <Invoice />,
      },
      {
        path: "invoices/create",
        element: <CreateInvoice />,
      },
    ],
  },
]);
