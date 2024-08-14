
import { useDispatch, useSelector } from "react-redux";
import { fetchNextTodo } from "../actions/todoActions";
import {
  setSearchTerm,
  toggleSort,
  setLoadingMessage,
} from "../actions/uiActions";
import styles from "../App.module.css";

const TodoForm = () => {
  const dispatch = useDispatch();
  const { searchTerm, isSorted, isProcessing } = useSelector(
    (state) => state.ui
  );
  const { currentIndex } = useSelector((state) => state.todos);

  const handleSearch = (event) => {
    dispatch(setSearchTerm(event.target.value));
  };

  const handleAddTodo = () => {
    if (isProcessing) {
      console.warn("Processing, please wait...");
      return;
    }

    dispatch(setLoadingMessage("Adding todo..."));
    dispatch(fetchNextTodo(currentIndex));
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
