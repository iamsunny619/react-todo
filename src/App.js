import { useState, useRef, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const inputReff = useRef();
  useEffect(() => {
    const temp = JSON.parse(localStorage.getItem("todos"));
    if (temp && temp.length > 0) {
      setTodos(temp);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleTodos = (e) => {
    e.preventDefault();
    setTodos((prev) => [...prev, todo]);
    setTodo("");
    setTimeout(() => {
      inputReff.current.focus();
    }, 0);
  };

  const handleEnterKey = (e) => {
    if (e.keyCode === 13) {
      handleTodos(e);
    }
  };

  const handleDelete = (index) => {
    setTodos((prev) => {
      const temp = [...prev];
      temp.splice(index, 1);
      return temp;
    });
  };

  return (
    <div className="App">
      <h1>Todo</h1>
      <div>
        <input
          ref={inputReff}
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          onKeyDown={handleEnterKey}
        />
        <button onClick={handleTodos}>add</button>
      </div>
      <div>
        <ul>
          {todos.map((curr, index) => {
            return (
              <li onClick={() => handleDelete(index)} key={index}>
                {curr}
              </li>
            );
          })}
        </ul>
      </div>
      {!todos && (
        <div>
          <h3>
            {" "}
            We don't find any todo you saved, go ahead and add something..
          </h3>
        </div>
      )}
    </div>
  );
}
