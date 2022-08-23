import React from "react";
import Cart from "./Cart";
import Products from "./Products";
import { useAppSelector } from "../app/hooks";
import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://mxakcphctxajogkuteth.supabase.co";
const supabaseAnonKey = "";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function Homepage(): JSX.Element {
  const products = useAppSelector((state) => state.products);
  const cart = useAppSelector((state) => state.cart);
  const user = useAppSelector((state) => state.user);
  const sendToDatabase = async () => {
    const { data, error } = await supabase
      .from("ProductsDatabase")
      .insert([{ name: user, items: cart }]);
  };
  return (
    <div className="Homepage">
      <h1>Amazonia</h1>
      <div className="Main">
        <div>
          <h2>Products</h2>
          {products?.map((product) => (
            <Products {...product} />
          ))}
        </div>
        <div>
          <h2>Cart</h2>
          {cart?.map((product) => (
            <Cart {...product} />
          ))}
          <button className="Checkout-Button" onClick={() => sendToDatabase()}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
