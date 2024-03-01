import { v4 as uuidv4 } from 'uuid';

export default class Task {
  constructor(title, dueDate, desc, todos, formattedDate) {
    this.title = title;
    this.dueDate = dueDate;
    this.desc = desc;
    this.todos = [...todos];
    this.value = title;
    this.checkStatus;
    this.priority;
    this.id = uuidv4();
    this.formattedDate = formattedDate;
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
