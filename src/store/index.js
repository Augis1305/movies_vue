import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import {
    config
} from "../config/config";
// import _ from "lodash";

Vue.use(Vuex, axios);

const url = "https://api.themoviedb.org/3/";
const API_KEY = config.API_KEY;

/* eslint-disable */
export default new Vuex.Store({
    state: {
        allMovies: "no movies",
        upcomingMovies: {}, 
        popularMovies: {},
        numberOfItems: 10, 
    },

    actions: {
        async getUpcomingMoviesFromAPI(state) {
            await axios.get(url + "movie/upcoming?api_key=" + API_KEY).then(response => {
                state.commit("getUpcomingMovies", response.data.results);
            }).catch(error => {
                console.log(error);
            })
        },

        async getPopularMoviesFromAPI(state) {
            await axios.get(url + "movie/popular?api_key=" + config.API_KEY).then(response => {
                state.commit("getPopularMovies", response.data.results);
            }).catch(error => {
                console.log(error);
            })
        }
    },

    mutations: {
        getUpcomingMovies(state, payload) {
            state.upcomingMovies = payload;
        },
        getPopularMovies(state, payload) {
            state.popularMovies = payload;
        }
    },

})