let id = 0;

export default class Task {
  constructor(title, dueDate, desc, todos) {
    this.title = title;
    this.dueDate = dueDate;
    this.desc = desc;
    this.todos = [...todos];
    this.value = title;
    this.checkStatus;
    this.priority;
    this.id = id += 1;
  }

  setTodos([...args]) {
    this.todos = [...args];
    console.log({ 'set todo': 'set!', todos: this.todos });
  }
}
