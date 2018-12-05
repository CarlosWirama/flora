'use strict';

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from '../pages/Home/Home';
import Product from '../pages/Product/Product';
import DeliveryForm from '../modules/preorder/form/DeliveryForm';
import CustomerForm from '../modules/preorder/form/CustomerForm';
import AddProduct from '../modules/product/AddProduct';
import SearchResults from '../modules/product/SearchResults';

const NotFound = Home;

class MainFrame extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/product/add" component={AddProduct} />
          <Route path="/product" component={Product} />
          <Route path="/search" component={SearchResults} />
          <Route path="/form/delivery" component={DeliveryForm} />
          <Route path="/form/customer" component={CustomerForm} />
          <Route component={NotFound}/>
        </Switch>
          {/*<!-- Fixed bottom btn -->*/}
          {/*<div id="btn-chat" className="fixed-action-btn">
            <a href="#!/chat" className="btn-floating btn-large brown">
              <i className="large material-icons">chat</i>
            </a>
          </div>*/}
      </BrowserRouter>
    );
  }
}

export default MainFrame;
