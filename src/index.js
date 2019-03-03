import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers";
import { ActionCableProvider } from "react-actioncable-provider";

const store = createStore(reducer);
console.log(store);
ReactDOM.render(
  <Provider store={store}>
    <ActionCableProvider url={"ws://localhost:3000/cable"}>
      <Router>
        <App />
      </Router>
    </ActionCableProvider>
  </Provider>,
  document.getElementById("root")
);
