type ProductDetail = {
  description: string,
  price: number
}

const initialProducts = [
  { description: "Ethan's Mustache", price: 400 },
  { description: "Rahmin's Tiny Keyboard", price: 100 },
  { description: "Blke's Sousaphone", price: 1500 },
  { description: "Joe's Air Conditioner", price: 1800 },
  { description: "Andrea's Pokemon Cards", price: 700 },
  { description: "Violet's Ikea Room", price: 2100 },
  { description: "Benji", price: 1_000_000 },
];

type State = {
  products: ProductDetail[],
  cart: ProductDetail[],
  user: string
};

const initialState: State = {
  products: initialProducts,
  cart: [],
  user: "Jason"
};

type Action = {
  type: string;
  payload?: any;
};

const rootReducer = (state = initialState, action: Action) => {
  switch (action?.type) {
    case "ADD_TO_CART":
      const newCart = state.cart
      console.log(newCart)
      return { ...state, cart: [...newCart, action?.payload] };
    case "COMPLETE_ORDER":
      return {...state}
    default:
      return state;
  }
};

export default rootReducer;
