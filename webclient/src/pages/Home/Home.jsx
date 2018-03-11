'use strict';

import React from "react";
import { Link } from "react-router-dom";

import BottomNav from '../../components/pageFrame/BottomNav';

const path = '/webclient/src/pages/Home';
const Home = () => (
  <div className="page-container">
    {/*<!--  MAIN BANNER -->*/}
    <div className="welcome-banner">
      {/*<img src={path + '/welcomeBanner.jpg'} className="responsive-img"/>*/}
      <h3>Welcome or Promo Banner</h3><br/>
      <h5>insta-story sized banner with buttons:</h5>
      <button className="btn waves-effect waves-light" style={{padding: "0 1.8rem"}}>
        <i className="material-icons left">favorite_border</i>
        <b>Express</b> Booking
      </button>
      <a href="#category" className="btn waves-effect waves-light" style={{padding: "0 1.8rem"}}>
        <i className="material-icons left">favorite_border</i>
        <b>I know</b> what I'm looking for
      </a>
      <a href="#recommended-title" className="btn waves-effect waves-light" style={{padding: "0 1.8rem"}}>
        <i className="material-icons left">favorite_border</i>
        I don't. <b>Recommend</b> Me
      </a>
    </div>

    {/*<div className="row">
      <img src={path + '/tes_banner.jpg'} className="responsive-img" />
    </div>
    <div className="row container">
      <img src={path + "/tes_promo.jpg"} className="responsive-img" />
    </div>*/}

    <div className="row container">

      <div id="recommended-title" className="col s12">
        <h5>Recommended Buké</h5>
        <hr/>
      </div>
      
      <div className="col s12 m6 l4">
        <div className="card">
          <a>
            <img src={path + "/../Product/krisan.jpg"} />
          </a>
          <div>
            <a href="#!" className="icon btn-love"><i className="material-icons">favorite_border</i></a>
            <a href="#!" className="icon btn-share"><i className="material-icons">share</i></a>
            <a href="#!" className="icon"><i className="material-icons right">bookmark</i></a>
          </div>
          <div className="divider"></div>
          <div className='left'>
            <h5 className="truncate" style={{overflow:'hidden'}}>Chrysanthemum</h5>
            <span>IDR 440.000</span>
          </div>
          <Link to="/product" className="right waves-effect waves-light btn brown z-depth-2" style={{marginTop:15}}>
            <i className="material-icons left">send</i>
            BOOK
          </Link>
          <h6 className="card-desc">
            A bouquet of Mixed Roses, Pink Carnations, Yellow Poms, and fillers
          </h6>
        </div>
      </div>

      <div className="col s12 m6 l4">
        <div className="card">
          <a>
            <img src={path + "/../Product/tulip.jpg"} />
          </a>
          <div>
            <a href="#!" className="icon btn-love"><i className="material-icons">favorite_border</i></a>
            <a href="#!" className="icon btn-share"><i className="material-icons">share</i></a>
            <a href="#!" className="icon"><i className="material-icons right">bookmark</i></a>
          </div>
          <div className="divider"></div>
          
            <h5 className='left'>I Love You This Much</h5>
            <h5 className='right'>IDR 440.000</h5>
          

          <h6 className="card-desc">
            A bouquet of Mixed Roses, Pink Carnations, Yellow Poms, and fillers
          </h6>

          <Link to="/product" className=" waves-effect waves-light btn brown z-depth-3" style={{marginTop:5, width:'100%', padding: '0 80'}}>
            <i className="material-icons left">send</i>
            BOOK
          </Link>
        </div>
      </div>
      
      <div className="col s12 m6 l4">
        <div className="card">
          <a>
            <img src={path + "/../Product/tulip.jpg"} />
          </a>
          <div>
            <a href="#!" className="icon btn-love"><i className="material-icons">favorite_border</i></a>
            <a href="#!" className="icon btn-share"><i className="material-icons">share</i></a>
            <a href="#!" className="icon"><i className="material-icons right">bookmark</i></a>
          </div>
          <div className="divider"></div>
          
            <h5 className='left'>I Love You This Much</h5>
            <h5 className='right'>IDR 440.000</h5>
          

          <h6 className="card-desc">
            A bouquet of Mixed Roses, Pink Carnations, Yellow Poms, and fillers
          </h6>

          <Link to="/product" className=" waves-effect waves-light btn brown z-depth-3" style={{marginTop:5, width:'100%', padding: '0 80'}}>
            <i className="material-icons left">send</i>
            BOOK
          </Link>
        </div>
      </div>
      
      <a href="#!" className="right">show more...</a>

      {/*<div className="col s12" style={{marginTop:30}}>
        <img src={path + "/tes_promo.jpg"} className="responsive-img" />
      </div>*/}
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
    <div id="category" className="row container center" style={{fontSize: ".8rem"}}>
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

    <BottomNav/>
  </div>
);

export default Home;