import { taskService } from "../../services/taskService";
// import socketService from "../../services/socketService";

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
export function updateTask(task) {
  return async (dispatch) => {
    dispatch({ type: "UPDATE_TASK", task });
    try {
      await taskService.update(task);
      // socketService.emit("update board", board);
    } catch (err) {
      console.log(`ERROR: while update task`);
    }
  };
}


// export function removeBoard(id) {
//   return async (dispatch) => {
//     try {
//       await taskService.removeBoard(id);
//       dispatch({ type: "REMOVE_BOARD", id });
//     } catch (err) {
//       console.log(`ERROR: while remove board`);
//     }
//   };
// }
// export function addBoard(txt, imgUrl) {
//   return async (dispatch) => {
//     try {
//       const board = await taskService.create(txt, imgUrl);
//       dispatch({ type: "ADD_BOARD", board });
//     } catch (err) {
//       console.log(`ERROR: while adding board`);
//     }
//   };
// }
// export function updateBoardFromSocket(board) {
//   //Someone else updated the board
//   return (dispatch) => {
//     dispatch({ type: "UPDATE_BOARD", board });
//   };
// }
