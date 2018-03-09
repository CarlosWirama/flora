import React from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import PageHeader from './pageFrame/PageHeader';
import Home from '../pages/Home/Home';
import Product from '../pages/Product/Product';
import Todo from "./Todo";

@observer
class MainFrame extends React.Component {
  @observable newTodoTitle = "";

  render() {

    // fetch('http://localhost:3001/s').then(res=>res.json()).then(res=>console.log(res));
    return (
      <BrowserRouter>
        <div>
          {/*<form onSubmit={this.handleFormSubmit}>
            New Todo:
            <input
              type="text"
              value={this.newTodoTitle}
              onChange={this.handleInputChange}
            />
            <button type="submit">Add</button>
          </form>
          <hr />
          <ul>
            {this.props.store.todos.map(todo => (
              <Todo todo={todo} key={todo.id} />
            ))}
          </ul>
          Tasks left: {this.props.store.unfinishedTodoCount}
  */}


          <PageHeader/>

          <main>
            {/*
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />*/}
            {/*<Switch>*/}
            <Route exact path="/" component={Home} />
            <Route path="/product" component={Product} />
            {/*</Switch>*/}
          </main>

          {/*<!-- Fixed bottom btn -->*/}
          <div id="btn-chat" className="fixed-action-btn">
            <a href="#!/chat" className="btn-floating btn-large brown">
              <i className="large material-icons">chat</i>
            </a>
          </div>

        </div>
      </BrowserRouter>
    );
  }

  @action
  handleInputChange = e => {
    this.newTodoTitle = e.target.value;
  };

  @action
  handleFormSubmit = e => {
    this.props.store.addTodo(this.newTodoTitle);
    this.newTodoTitle = "";
    e.preventDefault();
  };
}

export default MainFrame;
