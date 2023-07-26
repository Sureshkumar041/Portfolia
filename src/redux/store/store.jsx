import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../reducers/userReducer";

export const rootReducer = combineReducers({
    userReducer
});
export const store = configureStore({
    reducer: rootReducer
});