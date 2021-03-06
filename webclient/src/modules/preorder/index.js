'use strict';
import React from 'react';
import { Switch, Route } from "react-router-dom";
import Header from './Header.js';
import { CardForm, DeliveryForm, CustomerForm } from './forms';

export default function PreOrder() {
  return (
    <div>
      <Header />
      <main>
      <Switch>
        <Route path="/form/card" component={CardForm} />
        <Route path="/form/delivery" component={DeliveryForm} />
        <Route path="/form/customer" component={CustomerForm} />
      </Switch>
      </main>
    </div>
  );
}
