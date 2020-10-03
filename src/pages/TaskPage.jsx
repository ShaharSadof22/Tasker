import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadTasks, updateTask, addTask, removeTask } from '../store/actions/taskActions';
import { TaskPreview } from '../cmps/TaskPreview';
import { AddTask } from '../cmps/AddTask';
import { taskService } from '../services/taskService';


class _TaskPage extends Component {

  componentDidMount() {
    this.props.loadTasks();
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


  render() {
    const tasks = this.props.tasks
    return (
      <div className="task-page">
        <h2 className="task-header">Tasks</h2>
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
};

export const TaskPage = connect(mapStateToProps, mapDispatchToProps)(_TaskPage);
