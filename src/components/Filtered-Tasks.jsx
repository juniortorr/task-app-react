import { useLoaderData } from 'react-router-dom';

function FilteredTasks() {
  const { tasks } = useLoaderData();
  console.log(tasks);

  return (
    <div>
      {tasks.length > 0 &&
        tasks.map((task, index) => {
          return <p key={index}>{task.title}</p>;
        })}
      <h2>hello</h2>
    </div>
  );
}

export default FilteredTasks;
