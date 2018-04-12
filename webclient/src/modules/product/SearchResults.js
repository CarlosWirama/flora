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

  componentDidMount() {
    this._displaySearchResults(this.props.location.search);
  }

  componentWillReceiveProps(newProps) {
    this._displaySearchResults(newProps.location.search);
  }

  _parseQueryString = qs => {
    let params = {};
    qs.substr(1)  //// omit '?'
      .split('&')
      .forEach( param => {
        let keyValue = param.split('=');
        return params[keyValue[0]] = keyValue[1];
        // return { [keyValue[0]] : keyValue[1] }
      });
    return params;
  }

  @action
  _displaySearchResults = queryString => {
    let params = this._parseQueryString(queryString);
    let keywords = params.q ? params.q.split('+') : keywords = [];
    this.isLoading = true;
    getProducts(keywords)
      .then( r => this.results = r )
      .catch( e => console.error(e) )
      .finally( () => this.isLoading = false );
  }

  render () {
    return (
      <main className='page-container'>
        <SearchHeader onBackPressed={this.props.history.goBack} />
        <div className="row container">
          <div className="col s12 section">
            <h5>Result for Buké</h5>
            <hr/>
          </div>
          { this.isLoading ? <h6 className="center-align">Loading...</h6> :
            this.results.map( (product, i) =>
            <div className="col s12 m6 l4" key={i}>
              <ProductCard name={product.name} img={product.img} url={product.url}
                price={product.price} description={product.description} />
            </div>
          ) }
        </div>
      </main>
    )
  }
}