class Storage {
  constructor() {
    this.tasks = [];
  }

  getTasks() {
    return this.tasks;
  }
  addProject(project) {
    this.tasks.push(project);
  }

  getTaskById(id) {
    const task = this.tasks.filter((product) => product.id ===  id);
    console.log(task);
    return task[0];
  }
}

const storage = new Storage();
export default storage;
