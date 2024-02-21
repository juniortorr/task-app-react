import PropTypes from 'prop-types';
import styles from '../styles/ProjectCard.module.scss';

function ProjectCard({ project }) {
  return (
    <div className={styles.projCard} id="{{this.title}}">
      <div className={styles.projTitleBox} id="{{this.title}}">
        <h1 className={styles.projTitle}>{project.title}</h1>
      </div>
      <ul className={styles.taskList}>
        <label className={styles.taskContainer} htmlFor="checkBoxes">
          <input type="checkbox" id="checkBoxes" name="checkbox"></input>
          <p>{project.title}</p>
          <div className={styles.priorityLevel} id={project.title}></div>
        </label>

        <button className={styles.newTaskBtn}>+ add new task</button>
      </ul>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.object,
};
export default ProjectCard;
