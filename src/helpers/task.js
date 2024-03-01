import { v4 as uuidv4 } from 'uuid';
import { format, addDays, differenceInCalendarDays, isBefore, isToday } from 'date-fns';

export default class Task {
  constructor(title, dueDate, desc, todos) {
    this.title = title;
    this.dueDate = dueDate;
    this.desc = desc;
    this.todos = [...todos];
    this.priority;
    this.id = uuidv4();
    this.formatDate();
    this.setPriority();
  }

  setTodos([...args]) {
    this.todos = [...args];
    console.log({ 'set todo': 'set!', todos: this.todos });
  }

  setPriority() {
    const today = format(new Date(), 'yyyy/MM/dd');
    console.log(today, this.formattedDate);
    if (isToday(this.formattedDate)) {
      this.priority = 'red';
    } else if (
      differenceInCalendarDays(this.formattedDate, today) <= 5 &&
      isBefore(today, this.formattedDate)
    ) {
      this.priority = 'yellow';
    } else if (
      differenceInCalendarDays(this.formattedDate, today) > 5 &&
      isBefore(today, this.formattedDate)
    ) {
      this.priority = 'green';
    } else {
      this.priority = 'purple';
    }
    return this.priority;
  }

  formatDate() {
    const addDay = addDays(this.dueDate, 1);
    this.formattedDate = format(addDay, 'yyyy/MM/dd');
  }

  setValues(title, dueDate, desc, todos) {
    this.title = title;
    this.dueDate = dueDate;
    this.desc = desc;
    this.todos = todos;
    this.formatDate();
  }
}
