# Start a React project with Redux, Typescript, and Logger

- start react app with typesript
`npx create-react-app redux-day-3 --template typescript`

- install redux
`npm install redux@next react-redux@next`

- install logger
`npm i --save redux-logger`

- allow logger in typescript
`npm i --save-dev @types/redux-logger`

- index.tsx looks like this

```
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers/rootReducer";
import logger from "redux-logger" ;
const store = createStore(rootReducer, applyMiddleware(logger));

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
```

- add **reducers** folder to src folder
- create **rootReducer.js** in reducers folder
- **rootReducer.js** will look like this
```
const initialState = {}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
        return { ...state}
    default:
      return state;
  }
};

export default rootReducer;
```

