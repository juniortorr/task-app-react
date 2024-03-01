import styles from '../styles/New-Project.module.scss';
import { Form, useOutletContext } from 'react-router-dom';
import storage from '../data';
import { useNavigate } from 'react-router-dom';
import Project from '../helpers/project';
import { useState } from 'react';

function NewProject() {
  // eslint-disable-next-line no-unused-vars
  const { status, setAlertStatus } = useOutletContext();
  const [open, setOpen] = useState(true);
  let navigate = useNavigate();
  async function handleClick(e) {
    e.preventDefault();
    setOpen(() => !open);
    const project = new Project(e.target[0].value);
    await storage.addProject(project);
    setAlertStatus(() => 'Project Added!');
    setTimeout(() => {
      setAlertStatus(() => 'hide');
    }, 3000);
    setTimeout(() => {
      navigate('/');
    }, 400);
  }

  function handleClosePopup() {
    setOpen(() => !open);
    setTimeout(() => {
      navigate('/');
    }, 400);
  }

  return (
    <>
      <Form
        onSubmit={handleClick}
        className={
          open === true
            ? `${styles.newProjectPopup} ${styles.slideUp}`
            : `${styles.newProjectPopup} ${styles.slideOut}`
        }
      >
        <label htmlFor="project-name">New Project:</label>
        <input
          id="project-name"
          name="project-name"
          required
          className={styles.title}
          type="text"
          placeholder="new project"
        ></input>
        <button onClick={handleClosePopup} type="button" className={styles.closePopup}>
          X
        </button>
        <div className={styles.newProjectOptions}>
          <button className={styles.createProjectBtn} type="submit">
            Create Project
          </button>
        </div>
      </Form>
    </>
  );
}

export default NewProject;
