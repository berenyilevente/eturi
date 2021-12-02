import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import clothesReducer from "../redux/clothes/clothes.reducer";
import authReducer from "./auth/auth.reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

export const rootReducer = combineReducers({
  clothes: clothesReducer,
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(
  persistedReducer,
  compose(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
