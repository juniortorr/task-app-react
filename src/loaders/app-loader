import storage from '../data';

async function loader() {
  const tasks = await storage.getTasks();
  return { tasks };
}

async function newTaskLoader({ params }) {
  const id = Number(params.projectId);
  const task = await storage.getTaskById(id);
  console.log(task);
  return { task };
}

export { loader as appLoader, newTaskLoader };
