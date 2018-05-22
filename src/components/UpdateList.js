import React, { Component } from 'react';
import './TaskList.css'

export default class UpdateList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            switch: false
        }
        this.handleEdit = this.handleEdit.bind(this)
    }

    handleEdit() {
        this.setState({ switch: !this.state.switch })
        this.props.setEdit(this.props.id)
    }

    render() {
        console.log(this.state)
        return (
            < div id='task-display' >
                <p
                    className='text-display'>
                    {this.props.text}
                </p>
                <button
                    className='edit-button'
                    onClick={this.handleEdit}>
                    ...
                </button>
                <button
                    className='delete-button'
                    onClick={id => { this.props.removeTask(this.props.id) }} >
                    X
                </button>
                <input
                    className={this.state.switch ? "" : "new-edit"}
                    onChange={this.props.newTask}
                />
            </div>
        );
    }
}

