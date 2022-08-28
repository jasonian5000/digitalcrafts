import React from 'react'

export default function Cart(props: any): JSX.Element {
  return (
    <div className="Cart">
      <div>
        <p>
          {props?.description} - ${props?.price}
        </p>
      </div>
    </div>
  );
}
