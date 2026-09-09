
class TaskManager {
    constructor(currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;
    }

    addTask(name, description, dueDate, priorida, status) {
        this.currentId++;

        this.tasks.push({
            id: this.currentId,
            name: name,
            description: description,
            dueDate: dueDate,
            prioridad: priorida,
            status: 'Por Hacer'
        });
    }

    deleteTask(taskId) {
        const newTasks = [];
        for (let task of this.tasks) {

            if (task.id !== taskId) {
                newTasks.push(task);
            }
        }
        this.tasks = newTasks;
    }

    save() {

        const tasksJson = JSON.stringify(this.tasks);
        localStorage.setItem('tasks', tasksJson);

        const currentId = String(this.currentId);
        localStorage.setItem('currentId', currentId);
    }

    load() {

        const tasksJson = localStorage.getItem('tasks');

        if (tasksJson) {
            this.tasks = JSON.parse(tasksJson);
        }

        const currentId = localStorage.getItem('currentId');

        if (currentId) {
            this.currentId = Number(currentId);
        }
    }

}

