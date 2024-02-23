class Storage {
  constructor() {
    this.tasks = [];
  }

  getProjects() {
    return this.tasks;
  }
  addProject(project) {
    this.tasks.push(project);
  }

  getProjectById(id) {
    const task = this.tasks.filter((product) => product.id === id);
    console.log(task);
    return task[0];
  }
}

const storage = new Storage();
export default storage;
