import Router from "./utils/router.js";
import mainPage from "@pages/main.template?raw"
const router = Router();

router.addRoute("/", async() => {
    await import('./src/elements/app/main.js');
    document.body.innerHTML = mainPage;
});

router.handleRoute("/")