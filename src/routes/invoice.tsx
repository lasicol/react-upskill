import { useParams } from "react-router-dom";

export default function Invoice() {
  const { id } = useParams();

  return <>Display invoice {id}</>;
}
