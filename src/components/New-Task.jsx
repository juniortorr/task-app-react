import { useLoaderData, Form, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styles from '../styles/New-Task.module.scss';
import Task from '../helpers/task';
import TodoList from './Todo-List';
import { format, addDays } from 'date-fns';
function NewTask() {
  const { project, task } = useLoaderData();
  const navigate = useNavigate();
  const [todos, setTodos] = useState(task ? task.todos : []);

  async function onSubmit(e) {
    e.preventDefault();
    console.log(e);
    const title = e.target[0].value;
    const addDay = addDays(format(e.target[3].value, 'MM/dd/yyyy'), 1);
    const preFormatDueDate = e.target[3].value;
    const formattedDueDate = format(addDay, 'MM/dd/yyyy');
    const desc = e.target[4].value;
    if (task) {
      console.log(task);
      await task.setValues(title, formattedDueDate, desc, todos, preFormatDueDate);
    } else {
      const newTask = new Task(title, formattedDueDate, desc, todos, preFormatDueDate);
      await project.addTask(newTask);
    }

    navigate('/');
  }

  return (
    <Form className={styles.newTaskPopup} onSubmit={onSubmit}>
      <div className={styles.popUpLeft}>
        <label htmlFor="new-task">
          New Task
          <input
            required
            placeholder="new task"
            defaultValue={task ? task.title : undefined}
            className="newTask"
            name="taskName"
            type="text"
            id="new-task"
          ></input>
        </label>

        <div className={styles.todoForm}>
          <TodoList todos={todos} setTodos={setTodos} styles={styles} />
        </div>
      </div>
      <div className={styles.popUpLeft}>
        <input
          type="date"
          name="dueDate"
          id="dueDate"
          defaultValue={task ? task.preFormatDueDate : undefined}
          className={styles.dueDate}
          placeholder="MM/DD/YYYY"
          // onBlur="(this.type='text')"
          // onFocus="(this.type='date')"
        ></input>
        <textarea
          className={styles.textarea}
          defaultValue={task ? task.desc : undefined}
          name="desc"
          id="desc"
          cols="30"
          rows="10"
        ></textarea>
        <button type="submit" className={styles.taskComplete}>
          Complete Setup
        </button>
      </div>
    </Form>
  );
}

export default NewTask;
