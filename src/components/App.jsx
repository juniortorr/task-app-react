import { useLoaderData } from 'react-router-dom';
import Nav from './Nav';
import styles from '../styles/App.module.scss';
import ProjectCard from './ProjectCard';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const { projects } = useLoaderData();
  const [status, setAlertStatus] = useState('');
  return (
    <>
      {status === 'alert' && <h2 className={styles.alert}>Success!</h2>}
      <Nav />
      <section className={styles.container}>
        {projects.map((project, index) => {
          return <ProjectCard key={index} project={project} setAlertStatus={setAlertStatus} />;
        })}
        <Outlet context={[status, setAlertStatus]}></Outlet>
      </section>
    </>
  );
}

export default App;
