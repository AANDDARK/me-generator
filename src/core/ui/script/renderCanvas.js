
import CanvasService from "../../usecase/CanvasService.js";


// Wait for canvas element to be available
const canvas = document.getElementById("geo-canvas");
let shape;
document.body.addEventListener("renderCanvas", (e) => {
  shape = e.detail.shape;
if (canvas) {
  const service = new CanvasService();
  service.init("geo-canvas");

    service.write(shape.name, shape.sides)
} else {
  console.error("Canvas element not found");
}
})