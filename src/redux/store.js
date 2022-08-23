import { createStore } from "redux";
import { setGenre } from "./actions";

const store = createStore(setGenre);

export default store;