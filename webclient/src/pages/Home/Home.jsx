'use strict';

import React from "react";
import { Link } from "react-router-dom";

import PageFooter from '../../components/pageFrame/PageFooter';

const path = '/webclient/src/pages/Home';
const Home = () => (
  <div>
    {/*<!--  MAIN BANNER -->*/}
    <div className="row">
      <img src={path + '/tes_banner.jpg'} className="responsive-img" />
    </div>

    {/*<!-- PROMO -->*/}
    <div className="row container">
      <img src={path + "/tes_promo.jpg"} className="responsive-img" />
    </div>

    <div className="row container">
      <div className="col s12">
        Featured
      </div>
      
      <div className="card col s12">
        <Link to="/product">
          <img src={path + "/../Product/krisan.jpg"} />
        </Link>
        <div className="section">
          <a className="icon btn-love"><i className="material-icons">favorite_border</i></a>
          <a className="icon btn-share"><i className="material-icons">share</i></a>
          <Link to="/product" className="right waves-effect waves-light btn brown"><i className="material-icons left">send</i>pick</Link>
        </div>
        <div className="divider"></div>
        <h5>Chrysanthemum</h5>
        <span>IDR 440.000</span>
      </div>
      
      <div className="product-card card col s12">
        <a href="#!">
          <img src={path + "/../Product/tulip.jpg"} />
        </a>
        <div className="section">
          <a href="#!" className=""><i className="material-icons">favorite_border</i></a>
          <a href="#!" className=""><i className="material-icons">favorite_border</i></a>
        </div>
        <div className="divider"></div>
        <h5>I Love You This Much</h5>
        <span>IDR 440.000</span>
      </div>
      
      <div className="col s12 product-card">
        <img src={path + "/tes_promo.jpg"} className="responsive-img" />
      </div>
    </div>

    {/*<!-- Popped-up filter -->*/}
    {/*<!-- <div className="row container">
      <form className="card col s12 grey lighten-2">
        <div className="card-content">
          <div className="input-field">
            <input id="date" type="date" className="datepicker" placeholder="not yet decided">
            <label for="date">Delivery Date</label>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <i className="material-icons prefix">cake</i>
              <select id="ocassion" multiple>
                <option value="" disabled selected>any</option>
                <option value="1">birthday</option>
                <option value="2">graduation</option>
                <option value="3">wedding</option>
                <option value="4">funeral</option>
              </select>
              <label>Occasion</label>
            </div>
            <div className="input-field col s6">
              <select id="flower" multiple>
                <option value="" disabled selected>any</option>
                <option value="1">rose</option>
                <option value="2">lily</option>
                <option value="3">tulip</option>
                <option value="9">other</option>
              </select>
              <label>Flower</label>
            </div>
          </div>
          <div className="range-field">
            <label for="budget">Preferred Budget</label>
            <div id="budget"></div>
          </div>
        </div>
        <div className="row">
          <input type="submit" className="col s10 offset-s1 btn" value="browse">
        </div>
      </form>
    </div> -->

    <!-- untuk design tabbed section -->
      <!-- 
    <div className="container">
      <ul className="tabs">
        <li className="tab"><a href="#regular">Regular Hand Bouquet</a></li>
        <li className="tab"><a href="#wedding">Wedding Bouquet</a></li>
        <li className="tab"><a href="#bloombox">Bloombox</a></li>
        <li className="tab"><a href="#table">Table Arrangement</a></li>
        <li className="tab"><a href="#funeral">Funeral</a></li>
      </ul>
    </div>
    <div className="row container">
        <a className="dropdown-button col s6 btn white gold-text" href="#" data-activates="dropdown-filter">
            FILTER
            <i className="material-icons right">filter_list</i>
        </a>
        <a className="dropdown-button col s6 btn white gold-text" href="#!" data-activates="dropdown-filter">
            SORT
            <i className="material-icons right">sort</i>
        </a>
    </div>
    <div id="regular">
      regular
    </div>
    <div id="wedding">
      wedding
    </div>
     -->*/}

    {/*<!-- Shortcuts -->*/}
    <div className="row container center" style={{fontSize: ".8rem"}}>
      <a className="col s4 offset-s1 shortcuts card"><i className="small material-icons">query_builder</i><br/>24 hour delivery</a>
      <a className="col s4 offset-s2 shortcuts card"><i className="small material-icons">attach_money</i><br/>Set prefered budget</a>
      <a className="col s4 offset-s1 shortcuts card"><i className="small material-icons">cake</i><br/>Occasion</a>
      <a className="col s4 offset-s2 shortcuts card" href="#!/shop"><i className="small material-icons">search</i><br/>All product</a>
    </div>
    {/*<!-- 
    <div className="row container center" style="font-size: .8rem">
      <a className="col s6 shortcuts card" href="#!"><i className="small material-icons">query_builder</i><br>< 24 hour delivery</a>
      <a className="col s6 shortcuts card" href="#!"><i className="small material-icons">attach_money</i><br>Set prefered budget</a>
      <a className="col s6 shortcuts card" href="#!"><i className="small material-icons">cake</i><br>Occasion</a>
      <a className="col s6 shortcuts card" href="#!"><i className="small material-icons">search</i><br>All product</a>
    </div>
     -->

    <!-- Continuous Catalog -->
    <!-- 
    <div className="center">
      <p>Loading more ...</p>
    </div> -->
    <!-- <div className="row container">
      <a className="col s12 center btn waves-effect waves-light">Load More Products...</a>
    </div> -->

    <!-- Testimoni -->
    <!-- 
    <div className="section container center">
      <p>testimoni lorem ipsum dolor sit amet lorem ipsum dolor sit amet</p>
      - namaorang
    </div>-->*/}

    <PageFooter/>
  </div>
);

export default Home;