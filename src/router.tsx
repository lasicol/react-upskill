import { createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root";
import ErrorPage from "./error-page";
import Invoice from "./routes/Invoice";
import CreateInvoice from "./routes/CreateInvoice";

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
