import { combineReducers } from "redux";
import { formsReducer } from "./formsReducers";

export const rootReducers = combineReducers({
    forms: formsReducer
})

export type RootState = ReturnType<typeof rootReducers>