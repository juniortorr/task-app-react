import { useLoaderData, Form, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styles from '../styles/New-Task.module.scss';
import Task from '../helpers/task';
import TodoList from './Todo-List';
function NewTask() {
  const { project } = useLoaderData();
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);

  async function onSubmit(e) {
    e.preventDefault();
    console.log(e);
    const title = e.target[0].value;
    const dueDate = e.target[3].value;
    const desc = e.target[4].value;
    const newTask = new Task(title, dueDate, desc, todos);
    await project.addTask(newTask);
    navigate('/');
  }

  return (
    <Form className={styles.newTaskPopup} onSubmit={onSubmit}>
      <div className={styles.popUpLeft}>
        <input
          required
          placeholder="new task"
          className="newTask"
          name="taskName"
          type="text"
        ></input>
        <div className={styles.todoForm}>
          <TodoList todos={todos} setTodos={setTodos} styles={styles} />
        </div>
      </div>
      <div className={styles.popUpLeft}>
        <input
          type="date"
          name="dueDate"
          id="dueDate"
          className={styles.dueDate}
          placeholder="MM/DD/YYYY"
          // onBlur="(this.type='text')"
          // onFocus="(this.type='date')"
        ></input>
        <textarea className={styles.textarea} name="desc" id="desc" cols="30" rows="10"></textarea>
        <button type="submit" className={styles.taskComplete}>
          Complete Setup
        </button>
      </div>
    </Form>
  );
}

export default NewTask;
