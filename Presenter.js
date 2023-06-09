import Manager from "./Manager.js";

export default class Presenter {
  constructor() {
    this.taskList = document.getElementById("task-list");
    this.taskAddInput = document.getElementById("task-add-input");
    this.manager = new Manager();
  }

  getManager() {
    return this.manager;
  }

  add(task) {
    this.manager.add(task);
  }

  clearTask() {
    this.taskList.innerHTML = "";
  }

  /**
   * @param {Task[]} tasks
   */
  renderTasks() {
    const tasksElements = this.manager
      .getTasks()
      .map((task) => this.#createTask(task, this));

    this.clearTask();

    const renderTask = (task) => this.taskList.appendChild(task);
    tasksElements.map(renderTask);
  }

  /**
   * @param {Task} task
   * @returns node
   */
  #createTask(task, presenter) {
    const taskElement = document.createElement("div");
    const taskNameElement = document.createElement("span");

    taskNameElement.textContent = task.getName();
    taskElement.className = "task";

    const statusIcon =
      task.getStatus() === "completed"
        ? Presenter.createCompletedIcon(task.getId(), presenter)
        : Presenter.createCircleIcon(task.getId(), presenter);

    taskElement.appendChild(statusIcon);
    taskElement.appendChild(taskNameElement);
    taskElement.appendChild(Presenter.createTrashIcon(task.getId(), presenter));

    return taskElement;
  }

  static createIcon(icon) {
    const img = document.createElement("img");
    img.alt = icon.alt;
    img.src = icon.src;
    img.className = icon.className;

    return img;
  }

  static createTrashIcon(taskId, presenter) {
    const icon = this.createIcon({
      alt: "trash",
      src: "./assets/trash.svg",
      className: "trash-icon",
    });

    icon.addEventListener("click", () => {
      presenter.manager.delete(taskId);
      presenter.renderTasks();
    });

    return icon;
  }

  static createCompletedIcon(taskId, presenter) {
    return this.createIcon({
      alt: "completed",
      src: "./assets/completed.svg",
      className: "completed-icon",
    });
  }

  static createCircleIcon(taskId, presenter) {
    const icon = this.createIcon({
      alt: "circle",
      src: "./assets/circle.svg",
      className: "circle-icon",
    });

    icon.addEventListener("click", () => {
      presenter.manager.markAsCompleted(taskId);
      presenter.renderTasks();

      console.log(presenter.manager.getTasks());
    });

    return icon;
  }
}
