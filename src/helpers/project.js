import storage from '../data';
import { v4 as uuidv4 } from 'uuid';

export default class Project {
  constructor(title) {
    this.title = title;
    this.tasks = [];
    this.id = uuidv4();
    console.log(this);
  }

  addTask(task) {
    this.tasks.push(task);
    localStorage.setItem('projects', JSON.stringify(storage.projects));
    console.log({ addTask: 'task added to project success!', project: this });
  }

  deleteTask(task) {
    this.tasks = this.tasks.filter((t) => t.id !== task.id);
    localStorage.setItem('projects', JSON.stringify(storage.projects));
  }
  getTaskById(id) {
    return this.tasks.filter((task) => task.id === id)[0];
  }

  updateData() {
    localStorage.setItem('projects', JSON.stringify(storage.projects));
    console.log('updated database successfully');
  }
}
