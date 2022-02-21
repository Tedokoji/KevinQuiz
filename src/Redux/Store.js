import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { quizReducer } from "./Reducers";


export const store = createStore(quizReducer,applyMiddleware(thunk))