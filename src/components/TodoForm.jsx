import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../actions/todoActions";
import { setSearchTerm, toggleSort, setLoadingMessage } from "../actions/uiActions";
import styles from "../App.module.css";

const TodoForm = () => {
  const dispatch = useDispatch();
  const { searchTerm, isSorted, isProcessing } = useSelector((state) => state.ui);
  const [todos, setTodos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch("http://localhost:3000/todo");
        const data = await response.json();
        setTodos(data);
      } catch (error) {
        console.error("Failed to fetch todos:", error);
      }
    };

    fetchTodos();
  }, []);

  const handleSearch = (event) => {
    dispatch(setSearchTerm(event.target.value));
  };

  const handleAddTodo = () => {
    if (todos.length === 0) {
      console.warn("No todos available to add");
      return;
    }

    const nextTodo = todos[currentIndex];
    const newTodo = {
      title: nextTodo.title, 
      completed: false,
      id: Date.now().toString(), // Генерация нового ID
    };

    dispatch(setLoadingMessage("Adding todo..."));
    dispatch(addTodo(newTodo));

    // Переходим к следующему имени в списке
    setCurrentIndex((prevIndex) => (prevIndex + 1) % todos.length);
  };

  const handleToggleSort = () => {
    dispatch(toggleSort());
  };

  return (
    <div className={styles.controls}>
      <button onClick={handleAddTodo} disabled={isProcessing}>
        Add todo
      </button>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <button onClick={handleToggleSort} disabled={isProcessing}>
        {isSorted ? "Unsort" : "Sort A-Z"}
      </button>
    </div>
  );
};

export default TodoForm;
