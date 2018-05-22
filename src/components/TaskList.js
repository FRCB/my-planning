import React, { Component } from 'react';
import axios from 'axios';
import './TaskList.css'
import UpdateList from './UpdateList.js'

export default class AddTask extends Component {
    constructor() {
        super()

        this.state = {
            tasks: [],
            taskInput: '',
            newTask: '',
        }

        this.addTask = this.addTask.bind(this);
        this.removeTask = this.removeTask.bind(this)
        this.setEdit = this.setEdit.bind(this)
        this.handleNewEdit = this.handleNewEdit.bind(this)
    }

    componentDidMount() {
        axios.get(`/api/addTask/`, { text: this.state.taskInput, date: this.props.day }).then(res => {
            this.setState({ tasks: res.data })
        });
    };

    addTask() {
        axios.post(`/api/addTask/`, { text: this.state.taskInput, date: this.props.day }).then(res => {
            this.setState({ tasks: res.data, taskInput: '' })
        });
    };

    setEdit(id) {
        axios.put(`/api/editTask/${id}`, { text: this.state.newTask, date: this.props.day }).then(res => {
            this.setState({ newTask: '', tasks: res.data });
        });
    }

    handleNewEdit(e) {
        this.setState({ newTask: e.target.value })
    }

    removeTask(id) {
        axios.delete(`/api/removeTask/${id}`).then(res => {
            this.setState({ tasks: res.data })
        });
    }

    render() {
        let list = this.state.tasks.filter((element, id) => {
            return element.date === this.props.day
        }).map((element, id) => {
            return (
                < UpdateList
                    key={id + element.text}
                    editClick={this.editClick}
                    removeTask={this.removeTask}
                    setEdit={this.setEdit}
                    text={element.text}
                    id={element.id}
                    newTask={this.handleNewEdit}
                />
            )
        })

        return (
            <div>
                <div id='add-box' >
                    <input
                        className='taskInput'
                        value={this.state.taskInput}
                        placeholder="Enter new task"
                        onChange={e => this.setState({ taskInput: e.target.value })}
                    />
                    <button
                        className='taskInputButton'
                        onClick={() => this.addTask()}>
                        +
                </button>
                </div>
                <div>
                    {list}
                </div>
            </div >
        );
    }
}