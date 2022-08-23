// import { configureStore } from "@reduxjs/toolkit";
// ...
import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/rootReducer";
export const store = createStore(rootReducer, applyMiddleware(logger));
// export const store = configureStore({
//   reducer: {

//   },
// });

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
