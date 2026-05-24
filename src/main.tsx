/** @format */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import themesSlice from "./themesSlice.tsx";

const store = configureStore({
  reducer: {
    theme: themesSlice,
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
