import Task from "./Task.js";

export default class Manager {
  #tasks;

  constructor() {
    this.#tasks = [];
    Object.preventExtensions(this);
  }

  getTasks() {
    return this.#tasks;
  }

  add(task) {
    if (task instanceof Task) this.#tasks = [...this.#tasks, task];
    else console.error("invalid task provided");
  }

  #find(taskId) {
    return this.#tasks.find((task) => task.getId() === taskId);
  }

  editName(taskId, name) {
    const task = this.#find(taskId);

    if (task) task.setName(name);
    else console.error("unknown task id");
  }

  editDueDate(taskId, dueDate) {
    this.#find(taskId)?.setDueDate(dueDate);
  }

  markAsTodo(taskId) {
    this.#find(taskId)?.markAsTodo();
  }

  markAsInProgress(taskId) {
    this.#find(taskId)?.markAsInProgress();
  }

  markAsCompleted(taskId) {
    this.#find(taskId)?.markAsCompleted();
  }

  delete(taskId) {
    this.#tasks = this.#tasks.filter((task) => task.getId() !== taskId);
  }

  filterByDueDate(dueDate) {
    const date = new Date(dueDate);

    return this.#tasks.filter(
      (task) => task.getDueDate().getTime() === date.getTime()
    );
  }

  filterByStatus(status) {
    return this.#tasks.filter((task) => task.getStatus() === status);
  }
}
