import React, { Component } from 'react';
import './../css/AddTask.css';

export default class AddTask extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            status: 'false',
        }
    }

    componentWillMount() {
        if(this.props.task) {
            this.setState({
                id: this.props.task.id,
                name: this.props.task.name,
                status: this.props.task.status
            });
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps && nextProps.task) {
            this.setState({
                id: nextProps.task.id,
                name: nextProps.task.name,
                status: nextProps.task.status
            });
        } else if(!nextProps.task) {
            this.setState({
                id: '',
                name: '',
                status: 'false',
            });
        }
    }

    onCloseForm = () => {
        this.props.onCloseForm();
    }

    onChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        if(name === 'status') {
            value = target.value === 'true';
        }
        this.setState({
            [name]: value
        });
    }
    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.onClear();
        this.onCloseForm();
    }

    onClear = () => {
        this.setState({
            name: '',
            status: 'false',
        })
    }

    render() {
        let {id} = this.state;
        return (
            <div>
                <div className="card">
                    <div className="card-header">
                        { id !== '' ? "Cập nhật công việc" : "Thêm công việc" }
                        <span className="float-right button-close" onClick={() => this.onCloseForm()}>
                            <i className="fas fa-times-circle"></i>
                        </span>
                    </div>
                    <div className="card-body">
                    <form onSubmit={(event) => this.onSubmit(event)}>
                        <div className="form-group">
                            <label htmlFor="name">Tên công việc</label>
                            <input type="text" className="form-control" 
                                id="name" name="name"
                                onChange={(event) => this.onChange(event)}
                                value={this.state.name}
                                placeholder="tên công việc" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="status">Trạng thái</label>
                            <select className="form-control" 
                                id="status" name="status" 
                                onChange={(event) => this.onChange(event)}
                                value={this.state.status}>
                                <option value="true">Kích hoạt</option>
                                <option value="false">Ẩn</option>
                            </select>
                        </div>
                        <div className="form-group text-center">
                            <div className="btn-group">
                                <button type="submit" className="btn btn-success">
                                    <span>
                                        <i className="fas fa-plus"></i>
                                    </span>
                                    Lưu lại
                                </button>
                                <button type="button" className="btn btn-warning"
                                    onClick={() => this.onClear()}
                                >
                                    <span>
                                    <i className="fas fa-times-circle"></i>
                                    </span>
                                    Hủy bỏ
                                </button>
                            </div>
                        </div>
                    </form>

                    </div>
                </div>
            </div>
        )
    }
}
