import { createStore } from "redux";
import { trifleApp } from "./reducers";

const store = createStore(trifleApp);

export default store;