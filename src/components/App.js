import React, { Component } from 'react';
import AddTask from './AddTask';
import ButtonAdd from './ButtonAdd';
import ListTask from './ListTask';
import Control from './Control';
import { connect } from 'react-redux';
import * as actions from './../actions/index';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            taskEditing: null,
            filter: {
                name: '',
                status: -1
            },
            keyWord: '',
            sort: {
                by: '',
                value: 1
            }
        };
    }
    
    

    // thêm task
    onToggleForm = () => {
        // if(this.state.isDisplay && this.state.taskEditing !== null) {
        //     this.setState({
        //         isDisplay: true,
        //         taskEditing: null,
        //     });
        // } else {
        //     this.setState({
        //         isDisplay: !this.state.isDisplay,
        //         taskEditing: null,
        //     });
        // }
        this.props.onToggleForm();
    }
    
    // onCloseForm = () => {
    //     // this.setState({
    //     //     isDisplay: false
    //     // });
    //     this.props.onCloseForm();
    // }

    onShowForm = () => {
        this.setState({
            isDisplay: true
        });
    }

    findIndex = (id) => {
        let {tasks} = this.state;
        let result = -1;
        tasks.forEach((task, index) => {
            if(task.id === id) {
                result = index;
            }
        });
        return result;
    }

    onDelete = (id) => {
        let {tasks} = this.state;
        let index = this.findIndex(id);
        if(index !== -1) {
            tasks.splice(index, 1);
            this.setState({
                tasks: tasks,
            });
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
        this.onCloseForm();
    }

    onUpdate = (id) => {
        let {tasks} = this.state;
        let index = this.findIndex(id);
        let taskEditing = tasks[index];
        this.setState({
            taskEditing: taskEditing
        });
        this.onShowForm();
    }

    onFilter = (filterName, filterStatus) => {
        filterStatus = parseInt(filterStatus);
        this.setState({
            filter: {
                name: filterName.toLowerCase(),
                status: filterStatus
            }
        });
    }

    onSearch = (keyWord) => {
        this.setState({
            keyWord: keyWord
        });
    }

    onSort = (sortBy, sortValue) => {
        this.setState({
            sort: {
                by: sortBy,
                value: sortValue
            }
        });
    }

    render() {
        let {isDisplay} = this.props;
        let { taskEditing, filter, keyWord, sort } = this.state; // let tasks = this.state.tasks
        
        
        if(filter) {
            if(filter.name) {
                // tasks = tasks.filter((task) => {
                //     return task.name.toLowerCase().indexOf(filter.name) !== -1;
                // });
                // tasks = _.filter(tasks, (task) => {
                //     return task.name.toLowerCase().indexOf(filter.name) !== -1;
                // })
            }
            // tasks = tasks.filter((task) => {
            //     if(filter.status === -1) {
            //         return task;
            //     } else {
            //         return task.status === (filter.status === 1 ? true : false);
            //     }
            // });
            // tasks = _.filter(tasks, (task) => {
            //     if(filter.status === -1) {
            //         return task;
            //     } else {
            //         return task.status === (filter.status === 1 ? true : false);
            //     }
            // });
        }


        // if(keyWord) {
        //     // tasks = tasks.filter((task) => {
        //     //     return task.name.toLowerCase().indexOf(keyWord.toLowerCase()) !== -1;
        //     // });
        //     tasks = _.filter(tasks, (task) => {
        //         return task.name.toLowerCase().indexOf(keyWord.toLowerCase()) !== -1;
        //     });
        // }


        // if(sort.by === 'name') {
        //     tasks.sort((a, b) => {
        //         if(a.name > b.name) {
        //             return sort.value;
        //         } else if(a.name < b.name) {
        //             return -sort.value;
        //         } else {
        //             return 0;
        //         }
        //     });
        // } else if(sort.by === 'status') {
        //     tasks.sort((a, b) => {
        //         if(a.name > b.name) {
        //             return -sort.value;
        //         } else if(a.name < b.name) {
        //             return sort.value;
        //         } else {
        //             return 0;
        //         }
        //     });
        // }
        
        // let elemtTaskForm = isDisplay ? <AddTask task={taskEditing}/> : '';
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>Quản lý công việc</h1>
                    </div>
                </div>
                <div className="row">
                    <div className={ isDisplay ? 'col-4' : '' }>
                        {/* {elemtTaskForm} */}
                        <AddTask/>
                    </div>
                    <div className={ isDisplay ? 'col-8' : 'col-12' }>
                        <div className="row">
                            <div className="col-12">
                                <ButtonAdd 
                                    onToggleForm={() => this.onToggleForm()}
                                />
                            </div>
                        </div>
                        <Control 
                            onSort={(sortBy, sortValue) => this.onSort(sortBy, sortValue)}
                            onSearch={(keyWord) => this.onSearch(keyWord)}/>
                        <div className="row my-3">
                            <div className="col-12">
                                <ListTask 
                                    onUpdate={(id) => this.onUpdate(id)}
                                    onFilter={(filterName, filterStatus) => this.onFilter(filterName, filterStatus)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isDisplay: state.isDisplayForm
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onToggleForm: () => {
            dispatch(actions.toggleForm());
        },
        onCloseForm: () => {
            dispatch(actions.closeForm());
        },
        onOpenForm: () => {
            dispatch(actions.openForm());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);