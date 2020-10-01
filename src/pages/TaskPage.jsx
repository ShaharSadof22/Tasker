import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadTasks, updateTask, addTask } from '../store/actions/taskActions';
import { TaskPreview } from '../cmps/TaskPreview';
import { AddTask } from '../cmps/AddTask';

class _TaskPage extends Component {

  componentDidMount() {
    this.props.loadTasks();
  }
  updateTask = (task) => {
    this.props.updateTask(task);
  }
  addTask = (title) => {
    console.log("addTask -> title", title)
    this.props.addTask(title)
  }


  render() {
    const tasks = this.props.tasks
    return (
      <div className="task-page">
        <h2 className="task-header">Tasks</h2>
        {tasks.map(task => <TaskPreview task={task} key={task._id} updateTask={this.updateTask}/>)}
        <AddTask addTask={this.addTask}/>
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
  addTask
};

export const TaskPage = connect(mapStateToProps, mapDispatchToProps)(_TaskPage);
