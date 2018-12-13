'use strict';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { RoutedTabs, NavTab } from 'react-router-tabs';

const tabsStyle = {
  display: 'flex',
};

function FormPagesHeader() {
  return (
    <header className="navbar-fixed">
      <nav>
        <RoutedTabs className="nav-wrapper container" style={tabsStyle}>
          <StepButton url="/" text="buket" />
          <StepButton url="/form/card" text="kartu" />
          <StepButton url="/form/delivery" text="pengiriman" />
          <StepButton url="/form/customer" text="pemesan" />
        </RoutedTabs>
      </nav>
    </header>
  );
}

export default withRouter(props => <FormPagesHeader {...props}/>);

function StepButton({url, text}) {
  return (
    <NavTab to={url} style={{flex:1}}>
      {text}
    </NavTab>
  );
}
