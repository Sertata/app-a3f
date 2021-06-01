import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
import { Provider } from "react-redux";
import ErrorBoundary from "./components/ErrorBoundary";

import store from "./store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store.store}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
