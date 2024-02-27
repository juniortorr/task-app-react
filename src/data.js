class Storage {
  constructor() {
    this.projects = [];
  }

  getProjects() {
    return this.projects;
  }

  setProjects(arr) {
    this.projects = arr;
  }

  deleteProject(project) {
    this.projects = this.projects.filter((proj) => proj.id !== project.id);
    localStorage.setItem('projects', JSON.stringify(this.projects));
  }

  addProject(project) {
    this.projects.push(project);
    localStorage.setItem('projects', JSON.stringify(this.projects));
  }

  getProjectById(id) {
    const project = this.projects.filter((proj) => proj.id === id);
    console.log(project);
    return project[0];
  }
}

const storage = new Storage();
export default storage;
