import { useLoaderData, Form, useNavigate, useOutletContext } from 'react-router-dom';
import { useState } from 'react';
import styles from '../styles/New-Task.module.scss';
import Task from '../helpers/task';
import TodoList from './Todo-List';
import { format, addDays } from 'date-fns';
function NewTask() {
  const { project, task } = useLoaderData();
  const navigate = useNavigate();
  const [todos, setTodos] = useState(task ? task.todos : []);
  // eslint-disable-next-line no-unused-vars
  const [status, setAlertStatus] = useOutletContext();
  const [animationStatus, setAnimationStatus] = useState('slide in');

  async function onSubmit(e) {
    e.preventDefault();
    console.log(e);

    const title = e.target[0].value;
    const addDay = addDays(format(e.target[1].value, 'MM/dd/yyyy'), 1);
    console.log(addDay);
    const preFormatDueDate = format(addDay, 'yyyy/MM/dd');
    const formattedDueDate = e.target[1].value;
    console.log(formattedDueDate, preFormatDueDate);
    const desc = e.target[4].value;
    if (task) {
      console.log(task);
      await task.setValues(title, formattedDueDate, desc, todos, preFormatDueDate);
      setAlertStatus(() => 'Task Changed!');
    } else {
      const newTask = new Task(title, formattedDueDate, desc, todos, preFormatDueDate);
      await project.addTask(newTask);
      setAlertStatus(() => 'Task Created!');
    }
    setAnimationStatus(() => 'slide out');
    setTimeout(() => {
      setAlertStatus(() => 'hide');
    }, 3000);
    setTimeout(() => {
      navigate('/');
    }, 200);
  }

  async function handleDelete() {
    await project.deleteTask(task);
    setAlertStatus(() => 'Deleted Task!');
    setTimeout(() => {
      setAlertStatus(() => 'hide');
    }, 3000);
    navigate('/');
  }

  return (
    <Form
      className={
        animationStatus === 'slide in'
          ? `${styles.newTaskPopup} ${styles.slideUp}`
          : `${styles.newTaskPopup} ${styles.slideOut}`
      }
      onSubmit={onSubmit}
    >
      <label className={styles.taskName} htmlFor="new-task">
        New Task:
      </label>
      <input
        required
        placeholder="new task"
        defaultValue={task ? task.title : undefined}
        className="newTask"
        name="taskName"
        type="text"
        id="new-task"
      ></input>
      <label htmlFor="dueDate">Due Date</label>
      <input
        type="date"
        name="dueDate"
        id="dueDate"
        defaultValue={task ? task.dueDate : undefined}
        className={styles.dueDate}
        placeholder={task ? task.preFormatDueDate : undefined}
      ></input>

      <TodoList todos={todos} setTodos={setTodos} styles={styles} />
      <label htmlFor="desc">Description:</label>
      <textarea
        className={styles.textarea}
        defaultValue={task ? task.desc : undefined}
        name="desc"
        id="desc"
        cols="30"
        rows="10"
      ></textarea>
      <button type="submit" className={styles.taskComplete}>
        Confirm
      </button>
      {task && (
        <button className={styles.deleteTaskBtn} onClick={handleDelete}>
          Delete Task
        </button>
      )}
    </Form>
  );
}

export default NewTask;
