import React from "react";
import { render } from "react-dom";
import DevTools from "mobx-react-devtools";
import { BrowserRouter } from "react-router-dom";

import TodoList from "./components/TodoList";
import TodoListModel from "./models/TodoListModel";
import TodoModel from "./models/TodoModel";

import MainFrame from "./components/MainFrame";

const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyCd0qjFCXIUvPYgOQaTK_zMGIbXED_qIm0",
  authDomain: "flora-247.firebaseapp.com",
  databaseURL: "https://flora-247.firebaseio.com",
  projectId: "flora-247",
  storageBucket: "flora-247.appspot.com",
  messagingSenderId: "159426383092"
});

// Initialize Cloud Firestore through Firebase
global.db = firebase.firestore();

db.collection("users").get().then( querySnapshot => {
    querySnapshot.forEach( doc => {
        console.log(`${doc.id} => ${doc.data()}`);
        console.log(doc.data());
    });
});

const store = new TodoListModel();

render(
  <div>
    <DevTools />
    {/*<TodoList store={store} />*/}
    <MainFrame store={store}/>
  </div>,
  document.getElementById("root")
);

store.addTodo("Get Coffee");
store.addTodo("Write simpler code");
store.todos[0].finished = true;

setTimeout(() => {
  store.addTodo("Get a cookie as well");
}, 2000);

// playing around in the console
window.store = store;
