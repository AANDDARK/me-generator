const template = document.createElement('template');
template.innerHTML = `
  <style>
               span {
                font-size: 30px;
                color: blue;
                font-weight: bold;
                border: 2px solid green;
                padding: 10px;
                display: inline-block;
                color: red;
            }
  </style>
  <span><slot name="question"></slot></span>
`;

class QuestionSpan extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("question-span", QuestionSpan);


export default QuestionSpan;