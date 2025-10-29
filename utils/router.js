export default function Router() {
    const routes = {};
  

    function handleRoute(path) {
        const route = routes[path];
        if (route) {
            route(); 
        } else {
            console.warn("Маршрут не найден:", path);
        }
    }

    /**
     * @param {string} path
     * @param {Function} callback
     */
    function addRoute(path, callback) {
        routes[path] = callback;
    }

    /**
     * @param {string} path
     */
    function push(path) {
        history.replaceState({}, "", path);
        handleRoute(path);
    }

    /**
     * @param {string} path
     */
    function go(path) {
        history.pushState({}, "", path);
        handleRoute(path);
    }


    window.addEventListener("popstate", () => {
        handleRoute(new URL(window.location.href).pathname);
    });


    return {
        addRoute,
        push,
        go,
        handleRoute
    };
}
