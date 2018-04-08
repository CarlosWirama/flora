'use strict';

import React from "react";

export default class SearchHeader extends React.Component {

  focusInput = () => this.searchInput.focus()
  _searchInputChange = e => this.props.onChange(e.target.value)
  _clearQuery = () => { this.props.onChange(''); this.focusInput(); }

  render () {
    return (
      <nav className='navbar-fixed z-depth-1'>
        <div className='nav-wrapper container flex'>
          <a onClick={this.props.onBackPressed}>
            <i className="material-icons icon-btn">arrow_backs</i>
          </a>
          <div className='flex' style={{flex:1}}>
            <form onSubmit={this.props.onSearch}>
              <input
                className='search-input'
                ref={ e => this.searchInput = e }
                type='text'
                value={this.props.query}
                onChange={this._searchInputChange}
                placeholder='describe your dream buké...'
              />
            </form>
            { this.props.query &&
              <div className='waves-effect waves-light center'>
                <i className="material-icons icon-btn" onClick={this._clearQuery}>close</i>
              </div>
            }
          </div>
          <div
            className='waves-effect waves-light'
            style={{display:'inline-block', textAlign: 'end'}}
            onClick={this.props.onSearch}
          >
            <i className="material-icons icon-btn" onClick={this.props.onSearch}>search</i>
          </div>
        </div>
      </nav>
    )
  }
}