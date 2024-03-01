import { useState } from 'react';
import styles from '../styles/Nav.module.scss';
import { Link } from 'react-router-dom';

function Nav() {
  const [menu, setMenuStatus] = useState(false);

  function handleClick() {
    setMenuStatus(() => !menu);
  }

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
      {/* <Link className={styles.links} to="/new-project">
        <button onClick={handleClick} className={styles.newProjectBtn}>
          <img src="/public/images/options-toggle.png" alt="toggle options button" />
        </button>
      </Link> */}
      <button onClick={handleClick} className={styles.newProjectBtn}>
        <img src="/images/options-toggle.png" alt="toggle options button" />
      </button>
      {menu === true && (
        <div className={styles.modal}>
          <header>
            <h1>Tasker</h1>
            <button onClick={handleClick}>X</button>
          </header>
          <section>
            <Link to="/">
              <button onClick={handleClick} className={styles.option}>
                All Projects
              </button>
            </Link>
            <Link to="/tasks/today">
              <button onClick={handleClick} className={styles.option}>
                Today&apos;s Projects
              </button>
            </Link>
            <Link to="/tasks/upcoming">
              <button onClick={handleClick} className={styles.option}>
                Upcoming
              </button>
            </Link>
          </section>
          <Link to="/new-project">
            <button className={styles.newProject} onClick={handleClick}>
              New Project
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Nav;
