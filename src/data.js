class Storage {
  constructor() {
    this.tasks = ['clean'];
  }

  getTasks() {
    return this.tasks;
  }
}

const storage = new Storage();
export default storage;
