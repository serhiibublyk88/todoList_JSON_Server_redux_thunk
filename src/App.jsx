import { TodoForm, TodoList,Header  } from "./components";
import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default App;
