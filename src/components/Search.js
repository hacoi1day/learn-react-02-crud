import React, { Component } from 'react';

export default class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            keyWord: '',
        }
    }
    
    onChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.setState({
            [name]: value
        });
    }

    onSearch = () => {
        this.props.onSearch(this.state.keyWord);
    }

    render() {
        let {keyWord} = this.state;
        return (
            <div>
                <div className="input-group">
                    <input 
                        defaultValue={keyWord}
                        onChange={(event) => this.onChange(event)}
                        name="keyWord"
                        type="text" className="form-control" placeholder="Nhập từ khóa" />
                    <div className="input-group-append">
                        <button 
                            onClick={() => this.onSearch()}
                            className="btn btn-primary" type="button" id="">Tìm</button>
                    </div>
                </div>
            </div>
        );
    }
}
