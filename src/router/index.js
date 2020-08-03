import Vue from "vue";
import VueRouter from "vue-router";
// import Movies from "../views/Movies.vue";
import Episodes from "../views/Episodes.vue";
import TvShows from "../views/TvShows.vue";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/seasons",
        name: "seasons",
    },
    {
        path: "/episode",
        name: "Episode",
        component: Episodes 
    },
    {
        path: "/movies",
        name: "Movies",
        component: TvShows 
    }
];

const router = new VueRouter({
    routes
});

export default router;
