/** @format */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import themeReducer from "./themeSlice.tsx";

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
