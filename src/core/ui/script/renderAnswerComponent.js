import TaskService from "../../usecase/TaskService.js";

const service = TaskService.getInstance();

// Wait for components to be defined
await customElements.whenDefined('start-screen');
await customElements.whenDefined('answer-field');

console.log("Components ready, setting up event listeners");

// Handle start event
document.body.addEventListener("start", () => {

  
  const { shape, task } = service.generateTask();

  
  const answerEl = document.getElementById("answer-el");
  
  if (answerEl) {
    answerEl.innerHTML = `
      <span>write the rounded number</span>
      <answer-field>
        <span slot="question">${task.text}</span>
      </answer-field>
    `;

  }
});

document.body.addEventListener("check-answer", (e) => {

  const userAnswer = e.detail.answer;
  const isCorrect = service.checkAnswer(userAnswer);
  
  if (isCorrect) {
    // Generate next task
    document.body.dispatchEvent(new CustomEvent("start", {
      bubbles: true,
      composed: true
    }));
  } else {
    console.log("Wrong answer, try again");

  }
});

