let id = 0;

export default class Project {
  constructor(title) {
    this.title = title;
    this.tasks = [];
    this.id = id += 1;
    console.log(this);
  }
}