import React, { Component } from 'react';
import './../css/TaskItem.css';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class TaskItem extends Component {

    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.task.id);
    }

    onDelete = () => {
        this.props.ondeleteTask(this.props.task.id);
        this.props.onCloseForm();
    }

    onEditTask = () => {
        this.props.onOpenForm();
        this.props.onEditTask(this.props.task);
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
                            onClick={() => this.onEditTask()}
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

const mapStateToProps = (state, ownProps) => {
    return {
        
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onUpdateStatus: (id) => {
            dispatch(actions.updateStatus(id));
        },
        ondeleteTask: (id) => {
            dispatch(actions.deleteTask(id));
        },
        onCloseForm: () => {
            dispatch(actions.closeForm());
        },
        onOpenForm: () => {
            dispatch(actions.openForm());
        },
        onToggleForm: () => {
            dispatch(actions.toggleForm());
        },
        onEditTask: (task) => {
            dispatch(actions.editTask(task));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);