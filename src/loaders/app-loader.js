import storage from '../data';
import { format, differenceInCalendarDays, isBefore } from 'date-fns';

async function appLoader() {
  const projects = await storage.getProjects();
  return { projects };
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

async function getTodaysTasks() {
  const today = format(new Date(), 'MM/dd/yyyy');
  let allTasks = [];
  storage.projects.forEach((project) => {
    allTasks = [...allTasks, ...project.tasks];
  });
  const tasks = allTasks.filter((task) => task.dueDate === today);
  return { tasks };
}

async function getUpcomingTasks() {
  const today = format(new Date(), 'MM/dd/yyyy');
  let allTasks = [];
  storage.projects.forEach((project) => {
    allTasks = [...allTasks, ...project.tasks];
  });
  const tasks = allTasks.filter(
    (task) => differenceInCalendarDays(today, task.dueDate) <= 5 && isBefore(today, task.dueDate)
  );
  return { tasks };
}
export { appLoader, newTaskLoader, editTaskLoader, getTodaysTasks, getUpcomingTasks };
