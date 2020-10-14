import Vue from "vue";
import VueRouter from "vue-router";
// import Movies from "../views/Movies.vue";
import Episodes from "../views/Episodes.vue";
// import TvShows from "../views/TvShows.vue";
import Home from "../views/Home.vue";
import Movie from "../views/Movie.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/seasons",
    name: "recommended"
  },
  {
    path: "/episode",
    name: "about",
    component: Episodes
  },
  {
    path: "/movie/:id",
    name: "movie",
    component: Movie,
    props: true
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
