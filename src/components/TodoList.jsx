
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import styles from "../App.module.css";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos || []); // Защита от неопределенности
  const { searchTerm = "", isSorted } = useSelector((state) => state.ui || {}); // Защита от неопределенности

  const filteredTodos = todos.filter((todo) =>
    todo.title
      ? todo.title.toLowerCase().includes(searchTerm.toLowerCase())
      : false
  );

  if (isSorted) {
    filteredTodos.sort((a, b) => a.title.localeCompare(b.title));
  }

  return (
    <ul className={styles.todoList}>
      {filteredTodos.map(({ id, title, completed }) => (
        <TodoItem key={id} id={id} title={title} completed={completed} />
      ))}
    </ul>
  );
};

export default TodoList;
