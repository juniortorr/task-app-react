import styles from '../styles/Nav.module.scss';
import { Link } from 'react-router-dom';

function Nav() {
  function handleClick() {
    console.log('yo');
  }

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
      <Link to="/new-project">
        <button onClick={handleClick} className={styles.newProjectBtn}>
          +
        </button>
      </Link>
    </nav>
  );
}

export default Nav;
