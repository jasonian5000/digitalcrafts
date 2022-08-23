import React from "react";
import { useAppDispatch } from "../app/hooks";

export default function Products(props: any): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <div className="Products">
      <div className="Product-Card">
        <p>
          {props?.description} - ${props?.price}
        </p>
        <button
        className="Add-Button"
          onClick={() => dispatch({ type: "ADD_TO_CART", payload: props })}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
