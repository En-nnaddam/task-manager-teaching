import { generateId } from "./utils/index.js";

export default class Task {
  #id;
  #name;
  #dueDate;
  #status;

  static statuses = {
    todo: "todo",
    inProgress: "in progress",
    completed: "completed",
  };

  constructor(name, dueDate) {
    this.#id = generateId();
    this.#name = name;
    this.#dueDate = new Date(dueDate);
    this.#status = Task.statuses.todo;

    Object.preventExtensions(this);
  }

  getId() {
    return this.#id;
  }

  getName() {
    return this.#name;
  }

  setName(name) {
    this.#name = name;
  }

  getDueDate() {
    return this.#dueDate;
  }

  setDueDate(dueDate) {
    this.#dueDate = new Date(dueDate);
  }

  getStatus() {
    return this.#status;
  }

  markAsTodo() {
    this.#status = Task.statuses.todo;
  }

  markAsInProgress() {
    this.#status = Task.statuses.inProgress;
  }

  markAsCompleted() {
    this.#status = Task.statuses.completed;
  }
}
