import { taskService } from "../../services/taskService";
import socketService from "../../services/socketService";

export function loadTasks() {
  return async (dispatch) => {
    try {

      const tasks = await taskService.query();
      dispatch({ type: "SET_TASKS", tasks });
    } catch (err) {
      console.log(`ERROR: while loading tasks`);
    }
  };
}
export function addTask(title) {
  return async (dispatch) => {
    try {
      const task = await taskService.create(title);
      dispatch({ type: "ADD_TASK", task });
    } catch (err) {
      console.log(`ERROR: while adding task`);
    }
  };
}
export function removeTask(taskId) {
  return async (dispatch) => {
    try {
      await taskService.remove(taskId);
      dispatch({ type: "REMOVE_TASK", taskId });
    } catch (err) {
      console.log(`ERROR: while remove board`);
    }
  };
}
export function updateTask(task) {
  return async (dispatch) => {
    dispatch({ type: "UPDATE_TASK", task });
    try {
      await taskService.update(task);
      socketService.emit('connect to task', task._id);
      socketService.emit('update task', task);
    } catch (err) {
      console.log(`ERROR: while update task`);
    }
  };
}
export function updateTaskFromSocket(task) {
  //Someone else updated the task
  return (dispatch) => {
    dispatch({ type: "UPDATE_TASK", task });
  };
}
