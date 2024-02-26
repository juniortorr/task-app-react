let id = 0;

export default class Task {
  constructor(title, formattedDueDate, desc, todos, preFormatDueDate) {
    this.title = title;
    this.dueDate = formattedDueDate;
    this.desc = desc;
    this.todos = [...todos];
    this.value = title;
    this.checkStatus;
    this.priority;
    this.id = id += 1;
    this.preFormatDueDate = preFormatDueDate;
  }

  setTodos([...args]) {
    this.todos = [...args];
    console.log({ 'set todo': 'set!', todos: this.todos });
  }

  setValues(title, dueDate, desc, todos) {
    this.title = title;
    this.dueDate = dueDate;
    this.desc = desc;
    this.todos = todos;
  }
}
