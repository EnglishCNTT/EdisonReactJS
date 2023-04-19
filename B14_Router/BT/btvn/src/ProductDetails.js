import React from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails () {
  const { productId } = useParams();
  return <div>Products detail: {productId}</div>;
}