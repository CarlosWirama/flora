'use strict';

import React from "react";
import { Category, WelcomeBanner, Shader, WelcomeText, BackToTop } from './Home.styled';
import { observable, action } from "mobx";
import { observer } from "mobx-react";
import { CSSTransition } from 'react-transition-group';

import BottomNav from 'components/pageFrame/BottomNav';
import ProductCard from 'components/ProductCard';
import SearchModal, { SearchModalTrigger } from 'modules/product/searchModal';
import { getProducts } from 'modules/product/productController';
import SearchHeader from "modules/product/SearchHeader";

import PageHeader from 'components/pageFrame/PageHeader';

import { HomePageWords } from 'constants/displayTexts';

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
  constructor(props) {
    super(props);
    this.onScroll = this.onScroll.bind(this);
    this.state = {
      headerOpacity: 0,
    };
  }

  @observable products = [];
  @observable isLoading = false
  // @observable showHeader = false

  
  onScroll(event) {
    const { scrollTop } = event.srcElement.body;
    const headerOpacity = (scrollTop * 2 / window.innerHeight) - 1;
    this.setState({headerOpacity});
  }

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
    const categories = [
      'ROMANTIC',
      'GRADUATION',
      'WEDDING',
      'DECORATION',
      'ANY_OCCASION',
      'BUDGET',
    ];
    return (
      <main>
        <PageHeader opacity={this.state.headerOpacity} {...this.props} />
        <Banner/>
        <div className="container">
          {/*<!--  MAIN BANNER -->*/}
          <RecommendedList products={this.products} isLoading={this.isLoading} />
          <Categories items={categories} />
          <BackToTop onClick={ e =>scrollTo('body', e) }>
            {HomePageWords.BACK_TO_TOP}
          </BackToTop>
          {/*<div className="hide-on-large-only">
            <BottomNav />
          </div>*/}
        </div>
      </main>
    );
  }
}

function RecommendedList({products, isLoading}) {
  return (
    <div id="recommended" className="row">
      {/* <div className="col s12 section">
        <h5>Recommended Buké</h5>
        <hr/>
      </div> */}
      { isLoading ? <h6 className="center-align">Loading...</h6> :
        products.map( (product, i) =>
        <div className="col s12" key={i}>
          <ProductCard name={product.name} img={product.img} url={product.url}
            price={product.price} description={product.description} />
        </div>
      ) }
    </div>
  );
}

function Categories({items}) {
  return (
    <div className="row">
      {items.map((item, i) => (
        <Category key={i} className="col s6">
          <img className={item} />
          <span>{HomePageWords[item]}</span>
        </Category>
      ))}
    </div>
  );
}

function Banner() {
  return (
    <WelcomeBanner>
      <img />
      <Shader />
      <div className="container">
        <WelcomeText>
          {HomePageWords.WELCOME}
        </WelcomeText>
        <br/>
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

        {/*<h6>
          No discount? Yup! We don't mark up our prices nor fool our
          customers with fake discount. They're just too... precious!
        </h6>*/}
      </div>
    </WelcomeBanner>
  );
}

const Header = ({showHeader}) =>
  <CSSTransition
    in={showHeader}
    timeout={250}
    classNames='search-modal'
    unmountOnExit
  >
    <SearchHeader />
  </CSSTransition>
