import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Route, Router, browserHistory } from "react-router";

import Home from "./containers/Home";

import store from "./stores/";
import { saveItems } from "./localStorage";


store.subscribe(() => {
  saveItems(store.getState({
    data: store.getState().data
  }));
});

// Render the router
ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
	  <Route exact path="/" component={Home} />
	  <Route path="/artists/:name" component={Home} />
	</Router>
  </Provider>
), document.getElementById("root"));

