class Task {
    constructor({ id, text, isCompleted }) {
        this.id = id;
        this.text = text;
        this.isCompleted = isCompleted;

        this.el = this._createElement();
    }

    setEventListeners() {
        this.input = document.getElementById(`task-input-${this.id}`);
        this.deleteButton = document.getElementById(`task-delete-${this.id}`);
        console.log(this);
        this.deleteButton.addEventListener('click', () => this.delete());
        this.input.addEventListener('change', () => this.check());
    }

    check() {
        console.log(this);
        this.isCompleted = !this.isCompleted;
        if (this.input) {
            this.input.checked = this.isCompleted;
        }
    }

    delete() {
        this.el.remove();
        delete this;
    }

    _createElement() {
        const li = document.createElement('li');
        li.id = `task-item-${this.id}`;
        li.className = 'task-item';

        li.innerHTML = this._getTaskContent();

        return li;
    }

    _getTaskContent() {
        return `
            <input type='checkbox' id='task-input-${this.id}' />
            <label for='task-input-${this.id}'>${this.text}</label>
            <button id='task-delete-${this.id}'>Delete</button>
        `;
    }
}

export default Task;
