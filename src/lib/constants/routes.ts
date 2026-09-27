import type {AppRoute} from "#lib/types/AppRoute";

export const routes = new Map<string, AppRoute>([
    ["home", {name: "Home", path: "/", fullPath: "/"}],
    ["about", {name: "About", path: "about", "fullPath": "/about"}],
    ["publications", {name: "Publications", path: "publications", fullPath: "/publications"}],
])

export const NOT_FOUND_ROUTE: AppRoute = {
    name: "Page not found",
    path: "*",
    fullPath: "*"
}