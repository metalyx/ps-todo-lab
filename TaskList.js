class TaskList {
    constructor(containerId) {
        this.list = [];
        this.el = document.getElementById(containerId);
    }

    addTask(taskInstance) {
        this.list.push(taskInstance);
        this.el.appendChild(taskInstance.el);
        taskInstance.setEventListeners();
    }
}

export default TaskList;
