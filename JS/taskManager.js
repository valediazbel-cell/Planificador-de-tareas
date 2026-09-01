
class TaskManager {
 constructor(currentId = 0) {
 this.tasks = [];
 this.currentId = currentId;
 }

 addTask(name,description,dueDate,priorida,status){
    this.currentId ++;

    this.tasks.push({
        id:this.currentId,
        name:name,
        description:description,
        dueDate:dueDate,
        prioridad:priorida,
        status:'PORHACER'
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
 
}

