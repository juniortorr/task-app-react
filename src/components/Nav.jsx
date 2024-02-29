import styles from '../styles/Nav.module.scss';
import { Link } from 'react-router-dom';

function Nav() {
  function handleClick() {}

  return (
    <nav className={styles.nav}>
      <Link to="/">
        <h1>Tasker</h1>
      </Link>
      <div className={styles.sortOptions}>
        <Link to="/tasks/today">
          <button className="option today">Today</button>
        </Link>
        <Link to="/tasks/upcoming">
          <button className="option upcoming">Upcoming</button>
        </Link>
        <Link to="/">
          <button className="option all">All</button>
        </Link>
      </div>
      <Link className={styles.links} to="/new-project">
        <button onClick={handleClick} className={styles.newProjectBtn}>
          <img src="/public/images/options-toggle.png" alt="toggle options button" />
        </button>
      </Link>
    </nav>
  );
}

export default Nav;
