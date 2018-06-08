'use strict';
import React from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
import { getProducts } from "./productController";
import SearchHeader from "./SearchHeader";
import ProductCard from '../../components/ProductCard';

@observer
export default class SearchResults extends React.Component {

  @observable results = []
  @observable isLoading = true
  @observable searchString = ''

  componentDidMount() {
    this._search(this.props.location.search);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.location.search !== prevProps.location.search)
      this._search(this.props.location.search);
  }

  _parseQueryString = qs => {
    let params = {};
    qs.substr(1)  //// omit '?'
      .split('&')
      .forEach( param => {
        let key_value = param.split('=');
        params[key_value[0]] = key_value[1];
      });
    return params;
  }

  @action
  _search = queryString => {
    let params = this._parseQueryString(queryString);
    let keywords = params.q ? params.q.split('+') : keywords = [];
    this.searchString = params.q ? keywords.join(' ') : 'all Buké';
    this.isLoading = true;
    getProducts(keywords)
      .then( r => this.results = r )
      .catch( e => console.error(e) )
      .finally( () => this.isLoading = false );
  }

  render () {
    return (
      <main className='page-container'>
        <SearchHeader />
        <div className="row container">
          <div className="col s12 section">
            <h5>Result for {this.searchString}</h5>
            <hr/>
          </div>
    { this.isLoading ? <h6 className="center-align">Loading...</h6> :
            this.results.length ?
            this.results.map( (product, i) =>
              <div className="col s12 m6 l4" key={i}>
                <ProductCard name={product.name} img={product.img} url={product.url}
                  price={product.price} description={product.description} />
              </div>
            )
            :
            <h6 className="center-align">
              We currently don't have the buké you're looking for.<br/>
              Why don't try another one?
            </h6>
    }
        </div>
      </main>
    )
  }
}