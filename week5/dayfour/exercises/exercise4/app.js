import { TodoList } from "./todo.js";

const myTodoList = new TodoList();

myTodoList.addTask("Buy groceries");
myTodoList.addTask("Finish coding assignment");
myTodoList.addTask("Call Alice");

myTodoList.completeTask(1);

myTodoList.listTasks();
