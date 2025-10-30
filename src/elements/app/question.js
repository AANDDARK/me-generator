import generator from "../../scripts/generator-questions/main";


const template = document.createElement('template');
template.innerHTML = `
  <style>
          span {
                font-size: 30px;
                font-weight: bold;
          }
  </style>
  <span id="question"> </span>
`;

class QuestionSpan extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));
  }
  
  connectedCallback(){
    // Get the span element from shadow DOM
    const questionSpan = this.shadowRoot.getElementById('question');
    // Generate and insert the question
    questionSpan.textContent = generator();
  }
}

customElements.define("question-span", QuestionSpan);
export default QuestionSpan;