import PropTypes from 'prop-types';
import styles from '../styles/ProjectCard.module.scss';
import { Link } from 'react-router-dom';
import TaskLink from './Task-Link';
function ProjectCard({ project }) {
  return (
    <div className={styles.projCard} id="{{this.title}}">
      <div className={styles.projTitleBox} id="{{this.title}}">
        <h1 className={styles.projTitle}>{project.title}</h1>
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
};
export default ProjectCard;
