'use strict';

import React from "react";
import { Link } from "react-router-dom";

const path = '/webclient/src/components/PageFrame';
const BottomNav = () => (
  <footer className="bottom-nav row center container" style={{backgroundColor:'white'}}>
    <div className="col s2point4">
      <a target="_blank" href="https://www.facebook.com/jcfleurbouquet93">
        <img className="icon" src={path + "/facebook.svg"}/><br/>
        Explore
      </a>
    </div>
    <div className="col s2point4">
      <a target="_blank" href="https://www.facebook.com/jcfleurbouquet93">
        <img className="icon" src={path + "/facebook.svg"}/><br/>
        Booking
      </a>
    </div>
    <div className="col s2point4">
      <a target="_blank" href="https://www.facebook.com/jcfleurbouquet93">
        <img className="icon" src={path + "/facebook.svg"}/><br/>
        Wishlist
      </a>
    </div>
    <div className="col s2point4">
      <a target="_blank" href="https://www.facebook.com/jcfleurbouquet93">
        <img className="icon" src={path + "/facebook.svg"}/><br/>
        Inbox
      </a>
    </div>
    <div className="col s2point4">
      <a target="_blank" href="https://www.facebook.com/jcfleurbouquet93">
        <img className="icon" src={path + "/facebook.svg"}/><br/>
        Account
      </a>
    </div>
  </footer>
);
export default BottomNav;