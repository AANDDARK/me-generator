import Router from "./utils/router";
import mainPage from "@pages/main.template?raw"
const router = Router();

router.addRoute("/", () => {
    document.body.innerHTML = mainPage;
});

router.handleRoute("/")