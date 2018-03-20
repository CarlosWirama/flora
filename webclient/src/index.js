import React from "react";
import { render } from "react-dom";
import DevTools from "mobx-react-devtools";
import { BrowserRouter } from "react-router-dom";

import TodoList from "./components/TodoList";
import TodoListModel from "./models/TodoListModel";
import TodoModel from "./models/TodoModel";

import MainFrame from "./components/MainFrame";


//// setup mobX
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
