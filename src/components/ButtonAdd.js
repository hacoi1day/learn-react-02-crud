import React, { Component } from 'react'

export default class ButtonAdd extends Component {

    onToggleForm = () => {
        this.props.onToggleForm();
    }

    render() {
        return (
            <div>
                <button type="button" 
                    className="btn btn-primary"
                    onClick={() => this.onToggleForm()}
                >
                    <span>
                        <i className="fas fa-plus"></i>
                    </span>
                    Thêm công việc
                </button>
            </div>
        )
    }
}
