import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import PageHeader from './pageFrame/PageHeader';
import PageFooter from './pageFrame/PageFooter';
import Home from '../pages/Home/Home';
import Product from '../pages/Product/Product';
import Delivery from '../modules/preorder/Delivery';
import AddProduct from '../modules/product/AddProduct';
import Todo from "./Todo";

const NotFound = Home;

class MainFrame extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <PageHeader/>
          <main>
            {/*
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />*/}
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/product/add" component={AddProduct} />
              <Route path="/product" component={Product} />
              <Route path="/delivery" component={Delivery} />
              <Route component={NotFound}/>
            </Switch>
          </main>

          {/*<!-- Fixed bottom btn -->*/}
          {/*<div id="btn-chat" className="fixed-action-btn">
            <a href="#!/chat" className="btn-floating btn-large brown">
              <i className="large material-icons">chat</i>
            </a>
          </div>*/}

          <PageFooter/>
        </div>
      </BrowserRouter>
    );
  }
}

export default MainFrame;
