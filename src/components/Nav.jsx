import styles from '../styles/Nav.module.scss';
import { Link } from 'react-router-dom';

function Nav() {
  function handleClick() {}

  return (
    <nav className={styles.nav}>
      <Link to="/">
        <h1>Projects</h1>
      </Link>
      <div className={styles.sortOptions}>
        <Link to="/tasks/today">
          <button className="option today">Today</button>
        </Link>
        <button className="option upcoming">Upcoming</button>
        <Link to="/">
          <button className="option all">All</button>
        </Link>
      </div>
      <Link to="/new-project">
        <button onClick={handleClick} className={styles.newProjectBtn}>
          +
        </button>
      </Link>
    </nav>
  );
}

export default Nav;
