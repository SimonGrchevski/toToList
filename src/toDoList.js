import Task from './task.js';
export default class ToDoList {
  constructor() {
    this.tasks = [];
  }

  update(localStorage) {
    this.tasks = localStorage;
  }

  get() {
    return this.tasks;
  }

  toggleComplete(index) {
    this.tasks[index].completed = !this.tasks[index].completed;
  }

  pushTask(desc,completed,id) {
    this.tasks.push(new Task(desc,completed, id));
    return this;
  }

  swap(drag,target) {
    const swap = JSON.parse( JSON.stringify(this.tasks[drag.dataset.id]));
    this.tasks = this.tasks.filter(task => task != this.tasks[drag.dataset.id] );
    this.tasks.splice(target, 0, swap);
    return this;
  }

  orderTask() {
    this.tasks.forEach((task, i) => task.id = i+1);
  }

  remove(id) {
    this.tasks.splice(id,1);
    return this;
  }

  removeCheckedTask() {
    this.tasks= this.tasks.filter(task => !task.completed );
    return this;
  }
}