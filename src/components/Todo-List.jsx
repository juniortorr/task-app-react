/* eslint-disable react/prop-types */
import { useState } from 'react';

function TodoList({ styles, todos, setTodos }) {
  const [currentTask, setCurrentTask] = useState('');
  const [inputDisplay, setInputDisplay] = useState('');
  function handleClick() {
    console.log(todos);
    setTodos(() => [...todos, currentTask]);
    setInputDisplay(() => '');
  }
  function handleChange(e) {
    setCurrentTask(() => e.target.value);
    setInputDisplay(() => e.target.value);
  }
  return (
    <>
      <label htmlFor="new-todo">New Todo:</label>
      <div className={styles.todoInputWrapper}>
        <input
          onChange={handleChange}
          className={styles.newTodo}
          type="text"
          placeholder="new todo"
          value={inputDisplay}
          name="new-todo"
          id="new-todo"
        ></input>
        <button onClick={handleClick} className="addNewTodo" type="button">
          +
        </button>
      </div>
      <ul className={styles.todoList}>
        {todos.length === 0 && <p>Todos will be printed here</p>}
        {todos.length > 0 &&
          todos.map((task, index) => {
            return <li key={index}>{task}</li>;
          })}
      </ul>
    </>
  );
}

export default TodoList;
