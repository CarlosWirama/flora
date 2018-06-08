'use strict';

import React from "react";
import { Link } from "react-router-dom";
import { observable, action, computed } from "mobx";
import { observer } from "mobx-react";
import BottomNav from '../../components/pageFrame/BottomNav';
import ProductCard from '../../components/ProductCard';
import SearchModal, { SearchModalTrigger } from '../../modules/product/searchModal';
import { getProducts } from '../../modules/product/productController';
import SearchHeader from "../../modules/product/SearchHeader";
import { CSSTransition } from 'react-transition-group';

// const path = '/webclient/src/pages/Home';

function scrollTo(id , event) {
  event.preventDefault();
  document.querySelector(id).scrollIntoView({ 
    block: "start",
    behavior: 'smooth',
  });
}

@observer
export default class Home extends React.Component {

  @observable products = [];
  @observable isLoading = false
  @observable showHeader = false

  @action
  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
    this.isLoading = true;
    getProducts()
      .then( r => this.products = r )
      .catch( e => alert(e) )
      .finally( () => this.isLoading = false );
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  @action
  onScroll = event => {
    let {scrollTop} = event.srcElement.body;
    this.showHeader = scrollTop > window.innerHeight;
  }

  rushService = () => alert('not yet implemented: LINE Chat')
  // getInitialState = () => {
  //     console.log(this.products)
  //     this.isLoading = true;
  //     getProducts()
  //     .then( r => this.products = r )
  //     .catch( e => alert(e) )
  //     .finally( () => this.isLoading = false );
  
  // }

  render() {
    return (
      <main>
        <CSSTransition
          in={this.showHeader}
          timeout={250}
          classNames='search-modal'
          unmountOnExit
        >
          <SearchHeader />
        </CSSTransition>
        {/*<!--  MAIN BANNER -->*/}
        <div className="welcome-banner">
          <img className=""/>
          <div className="shader" />
            <div id="sementara" className="container">
            <h4 style={{position:'absolute', color:'white', top: 300, width:'50vw'}}>
              Make her<br/>special day<br/>beautiful
            </h4><br/>
            {/*
            <h5>insta-story sized banner</h5><br/>
            <p>possible button:</p>
            <button className="btn scroll-btn waves-effect waves-light" style={{padding: "0 1.8rem"}}
              onClick={this.rushService}
            >
              <i className="material-icons left">favorite_border</i>
              <b>Rush</b> Service
            </button>
            <button className="btn scroll-btn waves-effect waves-light" style={{padding: "0 1.8rem"}}
              onClick={ e =>scrollTo('#category', e) }
            >
              <i className="material-icons left">favorite_border</i>
              <span className='truncate'><b>I know</b> what I'm looking for</span>
            </button>
            <button className="btn scroll-btn waves-effect waves-light" style={{padding: "0 1.8rem"}}
              onClick={ e =>scrollTo('#recommended', e) }
            >
              <i className="material-icons left">favorite_border</i>
              I don't. <b>Recommend</b> Me
            </button>
            <Link to="/product/add" className="btn red waves-effect waves-light" style={{padding: "0 1.8rem"}}>
              <i className="material-icons left">favorite_border</i>
              Add <b>Product</b>
            </Link>
          */}

            <h6>
              No discount? Yup! We don't mark up our prices nor fool our
              customers with fake discount. They're just too... precious!
            </h6>
          </div>
        </div>

        <div id="recommended" className="row container">

          <div className="col s12 section">
            <h5>Recommended Buké</h5>
            <hr/>
          </div>
          
          { this.isLoading ? <h6 className="center-align">Loading...</h6> :
            this.products.map( (product, i) =>
            <div className="col s12" key={i}>
              <ProductCard name={product.name} img={product.img} url={product.url}
                price={product.price} description={product.description} />
            </div>
          ) }


          <div className="col s12 section">
            <h5>Graduation</h5>
            <hr/>
          </div>
          { this.isLoading ? <h6 className="center-align">Loading...</h6> :
            this.products.map( (product, i) =>
            <div className="col s6" key={i}>
              <ProductCard name={product.name} img={product.img} url={product.url}
                price={product.price} description={product.description} />
            </div>
          ) }

          {/*<a href="#!" className="right">show more...</a>*/}

        </div>

        <div id="category" className="row container">

          <div className='home-category col s6'>
            <img className='img img-romantic' />
            <span>romantic</span>
          </div>
          <div className='home-category col s6'>
            <img className='img img-graduation' />
            <span>graduation</span>
          </div>
          <div className='home-category col s6'>
            <img className='img img-wedding' />
            <span>wedding</span>
          </div>
          <div className='home-category col s6'>
            <img className='img img-decor' />
            <span>decoration</span>
          </div>
          <div className='home-category col s6'>
            <img className='img img-any-occasion' />
            <span>any occasion</span>
          </div>
          <div className='home-category col s6'>
            <img className='img img-budget' />
            <span>budget</span>
          </div>


        </div>
        <div className='back-to-top' onClick={ e =>scrollTo('#sementara', e) }>
          back to top
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

      </main>
    );
  }
}

// export default Home;