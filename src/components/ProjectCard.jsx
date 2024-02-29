import PropTypes from 'prop-types';
import styles from '../styles/ProjectCard.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import TaskLink from './Task-Link';
import { useState } from 'react';
import storage from '../data';
function ProjectCard({ project, setAlertStatus }) {
  const [status, setStatus] = useState('display');
  const navigate = useNavigate();

  function handleEdit() {
    setStatus(() => 'edit');
  }

  function handleGoBack() {
    setTimeout(() => {
      setAlertStatus(() => 'hide');
    }, 3000);
    setStatus(() => 'display');
    navigate('/');
  }

  async function handleDeleteProject() {
    await storage.deleteProject(project);
    setAlertStatus(() => 'Project Deleted!');
    await handleGoBack();
  }

  if (status === 'edit') {
    return (
      <div className={`${styles.projCard} ${styles.editProjCard}`}>
        <button onClick={handleDeleteProject}>Delete</button>
        <button onClick={handleGoBack}>Go Back</button>
      </div>
    );
  }
  return (
    <div className={styles.projCard}>
      <div className={styles.projCardHeader}>
        <h1 className={styles.projTitle}>{project.title}</h1>
        <button onClick={handleEdit}>
          <img src="/public/images/options.png" alt="edit cart button" />
        </button>
      </div>
      <ul className={styles.taskList}>
        {project.tasks.map((eachTask, index) => {
          return <TaskLink key={index} styles={styles} task={eachTask} projectId={project.id} />;
        })}
        <Link to={'/projects/' + project.id}>
          <button className={styles.newTaskBtn}>+ add new task</button>
        </Link>
      </ul>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.object,
  setAlertStatus: PropTypes.func,
};
export default ProjectCard;
