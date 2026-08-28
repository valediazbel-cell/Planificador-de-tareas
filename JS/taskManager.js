
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
        priorida:priorida,
        status:'PORHACER'
    });
 }

 
}

