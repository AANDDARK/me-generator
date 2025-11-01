
import Square from "../domain/squre";
import Task from "../domain/Task";
import generator, { randomShape } from "../infrastructure/generator";


class TaskService{
    #currentTask;
    #currentShape
    constructor(){
        
    }
    #createShape(){
        const shape = randomShape();
        const task = generator(shape)
        switch(shape){
            case "square": {
                if(task.on === "onperimeter"){
                    return {
                        shape: new Square(task.digits),
                        task: new Task(task.question, new Square(task.digits).perimeter());
                    }
                }
            }
        }
    }


}

export default TaskService;
