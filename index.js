import Presenter from "./Presenter.js";
import Task from "./Task.js";

const task1 = new Task("reading a book", "2023-06-07");
const task2 = new Task("wathcing", "2023-06-15");
const task3 = new Task("sport", "2023-06-09");

const presenter = new Presenter();

presenter.add(task1);
presenter.add(task2);
presenter.add(task3);

presenter.renderTasks();
