import { useLoaderData } from 'react-router-dom';
import Nav from './Nav';
import styles from '../styles/App.module.scss';
import ProjectCard from './ProjectCard';

function App() {
  const { tasks } = useLoaderData();
  return (
    <>
      <Nav />
      <section className={styles.container}>
        {tasks.map((project, index) => {
          console.log(project, index);
          return <ProjectCard key={index} project={project} />;
        })}
      </section>
    </>
  );
}

export default App;
