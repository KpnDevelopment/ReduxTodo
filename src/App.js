import logo from "./logo.svg";
import "./App.css";
import TodoForm from "./Componets/TodoForm";
import TodoList from "./Componets/TodoList";

function App() {
  return (
    <div className="App">
      <h1>Todo</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
