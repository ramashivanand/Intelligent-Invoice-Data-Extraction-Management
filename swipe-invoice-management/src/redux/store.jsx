import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Default to localStorage for web
import { combineReducers } from "redux";
import invoiceReducer from "./slices/invoiceSlice";
import productsReducer from "./slices/productsSlice";
import customersReducer from "./slices/customersSlice";

// Combine reducers
const rootReducer = combineReducers({
  invoices: invoiceReducer,
  products: productsReducer,
  customers: customersReducer,
});

// Persist configuration
const persistConfig = {
  key: "root", // Key in localStorage
  storage, // Default is localStorage
};

// Apply persist to the root reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store
const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools only in development
});

// Create a persistor instance for use with PersistGate
export const persistor = persistStore(store);

export default store;
