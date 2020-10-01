import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadTasks, updateTask } from '../store/actions/taskActions';
import { TaskPreview } from '../cmps/TaskPreview';

class _TaskPage extends Component {

  componentDidMount() {
    this.props.loadTasks();
  }
  updateTask = (task) => {
    console.log("updateTasks", task)
    this.props.updateTask(task);
  }


  render() {
    const tasks = this.props.tasks
    return (
      <div className="task-page">
        <h2 className="task-header">Tasks</h2>
        {tasks.map(task => <TaskPreview task={task} key={task._id} updateTask={this.updateTask}/>)}
        
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
  updateTask
};

export const TaskPage = connect(mapStateToProps, mapDispatchToProps)(_TaskPage);
