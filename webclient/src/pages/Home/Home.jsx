'use strict';

import React from "react";
import { Link } from "react-router-dom";
import { CSSTransitionGroup } from 'react-transition-group';

import BottomNav from '../../components/pageFrame/BottomNav';
import ProductCard from '../../components/ProductCard';


const path = '/webclient/src/pages/Home';
const products = [
  { name:'Chrysanthemum', img: path + '/../Product/krisan.jpg', price: '440.000', url:'/product/1', description:'Thrilling and exciting at the same time.' },
  { name:'Fantasia', img: path + '/../Product/tulip.jpg', price: '550.000', url:'/product/1', description:'To set eyes on this charming bouquet is like being stranded in a mysterious islands belongs to mermaids and mystical creatures.' },
  { name:'Just The Way You Are', img: path + '/../Product/krisan.jpg', price: '650.000', url:'/product/1', description:'The captivating pink roses bouquet is suitable for any special occasion.' },
];

const Home = () => (
  <div className="page-container">
    {/*<!--  MAIN BANNER -->*/}
    <div className="welcome-banner">
      {/*<img src={path + '/welcomeBanner.jpg'} className="responsive-img"/> */}
        <div id="sementara" className="container">
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


      {/*SEMENTARA*/}
        <Link to="/product/add" className="btn red waves-effect waves-light" style={{padding: "0 1.8rem"}}>
          <i className="material-icons left">favorite_border</i>
          Add <b>Product</b>
        </Link>


        <h6>
          No discount? Yup! We don't mark up our prices nor fool our
          customers with fake discount. They're just too... precious!
        </h6>
      </div>
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
      
      { products.map( (product, i) =>
        <div className="col s12 m6 l4" key={i}>
          <ProductCard name={product.name} img={product.img} url={product.url}
            price={product.price} description={product.description} />
        </div>
      ) }

      {/*<a href="#!" className="right">show more...</a>*/}

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
    {/*<div id="category" className="row container center" style={{fontSize: ".8rem"}}>
      <a className="col s6 shortcuts card">
        <i className="small material-icons">query_builder</i><br/>24 hour delivery
      </a>
      <a className="col s6 shortcuts card"><i className="small material-icons">attach_money</i><br/>Set prefered budget</a>
      <a className="col s6 shortcuts card"><i className="small material-icons">cake</i><br/>Occasion</a>
      <a className="col s6 shortcuts card" href="#!/shop"><i className="small material-icons">search</i><br/>All product</a>
    </div>*/}
    

    {/*
    <!-- Testimoni -->
    <!-- 
    <div className="section container center">
      <p>testimoni lorem ipsum dolor sit amet lorem ipsum dolor sit amet</p>
      - namaorang
    </div>-->*/}

    {/*<div className="hide-on-large-only">
      <BottomNav />
    </div>*/}

  </div>
);

export default Home;