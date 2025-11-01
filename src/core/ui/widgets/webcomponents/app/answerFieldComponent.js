import mainScreen from "../../template/answerField.template?raw";

class AnswerField extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    
    const template = document.createElement('template');
    template.innerHTML = mainScreen;
    shadow.appendChild(template.content.cloneNode(true));
  }
  
  connectedCallback() {
    const button = this.shadowRoot.getElementById("comp-button");
    
    if (button) {
      button.addEventListener("click", () => {
        
        this.dispatchEvent(new CustomEvent("check-answer", {
          bubbles: true,      
          composed: true,
          detail: {
            answer: this.shadowRoot.querySelector('input')?.value || ''
          }
        }));
      });
    }
  }
}

customElements.define("answer-field", AnswerField);