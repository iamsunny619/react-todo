/*
so below code will genreate a todo app which has functionality to store and
delete data, also it has local storage , which means until u delete chace
the data will preserve even if you close server or close the browser

but this app has few bugs, that is not visible,
so if u add a todo, it does change state and update in screen, but it will not store it,
until the next render.
i.e if I add 1 it will print in list, but in other instance of same app will have no data,
and if u second value ex- 22, it will show both data in screen, 
but in different(same instance) tab instance, it will have first value now, and so onChange

why this is happening??
because localStorage is not synchronus issue.

////////////
not an bug, but optimization
focus seeting in input, we should do it via setTimeout, cause we are doing the 
setting before satte update which might cause the foucs to lost once render.

/////////////////
local storage is empty, we should check if it empty before assigning to state.


/////////////////////////
all the fix and optimization will be avilbale in brnach 2 i.2 todo_v2
*/

import { useState, useRef, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    const temp = JSON.parse(localStorage.getItem("todos"));
    if (temp) {
      setTodos(temp);
    }
  }, []);

  const submitHandle = (e) => {
    e.preventDefault();
    setTodos((prev) => [...prev, todo]);
    setTodo("");
    localStorage.setItem("todos", JSON.stringify(todos));
    inputRef.current.focus();
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      submitHandle(e);
    }
  };

  const deleteTodo = (index) => {
    setTodos((prev) => {
      const newTodos = [...prev];
      newTodos.splice(index, 1);
      return newTodos;
    });
  };
  return (
    <div className="App">
      <h1>Todo </h1>
      <div>
        <input
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          ref={inputRef}
          onKeyDown={handleKeyDown}
        />
        <button onClick={submitHandle}>todo</button>
      </div>
      {todos.length < 1 && (
        <div>
          <h2>We dont see any todo you have made yet....</h2>
        </div>
      )}

      <div>
        <ul>
          {todos.map((curr, index) => {
            return (
              <li
                onClick={() => {
                  deleteTodo(index);
                }}
                key={index}
              >
                {curr}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
