import { ADD_TODO, UPDATE_TODO, DELETE_TODO, SET_TODOS } from "../actions";

const initialState = []; // Инициализируем начальное состояние пустым массивом

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case UPDATE_TODO:
      return state.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    case SET_TODOS:
      return action.payload;
    default:
      return state;
  }
};

export default todosReducer;
