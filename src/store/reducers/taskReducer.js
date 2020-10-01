
const initialState = {
  tasks: []
};

export function taskReducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'SET_TASKS':
      return {
        ...state,
        tasks: action.tasks
      };
    case 'REMOVE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter(task => task._id !== action.taskId)
      };
    case 'UPDATE_TASK':
      return {
        ...state,
        tasks: state.tasks.map(task => (task._id === action.task._id) ? action.task : task)
      };
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.task],
      };

    default:
      return state;
  }
}
