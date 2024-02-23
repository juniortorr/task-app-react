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
      <label htmlFor="new-todo">
        New Todo:
        <input
          onChange={handleChange}
          className={styles.newTodo}
          type="text"
          placeholder="new todo"
          value={inputDisplay}
          name="new-todo"
          id="new-todo"
        ></input>
      </label>

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
