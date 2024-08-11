import PropTypes from "prop-types";
import styles from "../App.module.css";
import { useDispatch } from "react-redux";
import { updateTodo, deleteTodo } from "../actions";

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const handleUpdate = () => {
    dispatch(updateTodo(id, { title, completed: !completed }));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <li className={styles.todoItem}>
      <span className={styles.todoTitle}>{title}</span>
      <span className={completed ? styles.completed : styles.notCompleted}>
        {completed ? "Completed" : "Not Completed"}
      </span>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

TodoItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};

export default TodoItem;
