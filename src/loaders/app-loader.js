import Project from '../helpers/project';
import Task from '../helpers/task';
import storage from '../data';
import { format, differenceInCalendarDays, isBefore } from 'date-fns';

async function appLoader() {
  const arr = [];
  const jsonProjects = await localStorage.getItem('projects');
  if (jsonProjects) {
    const parsedProjects = await JSON.parse(jsonProjects);
    parsedProjects.forEach((project) => {
      const serializedProject = new Project(project.title);
      project.tasks.forEach((task) => {
        const serializedTask = new Task(
          task.title,
          task.formattedDate,
          task.desc,
          task.todos,
          task.preFormatDueDate
        );
        serializedProject.addTask(serializedTask);
      });
      arr.push(serializedProject);
    });
  }
  storage.setProjects(arr);
  const projects = await storage.getProjects();
  return { projects };
}

async function newTaskLoader({ params }) {
  const id = params.projectId;
  const project = await storage.getProjectById(id);
  console.log({ 'New Task Loader': 'Fetch Project by ID Sucess!', project: project });
  return { project };
}

async function editTaskLoader({ params }) {
  const projectId = params.projectId;
  const taskId = params.taskId;
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
