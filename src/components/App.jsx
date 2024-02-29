import { useLoaderData } from 'react-router-dom';
import Nav from './Nav';
import styles from '../styles/App.module.scss';
import ProjectCard from './ProjectCard';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const { projects } = useLoaderData();
  const [status, setAlertStatus] = useState('hide');
  return (
    <>
      {status !== 'hide' && <h2 className={styles.alert}>{status}</h2>}
      <Nav />
      <h1 className={styles.allProjects}>All Projects</h1>
      <section className={styles.container}>
        {projects.length === 0 && (
          <h1 className={styles.noProjects}>
            No New <br /> Projects
          </h1>
        )}
        {projects.map((project, index) => {
          return <ProjectCard key={index} project={project} setAlertStatus={setAlertStatus} />;
        })}
        <Outlet context={[status, setAlertStatus]}></Outlet>
      </section>
    </>
  );
}

export default App;
