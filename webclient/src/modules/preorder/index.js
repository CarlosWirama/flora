'use strict';
import React from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import Header from './Header.js';
import { CardForm, DeliveryForm, CustomerForm } from './forms';
// import NotFound from '../../pages/Home/Home';

function PreOrder() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/form/card" component={CardForm} />
        <Route path="/form/delivery" component={DeliveryForm} />
        <Route path="/form/customer" component={CustomerForm} />
        {/* <Route component={NotFound}/> */}
      </Switch>
    </div>
  );
}

export default withRouter(props => <PreOrder {...props}/>);
