import startScreen from "../../template/startScreen.template?raw";

class StartScreen extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    
    const template = document.createElement('template');
    template.innerHTML = startScreen;
    shadow.appendChild(template.content.cloneNode(true));
  }
  
  connectedCallback() {
    const button = this.shadowRoot.getElementById("start-button");
    
    if (button) {
      button.addEventListener("click", () => {
        console.log("Start button clicked");
        

        this.dispatchEvent(new CustomEvent("start", {
          bubbles: true,      
          composed: true, 
        }));

        requestAnimationFrame(() => {
          this.style.display = 'none';
        });
      });
    }
  }
}

customElements.define("start-screen", StartScreen);