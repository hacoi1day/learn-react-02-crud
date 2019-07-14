import React, { Component } from 'react'

export default class Sort extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sort: {
                by: '',
                value: 1,
            }
        }
    }
    

    onClick = (sortBy, sortValue) => {
        this.setState({
            sort: {
                by: sortBy,
                value: sortValue
            }
        });
        this.props.onSort(sortBy, sortValue);
    }
    // <i class="fas fa-check"></i>
    render() {
        let {sort} = this.state;
        return (
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="sort" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Sắp xếp
                </button>
                <div className="dropdown-menu" aria-labelledby="sort">
                    <button
                        onClick={() => this.onClick('name', 1)}
                        className="dropdown-item" type="button">
                        Tên A-Z { (sort.by === 'name' && sort.value === 1 ) ? <i className="fas fa-check"></i> : '' }
                    </button>
                    <button 
                        onClick={() => this.onClick('name', -1)}
                        className="dropdown-item" type="button">
                        Tên Z-A { (sort.by === 'name' && sort.value === -1 ) ? <i className="fas fa-check"></i> : '' }
                    </button>
                    <button 
                        onClick={() => this.onClick('status', 1)}
                        className="dropdown-item" type="button">
                        Trạng thái Kích hoạt { (sort.by === 'status' && sort.value === 1 ) ? <i className="fas fa-check"></i> : '' }
                    </button>
                    <button 
                        onClick={() => this.onClick('status', -1)}
                        className="dropdown-item" type="button">
                        Trạng thái Ẩn { (sort.by === 'status' && sort.value === -1 ) ? <i className="fas fa-check"></i> : '' }
                    </button>
                </div>
            </div>

        )
    }
}
