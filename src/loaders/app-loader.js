import storage from '../data';

async function loader() {
  const tasks = await storage.getTasks();
  return { tasks };
}

async function newTaskLoader({ params }) {
  const id = Number(params.projectId);
  const project = await storage.getTaskById(id);
  console.log({ 'New Task Loader': 'Fetch Project by ID Sucess!' });
  return { project };
}

export { loader as appLoader, newTaskLoader };
