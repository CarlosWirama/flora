'use strict';

import React from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
import { withRouter } from "react-router-dom";
import SearchModal from "./searchModal";
import { CSSTransition } from 'react-transition-group';

@observer
export default withRouter (
  class SearchHeader extends React.Component {

  @observable query = ''
  @observable showSearchModal = false

  @action _searchInputChange = e => this.query = e.target.value
  @action _clearQuery = () => { this.query = ''; this.searchInput.focus(); }

  @action _openModal = () => this.showSearchModal = true
  @action _closeModal = () => this.showSearchModal = false
  _onBackPressed = this._closeModal

  @action
  _addQuery = query => {
    let re = new RegExp(`\\b${query}\\b`, "i");
    if (!re.test(this.query)) this.query += ` ${query} `;
    this.searchInput.focus();
  }

  _search = () => {
    let q = this.query.split(/\b/)
                      .filter( item => /\w/.test(item) )
                      .join('+');
    let queryString = q && '?q=' + q;
    this._closeModal();
    this.query = '';
    this.props.history.push('/search' + queryString );
  }

  render () {
    return (
      <div id='search-header'>
        <nav className='navbar-fixed z-depth-1'>
          <div className='nav-wrapper container flex' style={{zIndex:999, }}>
            <a onClick={this._onBackPressed}>
              <i className="material-icons icon-btn">arrow_backs</i>
            </a>
            <div className='flex' style={{flex:1}}>
              <form onSubmit={this._search}>
                <input
                  className='search-input'
                  ref={ e => this.searchInput = e }
                  type='text'
                  value={this.query}
                  onFocus={this._openModal}
                  onChange={this._searchInputChange}
                  placeholder="I'm looking for..."
                />
              </form>
{/* this.query &&
              <div className='waves-effect waves-light center'>
                <i className="material-icons icon-btn" onClick={this._clearQuery}>close</i>
              </div>
*/}
            </div>
{ this.query &&
            <div
              className='waves-effect waves-light'
              style={{display:'inline-block', textAlign: 'end'}}
              onClick={this._clearQuery}
            >
              <i className="material-icons icon-btn">close</i>
            </div>
}
          </div>
        </nav>

        <CSSTransition
          in={this.showSearchModal}
          timeout={250}
          classNames='search-modal'
          unmountOnExit
        >
          <SearchModal onBackPressed={this._toggleSearchModal} addQuery={this._addQuery} search={this._search} />
        </CSSTransition>
          
      </div>
    )
  }
});