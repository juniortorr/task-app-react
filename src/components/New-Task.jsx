import { useLoaderData } from 'react-router-dom';

function NewTask() {
  const { task } = useLoaderData();
  return <h1>{task.title}</h1>;
}

export default NewTask;
