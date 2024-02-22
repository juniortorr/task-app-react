let id = 0;

export default class Task {
  constructor(title, dueDate, desc) {
    this.title = title;
    this.dueDate = dueDate;
    this.desc = desc;
    this.list = [];
    this.value = title;
    this.checkStatus;
    this.priority;
    this.id = id += 1;
  }
}
