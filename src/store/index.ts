import { combineReducers, configureStore } from "@reduxjs/toolkit";
import auth from "./reducers/auth";
import todos from "./reducers/todos";

const rootReducer = combineReducers({ auth, todos });

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const configStore = () => configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof configStore>;
export type AppDispath = AppStore["dispatch"];
