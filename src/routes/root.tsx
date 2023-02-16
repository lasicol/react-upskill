import ButtonAppBar from "../components/AppBar";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <ButtonAppBar />
      <Outlet />
    </>
  );
}
