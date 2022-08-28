import React from "react";
import { useParams } from "react-router-dom";

export default function ProductCard(props) {
    let {product} = useParams
  return <div>ProductCard {props?.product.id}</div>;
}
