import Vue from "vue";
import VueRouter from "vue-router";
import Movies from "../views/Movies.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
    },
    {
        path: "/seasons",
        name: "seasons",
    },
    {
        path: "/episode",
        name: "Episode",
        component: Movies
    }
];

const router = new VueRouter({
    routes
});

export default router;
