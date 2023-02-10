import React from "react";

import { useParams } from "react-router-dom";

export default function Invoice() {
  const { id } = useParams();
  console.log(id);

  return <>Display invoice {id}</>;
}
