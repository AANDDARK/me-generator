import Router from "./utils/router.js";
import mainPage from "@pages/main.template?raw";
const router = Router();

router.addRoute("/", async () => {
  document.body.innerHTML = mainPage;
  await import("./src/core/ui/widgets/webcomponents/app/main.js");
  await import("./src/core/ui/script/main.js")
});

router.handleRoute("/");
