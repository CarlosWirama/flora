'use strict';

import React from "react";
import { Link } from "react-router-dom";

const path = '/webclient/src/components/PageFrame';
const BottomNav = () => (
  <div>
    <div className="bottom-nav-page-spare"></div>
    <footer className="bottom-nav row center container" style={{backgroundColor:'white'}}>
      <div className="col s2point4">
        <a target="_blank" href="https://www.facebook.com/jcfleurbouquet93">
          <i className="material-icons icon">search</i><br/>
          Explore
        </a>
      </div>
      <div className="col s2point4">
        <a target="_blank" href="https://www.facebook.com/jcfleurbouquet93">
          <i className="material-icons icon">book</i><br/>
          Booking
        </a>
      </div>
      <div className="col s2point4">
        <a target="_blank" href="https://www.facebook.com/jcfleurbouquet93">
          <i className="material-icons icon">favorite</i><br/>
          Wishlist
        </a>
      </div>
      <div className="col s2point4">
        <a target="_blank" href="https://www.facebook.com/jcfleurbouquet93">
          <i className="material-icons icon">chat_bubble</i><br/>
          Inbox
        </a>
      </div>
      <div className="col s2point4">
        <a target="_blank" href="https://www.facebook.com/jcfleurbouquet93">
          <i className="material-icons icon">person</i><br/>
          Account
        </a>
      </div>
    </footer>
  </div>
);
export default BottomNav;