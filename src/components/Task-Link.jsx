import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function TaskLink({ styles, task, projectId }) {
  return (
    <Link className={styles.task} to={`/projects/${projectId}/${task.id}`}>
      <p className={styles.left}>{task.title}</p>
      <div className={styles.right}>
        <div className={`${styles.priorityLevel} ${task.priority}`} id={task.title}></div>
        <img src="/images/pencil.png" alt="edit task button" />
      </div>
    </Link>
  );
}

TaskLink.propTypes = {
  styles: PropTypes.object,
  task: PropTypes.object,
  projectId: PropTypes.string,
};
export default TaskLink;
