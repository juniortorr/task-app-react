class Storage {
  constructor() {
    this.tasks = [{ title: 'clean' }];
  }

  getTasks() {
    return this.tasks;
  }
  addProject(project) {
    this.tasks.push(project);
  }
}

const storage = new Storage();
export default storage;
