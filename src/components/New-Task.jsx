import { useLoaderData, Form, useNavigate } from 'react-router-dom';
import styles from '../styles/New-Task.module.scss';
import Task from '../helpers/task';

function NewTask() {
  const { task } = useLoaderData();
  const navigate = useNavigate();

  async function onSubmit(e) {
    e.preventDefault();
    const title = e.target[0].value;
    const dueDate = e.target[3].value;
    const desc = e.target[4].value;
    const newTask = new Task(title, dueDate, desc);
    await task.addTask(newTask);
    navigate('/');
  }

  console.log(task);
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
          <input
            className={styles.newTodo}
            type="text"
            placeholder="new todo"
            name="new-todo"
          ></input>
          <ul className={styles.todoList}></ul>
          <button className="addNewTodo" type="button">
            + add new todo
          </button>
        </div>
      </div>
      <div className={styles.popUpLeft}>
        <input
          type="text"
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
