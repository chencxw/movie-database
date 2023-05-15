import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/styles.scss";
import AppRouter from "./routers/AppRouter";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { APP_FOLDER_NAME } from "./globals/globals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter basename={`/${APP_FOLDER_NAME}`} />
    </Provider>
  </React.StrictMode>
);
