import React, { Component } from 'react'
import TaskItem from './TaskItem';
import { connect } from 'react-redux';


class ListTask extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filterName: '',
            filterStatus: -1,
        }
    }
    
    onChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.props.onFilter(
            name === 'filterName' ? value : this.state.filterName,
            name === 'filterStatus' ? value : this.state.filterStatus,
        );
        this.setState({
            [name]: value,
        });
    }

    render() {
        let {tasks} = this.props; // let task = this.props.tasks
        let {filterName} = this.state;
        let elementTasks = tasks.map((task, index) => {
            return(
                <TaskItem 
                    onUpdate={(id) => this.props.onUpdate(id)}
                    key={task.id}
                    index={index}
                    task={task}
                />
            );
        });
        return (
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col">Tên</th>
                            <th scope="col">Trạng thái</th>
                            <th scope="col">Hành động</th>
                        </tr>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">
                                <input 
                                    defaultValue={filterName}
                                    onChange={(event) => this.onChange(event)}
                                    name="filterName"
                                    type="text" className="form-control" id="name"/>
                            </th>
                            <th scope="col">
                                <select 
                                    onChange={(event) => this.onChange(event)}
                                    className="form-control" 
                                    id="status" name="filterStatus">
                                    <option value={-1}>Tất cả</option>
                                    <option value={0}>Ẩn</option>
                                    <option value={1}>Kích hoạt</option>
                                </select>
                            </th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>

                        {elementTasks}
                        
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ListTask)