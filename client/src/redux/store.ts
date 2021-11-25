import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import clothesReducer from "../redux/clothes/clothes.reducer";

export const rootReducer = combineReducers({
  clothes: clothesReducer,
});
export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
