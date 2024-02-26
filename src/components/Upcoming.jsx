import { useLoaderData } from 'react-router-dom';

function Upcoming() {
  const { tasks } = useLoaderData();

  return (
    <div>
      <h2>UPCOMING</h2>
      {tasks.map((task, index) => {
        return <p key={index}>{task.title}</p>;
      })}
    </div>
  );
}

export default Upcoming;
