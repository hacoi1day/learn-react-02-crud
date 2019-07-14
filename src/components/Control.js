import React, { Component } from 'react'
import Search from './Search';
import Sort from './Sort';

export default class Control extends Component {
    render() {
        return (
            <div className="row my-3">
                <div className="col-6">
                    <Search onSearch={(keyWord) => this.props.onSearch(keyWord)}/>
                </div>
                <div className="col-6">
                    <Sort onSort={(sortBy, sortValue) => this.props.onSort(sortBy, sortValue)}/>
                </div>
            </div>
        )
    }
}
