import React, { Component } from 'react';
import { connect } from 'react-redux';

import socketService from '../services/socketService';
import { loadTasks, updateTask, addTask, removeTask, updateTaskFromSocket, removeAllSuccess } from '../store/actions/taskActions';
import { TaskPreview } from '../cmps/TaskPreview';
import { AddTask } from '../cmps/AddTask';
import { taskService } from '../services/taskService';


class _TaskPage extends Component {

  componentDidMount() {
    this.props.loadTasks();
    socketService.setup();
    socketService.on('send updated task', this.props.updateTaskFromSocket);
  }
  updateTask = (task) => {
    this.props.updateTask(task);
  }
  addTask = (title) => {
    this.props.addTask(title)
  }
  removeTask = (taskId) => {
    this.props.removeTask(taskId)
  }
  startTask = async (task) => {
    const newTask = await taskService.startTask(task)
    this.props.updateTask(newTask)
  }
  removeAllSuccess = () => {
    this.props.removeAllSuccess()
  }


  render() {
    const tasks = this.props.tasks
    return (
      <div className="task-page">
        <div>
          <h2 className="task-header">Tasks</h2>
          <button className="remove-done-btn" onClick={this.removeAllSuccess}>Remove All Done</button>
        </div>
        {tasks.map(task => <TaskPreview task={task} key={task._id} updateTask={this.updateTask} removeTask={this.removeTask} startTask={this.startTask} />)}
        <AddTask addTask={this.addTask} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.taskReducer.tasks,
  };
};
const mapDispatchToProps = {
  loadTasks,
  updateTask,
  addTask,
  removeTask,
  updateTaskFromSocket,
  removeAllSuccess
};

export const TaskPage = connect(mapStateToProps, mapDispatchToProps)(_TaskPage);
