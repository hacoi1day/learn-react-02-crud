import React, { Component } from 'react';
import './../css/TaskItem.css';

export default class TaskItem extends Component {

    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.task.id);
    }

    onDelete = () => {
        this.props.onDelete(this.props.task.id);
    }

    onUpdate = () => {
        this.props.onUpdate(this.props.task.id);
    }

    render() {
        let { index } = this.props;
        let { task } = this.props;
        return (
            <tr>
                <th scope="row">{index + 1}</th>
                <td>{task.name}</td>
                <td className="text-center">
                    <span
                        onClick={() => this.onUpdateStatus()}
                        className={task.status === true ? 'task-success' : 'task-hidden'}>
                        {task.status === true ? 'Kích hoạt' : 'Ẩn'}
                    </span>
                </td>
                <td>
                    <div className="btn-group">
                        <button 
                            onClick={() => this.onUpdate()}
                            className="btn btn-primary">
                            <span>
                                <i className="fas fa-pen"></i>
                            </span>
                            Sửa
                        </button>
                        <button 
                            onClick={() => this.onDelete()}
                            className="btn btn-danger">
                            <span>
                                <i className="fas fa-trash"></i>
                            </span>
                            Xóa
                        </button>
                    </div>
                </td>
            </tr>
        )
    }
}
