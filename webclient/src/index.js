'use strict';
import React from "react";
import { render } from "react-dom";
import { Provider } from 'react-redux'
import store from './store'
import DevTools from "mobx-react-devtools";
import MainFrame from "./components/MainFrame";

// const isDev = process.env.NODE_ENV === 'DEVELOPMENT'
// const isDev = 'DEVELOPMENT'
const isDev = false

render(
  <Provider store={store}>
    { isDev === 'DEVELOPMENT' && <DevTools />}
    <MainFrame />
  </Provider>,
  document.getElementById("root")
);
