import { useLoaderData } from 'react-router-dom';
import Nav from './Nav';
import styles from '../styles/Filtered-Tasks.module.scss';
import PropTypes from 'prop-types';

function FilteredTasks({ title }) {
  const { tasks } = useLoaderData();
  console.log(tasks);

  return (
    <>
      <Nav />
      <h1 className={styles.today}>{title} Projects</h1>
      <div className={styles.todayCard}>
        {tasks.length === 0 && <h2>No Tasks</h2>}
        {tasks.length > 0 &&
          tasks.map((task, index) => {
            return (
              <div className={styles.task} key={index}>
                <h3>{task.title}</h3>
                <p>Due By: {task.dueDate}</p>
              </div>
            );
          })}
      </div>
    </>
  );
}

FilteredTasks.propTypes = {
  title: PropTypes.string,
};
export default FilteredTasks;
