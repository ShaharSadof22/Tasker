import React, { Component } from 'react'

export class AddTask extends Component {
    state = {
        text: ''
    }
    handleChange = (ev) =>{
        const text = ev.target.value
        this.setState({text})
    }
    onAddTask = () => {
        this.props.addTask(this.state.text)
    }
    render() {
        return (
            <div className="flex add-task-container">
            <button className="add-task-btn" onClick={this.onAddTask}>Add Task</button>
            <input type="text" className="add-task-input" onChange={this.handleChange} />
        </div>
        )
    }
}