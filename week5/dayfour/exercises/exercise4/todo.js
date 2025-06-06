export class TodoList {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    const newTask = { text: task, completed: false };
    this.tasks.push(newTask);
  }

  completeTask(index) {
    if (index >= 0 && index < this.tasks.length) {
      this.tasks[index].completed = true;
    } else {
      console.log("Invalid task index");
    }
  }

  listTasks() {
    console.log("\nTodo List:");
    this.tasks.forEach((task, idx) => {
      const status = task.completed ? "[✔]" : "[ ]";
      console.log(`${idx + 1}. ${status} ${task.text}`);
    });
  }
}
