import styles from '../styles/Nav.module.scss';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className={styles.nav}>
      <Link to="/">
        <h1>Projects</h1>
      </Link>
      <div className={styles.sortOptions}>
        <button className="option today">Today</button>
        <button className="option upcoming">Upcoming</button>
        <button className="option all">All</button>
      </div>
      <button className={styles.newProjectBtn}>+</button>
    </nav>
  );
}

export default Nav;
