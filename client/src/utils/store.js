import { createStore } from "redux";
import { rootReducer as reducer } from "./reducers";

const store = createStore(reducer);
export default store;
