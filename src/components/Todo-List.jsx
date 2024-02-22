/* eslint-disable react/prop-types */
import { useState } from 'react';

function TodoList({ styles, todos, setTodos }) {
  const [currentTask, setCurrentTask] = useState('');
  function handleClick() {
    console.log(todos);
    setTodos(() => [...todos, currentTask]);
  }
  function handleChange(e) {
    setCurrentTask(() => e.target.value);
  }
  return (
    <>
      <input
        onChange={handleChange}
        className={styles.newTodo}
        type="text"
        placeholder="new todo"
        name="new-todo"
      ></input>
      <ul className={styles.todoList}>
        {todos.length > 0 &&
          todos.map((task, index) => {
            return <p key={index}>{task}</p>;
          })}
      </ul>
      <button onClick={handleClick} className="addNewTodo" type="button">
        + add new todo
      </button>
    </>
  );
}

export default TodoList;
