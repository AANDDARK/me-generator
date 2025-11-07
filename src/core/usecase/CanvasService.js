export default class CanvasService{
     static #instance = null;
     #canvas;
     #ctx;
     #scale = 5; // Scale factor for drawing
      startX = 100;
      startY = 100;
     constructor(){
        if (CanvasService.#instance) {
          return CanvasService.#instance;
        }
        CanvasService.#instance = this;
     }
     
     /**
      * Initialize canvas context
      * @param {string} canvasId
      */
     init(canvasId) {
        this.#canvas = document.getElementById(canvasId);
        if (!this.#canvas) {
          throw new Error(`Canvas with id "${canvasId}" not found`); // Fixed: was Error` instead of Error(
        }
        this.#ctx = this.#canvas.getContext("2d");
        
        // Set canvas size
        this.#canvas.width = 400;
        this.#canvas.height = 400;
        
        // Set drawing styles
        this.#ctx.strokeStyle = "#2563eb";
        this.#ctx.lineWidth = 2;
        this.#ctx.font = "14px Arial";
     }
     
     /**
      * @param {string} shape 
      */
     write(shape, sizes){
        if (!this.#ctx) { // Added check
          console.error("Canvas not initialized");
          return;
        }
        
        switch(shape){
            case "square": 
                this.#writeSquare(this.#ctx, sizes); // Use this.#ctx instead of ctx parameter
                break;
            case "rectangle": 
                this.#writeRectangle(this.#ctx, sizes);
                break;
            case "rhombus": 
                this.#writeRhombus(this.#ctx, sizes);
                break;   
        }
     }
     
     /**
      * @param {CanvasRenderingContext2D} ctx
      * @param {number[]} sizes  
      */
     #writeSquare(ctx, sizes) {
        const size = sizes[0] * this.#scale;
        const startX = 100;
        const startY = 100;
  
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(startX + size, startY);         // Top edge
        ctx.lineTo(startX + size, startY + size);  // Right edge
        ctx.lineTo(startX, startY + size);         // Bottom edge
        ctx.closePath();                           // Left edge and close
        ctx.stroke();
     }
     /**
      * 
      * @param {CanvasRenderingContext2D} ctx 
      * @param {number[]} sizes 
      */
     #writeRectangle(ctx, sizes) {
        const startX = 100;
        const startY = 100;
        // Apply scale immutably
        const width = sizes[0] * this.#scale;
        const height = sizes[1] * this.#scale;
  
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(startX + width, startY);           // Top edge
        ctx.lineTo(startX + width, startY + height);  // Right edge
        ctx.lineTo(startX, startY + height);          // Bottom edge
        ctx.closePath();                              // Left edge and close
        ctx.stroke();
     }
     #writeRhombus(ctx, sizes) {
        const side = sizes[0] * this.#scale;
        const angleDeg = sizes[1];
        const angleRad = (angleDeg * Math.PI) / 180;
        const startX = 100;
        const startY = 100;
  
        // Calculate the four points of the rhombus
        const x2 = startX + side;
        const y2 = startY;
  
        const x3 = x2 + side * Math.cos(angleRad);
        const y3 = y2 + side * Math.sin(angleRad);
  
        const x4 = startX + side * Math.cos(angleRad);
        const y4 = startY + side * Math.sin(angleRad);
  
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(x2, y2);
        ctx.lineTo(x3, y3);
        ctx.lineTo(x4, y4);
        ctx.closePath();
        ctx.stroke();
    }
   }