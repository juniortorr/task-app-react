import { useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import '../styles/App.css';
import Nav from './Nav';

function App() {
  const { tasks } = useLoaderData();
  const [allProjects, setAllProjects] = useState(tasks);

  return (
    <>
      <Nav />
      <section className="container">
        {allProjects.map((project, index) => {
          return <p key={index}>{project}</p>;
        })}
        <Outlet />
      </section>
    </>
  );
}

export default App;
