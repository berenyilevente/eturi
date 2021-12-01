import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import clothesReducer from "../redux/clothes/clothes.reducer";
import authReducer from "./auth/auth.reducer";

export const rootReducer = combineReducers({
  clothes: clothesReducer,
  auth: authReducer,
});
export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
