import { useLoaderData } from 'react-router-dom';
import Nav from './Nav';
import styles from '../styles/App.module.scss';
import ProjectCard from './ProjectCard';
import { Outlet } from 'react-router-dom';

function App() {
  const { projects } = useLoaderData();
  return (
    <>
      <Nav />
      <section className={styles.container}>
        {projects.map((project, index) => {
          return <ProjectCard key={index} project={project} />;
        })}
        <Outlet></Outlet>
      </section>
    </>
  );
}

export default App;
