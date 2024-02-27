import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function TaskLink({ styles, task, projectId }) {
  return (
    <Link to={`/projects/${projectId}/${task.id}`}>
      <label className={styles.taskContainer} htmlFor="checkBoxes">
        <input type="checkbox" id="checkBoxes" name="checkbox"></input>
        <p>{task.title}</p>
        <div className={styles.priorityLevel} id={task.title}></div>
      </label>
    </Link>
  );
}

TaskLink.propTypes = {
  styles: PropTypes.object,
  task: PropTypes.object,
  projectId: PropTypes.string,
};
export default TaskLink;
