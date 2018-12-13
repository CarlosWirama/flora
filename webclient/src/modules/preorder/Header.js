'use strict';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { RoutedTabs, NavTab } from 'react-router-tabs';

import { Common } from 'constants/displayTexts';

const tabsStyle = {
  display: 'flex',
};

function FormPagesHeader() {
  return (
    <header className="navbar-fixed">
      <nav>
        <RoutedTabs className="nav-wrapper container" style={tabsStyle}>
          <StepButton url="/" text={Common.BOUQUET} />
          <StepButton url="/form/card" text={Common.CARD} />
          <StepButton url="/form/delivery" text={Common.DELIVERY} />
          <StepButton url="/form/customer" text={Common.CUSTOMER} />
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
