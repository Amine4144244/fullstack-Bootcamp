import { ADD_TASK, EDIT_TASK, DELETE_TASK, SET_SELECTED_DATE } from './actions';

const initialState = {
  selectedDate: new Date().toISOString().split('T')[0], // 'YYYY-MM-DD'
  tasksByDate: {}
};

let taskId = 1;

export default function taskReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SELECTED_DATE:
      return { ...state, selectedDate: action.payload };

    case ADD_TASK: {
      const { date, task } = action.payload;
      const newTask = { id: taskId++, ...task };
      return {
        ...state,
        tasksByDate: {
          ...state.tasksByDate,
          [date]: [...(state.tasksByDate[date] || []), newTask]
        }
      };
    }

    case EDIT_TASK: {
      const { date, taskId, updatedTask } = action.payload;
      return {
        ...state,
        tasksByDate: {
          ...state.tasksByDate,
          [date]: state.tasksByDate[date].map((task) =>
            task.id === taskId ? { ...task, ...updatedTask } : task
          )
        }
      };
    }

    case DELETE_TASK: {
      const { date, taskId } = action.payload;
      return {
        ...state,
        tasksByDate: {
          ...state.tasksByDate,
          [date]: state.tasksByDate[date].filter((task) => task.id !== taskId)
        }
      };
    }

    default:
      return state;
  }
}