'use strict';

import React from "react";
import { Link, withRouter } from "react-router-dom";

const PageHeader = withRouter(props => <PageHeaderLayout {...props}/>);
const PageHeaderLayout = props => (
  <header>
    <div className="navbar-fixed">
      {/* nav-extended untuk filter-sort */}
      <nav className="nav-extended">
        <div className="nav-wrapper container">
                      {/*<!-- removed class: show-on-large -->*/}
          {/*<a href="#" data-activates="side-nav" className="button-collapse">*/}
          { props.location.pathname!='/' &&
            <a onClick={props.history.goBack} className='icon left hide-on-large-only'>
              <i className="material-icons">arrow_backs</i>
            </a>
          }
          <Link to="/"><h5 className="brand-logo">buké</h5></Link>
          <a href="#!/basket" className="right" style={{position:"relative"}}>
            {/*<img id="basket" className="icon" src="images/handbag.svg" />*/}
            <span>0</span>
          </a>
          {/*<!-- //nav menu for desktop -->
          <!-- <ul className="right hide-on-med-and-down">
          </ul> -->*/}
        </div>
      </nav>
    </div>

    {/*navbar content*/}
    <ul id="side-nav" className="side-nav">
      <li><a href="#">Home</a></li>
      <li style={{paddingLeft: 16}}>
        <ul className="collapsible collapsible-accordion">
          <li>
            <a className="collapsible-header">Shop<i className="material-icons right">arrow_drop_down</i></a>
            <div className="collapsible-body">
              <ul>
                <li><a href="#!/shop">All</a></li>
                <Link to="/topics">Topics</Link>
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
);

export default PageHeader;