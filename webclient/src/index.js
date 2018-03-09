import React from "react";
import { render } from "react-dom";
import DevTools from "mobx-react-devtools";
import { BrowserRouter } from "react-router-dom";

import TodoList from "./components/TodoList";
import TodoListModel from "./models/TodoListModel";
import TodoModel from "./models/TodoModel";

// require("https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.2/js/materialize.js")

import MainFrame from "./components/MainFrame";

const store = new TodoListModel();

render(
  <div>
    <DevTools />
	<BrowserRouter>
	    {/*<TodoList store={store} />*/}
	    <MainFrame store={store}/>
    </BrowserRouter>

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
