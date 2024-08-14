
export const ADD_TODO = "ADD_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const SET_TODOS = "SET_TODOS";
export const SET_CURRENT_INDEX = "SET_CURRENT_INDEX";
export const FETCH_NEXT_TODO_SUCCESS = "FETCH_NEXT_TODO_SUCCESS";

export const addTodo = (todo) => async (dispatch) => {
  try {
    const response = await fetch("http://localhost:3000/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(todo),
    });
    const data = await response.json();
    dispatch({ type: ADD_TODO, payload: data });
  } catch (error) {
    console.error("Failed to add todo:", error);
  }
};

export const updateTodo = (id, updatedTodo) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:3000/todo/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(updatedTodo),
    });
    const data = await response.json();
    dispatch({ type: UPDATE_TODO, payload: data });
  } catch (error) {
    console.error("Failed to update todo:", error);
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  try {
    await fetch(`http://localhost:3000/todo/${id}`, {
      method: "DELETE",
    });
    dispatch({ type: DELETE_TODO, payload: id });
  } catch (error) {
    console.error("Failed to delete todo:", error);
  }
};

export const setTodos = (todos) => ({
  type: SET_TODOS,
  payload: todos,
});

export const setCurrentIndex = (index) => ({
  type: SET_CURRENT_INDEX,
  payload: index,
});

export const fetchNextTodo = (currentIndex) => async (dispatch) => {
  try {
    const response = await fetch("http://localhost:3000/todo");
    const todos = await response.json();
    const nextTodo = todos[currentIndex % todos.length];
    dispatch({ type: FETCH_NEXT_TODO_SUCCESS, payload: nextTodo });
  } catch (error) {
    console.error("Failed to fetch next todo:", error);
  }
};
