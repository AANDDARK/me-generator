import Square from "../domain/squre.js";
import Rectangle from "../domain/rectangle.js";
import Rhombus from "../domain/rhombus.js";
import Task from "../domain/Task.js";
import generator, { randomShape } from "../infrastructure/generator.js";

class TaskService {
  static #instance = null;
  #currentTask;
  #currentShape;

  constructor() {
    if (TaskService.#instance) {
      return TaskService.#instance;
    }
    this.#currentTask = null;
    this.#currentShape = null;
    TaskService.#instance = this;
  }
  /**
   * 
   * @returns {TaskService}
   */
  static getInstance() {
    if (!TaskService.#instance) {
      TaskService.#instance = new TaskService();
    }
    return TaskService.#instance;
  }

  generateTask() {
    const shapeType = randomShape();
    const taskData = generator(shapeType);

    const shapeHandlers = {
      square: () => this.#handleSquare(taskData),
      rectangle: () => this.#handleRectangle(taskData),
      rhombus: () => this.#handleRhombus(taskData),
    };
    
    const handler = shapeHandlers[shapeType];
    if (!handler) {
      throw new Error(`Unsupported shape type: ${shapeType}`);
    }

    const result = handler();
    this.#currentShape = result.shape;
    this.#currentTask = result.task;
    return result;
  }

  #handleSquare(taskData) {
    // console.log(taskData.digits) 
    const shape = new Square(taskData.digits);
    const answer = this.#getShapeAnswer(shape, taskData.on);

    return {
      shape,
      task: new Task(taskData.question, String(answer)),
    };
  }

  #handleRectangle(taskData) {
    const shape = new Rectangle("rectangle", taskData.digits);
    const answer = this.#getShapeAnswer(shape, taskData.on);

    return {
      shape,
      task: new Task(taskData.question, String(answer)),
    };
  }

  #handleRhombus(taskData) {
    const shape = new Rhombus("rhombus", taskData.digits, taskData.angle);
    const answer = this.#getShapeAnswer(shape, taskData.on);

    return {
      shape,
      task: new Task(taskData.question, String(answer)),
    };
  }

  #getShapeAnswer(shape, taskType) {
    const methodMap = {
      onperimeter: "perimeter",
      onarea: "area",
      ondiagonal: "diagonal",
    };

    const method = methodMap[taskType];
    if (!method) {
      throw new Error(`Unsupported task type: ${taskType}`);
    }

    const result = shape[method]();
    
    if (typeof result === "object" && result !== null) {
      return result.diagonal1 || result.diagonal2 || result;
    }
    
    return result;
  }

  getCurrentTask() {
    return this.#currentTask;
  }

  getCurrentShape() {
    return this.#currentShape;
  }

  checkAnswer(userAnswer) {
    if (!this.#currentTask) {
      throw new Error("No active task");
    }
    return this.#currentTask.check(String(userAnswer));
  }
}

export default TaskService;