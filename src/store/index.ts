import thunk from "redux-thunk";
import { rootReducers } from "./reducers";
import {configureStore} from "@reduxjs/toolkit";
import { composeWithDevTools } from "@reduxjs/toolkit/dist/devtoolsExtension";

export default configureStore({
    reducer: rootReducers,
    middleware:[thunk],
    enhancers:[composeWithDevTools()]
})