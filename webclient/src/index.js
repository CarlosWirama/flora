import React from "react";
import { render } from "react-dom";
// import { Provider } from 'react-redux'
// import DevTools from "mobx-react-devtools";
// import store from './services/store'
import MainFrame from "./components/MainFrame";

// const isDev = process.env.NODE_ENV === 'DEVELOPMENT'
// const isDev = false

render(
  <MainFrame />, document.getElementById("root")
);

// render(
//   <Provider store={store}>
//     { isDev === 'DEVELOPMENT' && <DevTools />}
//     <MainFrame />
//   </Provider>,
//   document.getElementById("root")
// );
