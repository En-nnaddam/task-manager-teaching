export default class Presenter {
  constructor() {
    this.taskList = document.getElementById("task-list");
    this.taskAddInput = document.getElementById("task-add-input");
  }

  /**
   * @param {Task[]} tasks
   */
  renderTasks(tasks) {
    const tasksElements = tasks.map(this.#createTask);

    const renderTask = (task) => this.taskList.appendChild(task);
    tasksElements.map(renderTask);
  }

  /**
   * @param {Task} task
   * @returns node
   */
  #createTask(task) {
    const taskElement = document.createElement("div");
    const taskNameElement = document.createElement("span");

    taskNameElement.textContent = task.getName();
    taskElement.className = "task";

    taskElement.appendChild(Presenter.createCircleIcon());
    taskElement.appendChild(taskNameElement);

    return taskElement;
  }

  static createCircleIcon() {
    const svg = document.createElement("svg");
    const use = document.createElement("use");
    use.setAttribute("xlink:href", "./assets/circle.svg#circle");

    svg.appendChild(use);
    return svg;
  }
}
