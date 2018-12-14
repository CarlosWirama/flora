'use strict';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { RoutedTabs, NavTab } from 'react-router-tabs';

import { Common } from 'constants/displayTexts';

const tabsStyle = {
  display: 'flex',
};

function FormPagesHeader ({ location: { pathname } }) {
  return (
    <header className="navbar-fixed">
      <nav>
        <RoutedTabs className="nav-wrapper container" style={tabsStyle}>
          <StepButton url="/" text={Common.BOUQUET} step={1} />
          <StepButton url="/form/card" text={Common.CARD} step={2} active={pathname == '/form/card'} />
          <StepButton url="/form/delivery" text={Common.DELIVERY} step={3} active={pathname == '/form/delivery'} />
          <StepButton url="/form/customer" text={Common.CUSTOMER} step={4} active={pathname == '/form/customer'} />
        </RoutedTabs>
      </nav>
    </header>
  );
}

export default withRouter(props => <FormPagesHeader {...props}/>);

function StepButton({url, text, active, step}) {
  const backgroundColor = active ? 'whitesmoke' : 'transparent';
  return (
    <NavTab to={url} style={{flex:1, textAlign:'center', backgroundColor}}>
      {text}
    </NavTab>
  );
}
