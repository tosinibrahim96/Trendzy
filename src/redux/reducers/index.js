import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { setCurrentUserReducer } from "./userReducer";
import { cartReducer } from "./cartReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"]
};

const rootReducer = combineReducers({
  user: setCurrentUserReducer,
  cart: cartReducer
});

export default persistReducer(persistConfig, rootReducer);
