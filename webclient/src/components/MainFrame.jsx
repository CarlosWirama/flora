import React from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
// import './mobile.css';

import Todo from "./Todo";

@observer
class MainFrame extends React.Component {
  @observable newTodoTitle = "";

  render() {

    fetch('http://localhost:3001/s').then(res=>res.json()).then(res=>console.log(res));
    return (
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



        <header>
          <div className="navbar-fixed">
            {/* nav-extended untuk filter-sort */}
            <nav className="nav-extended">
              <div className="nav-wrapper container">
                            {/*<!-- removed class: show-on-large -->*/}
                <a href="#" data-activates="side-nav" className="button-collapse"><i className="material-icons">menu</i></a>
                <a href="#"><h5 className="brand-logo">JC Fleur Bouquet</h5></a>
                <a href="#!/basket" className="right" style={{position:"relative"}}>
                  <img id="basket" className="icon" src="images/handbag.svg" />
                  <span>0</span>
                </a>
                {/*<!-- //nav menu for desktop -->
                <!-- <ul className="right hide-on-med-and-down">
                </ul> -->*/}
              </div>
            </nav>
          </div>

          <ul id="side-nav" className="side-nav">
            <li><a href="#">Home</a></li>
            <li style={{paddingLeft: 16}}>
              <ul className="collapsible collapsible-accordion">
                <li>
                  <a className="collapsible-header">Shop<i className="material-icons right">arrow_drop_down</i></a>
                  <div className="collapsible-body">
                    <ul>
                      <li><a href="#!/shop">All</a></li>
                      <li><a href="#!">Hand Bouquet</a></li>
                      <li><a href="#!">Wedding</a></li>
                      <li><a href="#!">Bloombox</a></li>
                      <li><a href="#!">Table</a></li>
                      <li><a href="#!">Popular</a></li>
                      <li><a href="#seasonal">Seasonal</a></li>
                      <li><div className="divider"></div></li>
                    </ul>
                  </div>
                </li>
              </ul>
            </li>
            <li><a href="#!/login">Sign Up / Login</a></li>
            <li><a href="#!/contact">Contact</a></li>
            <li><a href="#!/us">Us</a></li>
            <li><div className="divider"></div></li>
            <li><a className="subheader">HELP</a></li>
            <li><a href="#!">Chat with us</a></li>
            <li><a href="#!">Shipping Information</a></li>
            <li><a href="#!"><i className="material-icons">cloud</i>How to Order</a></li>
            <li><a href="#!">FAQ</a></li>
          </ul>
        </header>


        {/*<!-- CONTENT -->*/}
        <main>
          <div className="view-container">
            {/*<!-- <div ng-view className="fader"></div> -->*/}
            <div ng-view className="view-frame"></div>
          </div>
        </main>

        {/*<!-- Fixed bottom btn -->*/}
        <div id="btn-chat" className="fixed-action-btn">
          <a href="#!/chat" className="btn-floating btn-large brown">
            <i className="large material-icons">chat</i>
          </a>
        </div>
      </div>
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
