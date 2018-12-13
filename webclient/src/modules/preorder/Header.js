'use strict';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { RoutedTabs, NavTab } from 'react-router-tabs';

import { Common } from 'constants/displayTexts';

const tabsStyle = {
  display: 'flex',
};

function FormPagesHeader ({ location: {pathname} }) {
  return (
    <header className="navbar-fixed">
      <nav>
        <RoutedTabs className="nav-wrapper container" style={tabsStyle}>
          <StepButton url="/" text={Common.BOUQUET} active />
          <StepButton url="/form/card" text={Common.CARD}  active={pathname == '/form/card'} />
          <StepButton url="/form/delivery" text={Common.DELIVERY}  active={pathname == '/form/delivery'} />
          <StepButton url="/form/customer" text={Common.CUSTOMER}  active={pathname == '/form/customer'} />
        </RoutedTabs>
      </nav>
    </header>
  );
}

export default withRouter(props => <FormPagesHeader {...props}/>);

function StepButton({url, text, active}) {
  return (
    <NavTab to={url} style={{flex:1, ...active ? {backgroundColor:'black'}:{}}}>
      {text}
    </NavTab>
  );
}
