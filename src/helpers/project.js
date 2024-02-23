let id = 0;

export default class Project {
  constructor(title) {
    this.title = title;
    this.tasks = [];
    this.id = id += 1;
    console.log(this);
  }

  addTask(task) {
    this.tasks.push(task);
    console.log({ addTask: 'task added to project success!', project: this });
  }
  getTaskById(id) {
    return this.tasks.filter((task) => task.id === id)[0];
  }
}
