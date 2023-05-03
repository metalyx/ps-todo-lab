import Task from './Task.js';
import TaskList from './TaskList.js';

const addTaskInput = document.getElementById('addTaskInput');
const addTaskButton = document.getElementById('addTaskButton');

let lastTaskId = 0;

const taskList = new TaskList('tasks-container');

addTaskButton.addEventListener('click', () => {
    const text = addTaskInput.value;
    const isCompleted = false;
    const id = lastTaskId + 1;
    lastTaskId += 1;

    const taskItem = new Task({ id, text, isCompleted });
    taskList.addTask(taskItem);
});
