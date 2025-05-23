const tasks = ['Vanilla JavaScript', 'Vue.js', 'React.js', 'Node.js'];
const taskForm = document.getElementById('taskForm');
const newTaskInput = document.getElementById('newTask');
const taskList = document.getElementById('taskList');
const clearBtn = document.getElementById('clearBtn');

        // Render initial tasks
renderTasks();

function addTask(event) {
    event.preventDefault();
    const taskText = newTaskInput.value.trim();
            
    if (taskText === '') {
        alert('Please enter a task');
        return;
    }
            
    tasks.push(taskText);
    newTaskInput.value = '';
    renderTasks();
}

function renderTasks() {
    taskList.innerHTML = '';
            
    tasks.forEach((task, index) => {
        const taskElement = document.createElement('div');
        taskElement.className = 'task';
                
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `task-${index}`;
        checkbox.checked = true; // Mark all initial tasks as completed
                
        const label = document.createElement('label');
        label.htmlFor = `task-${index}`;
        label.textContent = task;
                
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.innerHTML = '<i class="fas fa-times"></i>';
        deleteBtn.onclick = () => deleteTask(index);
                
        taskElement.appendChild(checkbox);
        taskElement.appendChild(label);
        taskElement.appendChild(deleteBtn);
                
        taskList.appendChild(taskElement);
    });
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}               

function clearTasks() {
    tasks.length = 0;
    renderTasks();
}

taskForm.addEventListener('submit', addTask);
clearBtn.addEventListener('click', clearTasks);