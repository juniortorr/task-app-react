class Storage {
  constructor() {
    this.projects = [];
  }

  getProjects() {
    return this.projects;
  }
  addProject(project) {
    this.projects.push(project);
  }

  getProjectById(id) {
    const project = this.projects.filter((proj) => proj.id === id);
    console.log(project);
    return project[0];
  }
}

const storage = new Storage();
export default storage;
