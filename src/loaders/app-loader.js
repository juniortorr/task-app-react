import storage from '../data';

async function loader() {
  const tasks = await storage.getProjects();
  return { tasks };
}

async function newTaskLoader({ params }) {
  const id = Number(params.projectId);
  const project = await storage.getProjectById(id);
  console.log({ 'New Task Loader': 'Fetch Project by ID Sucess!', project: project });
  return { project };
}

async function editTaskLoader({ params }) {
  const projectId = Number(params.projectId);
  const taskId = Number(params.taskId);
  const project = await storage.getProjectById(projectId);
  const task = await project.getTaskById(taskId);
  return { project, task };
}
export { loader as appLoader, newTaskLoader, editTaskLoader };
