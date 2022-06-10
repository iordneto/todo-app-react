import "./App.css";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="main">
      <Header />
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
