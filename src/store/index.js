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
        upcomingMovies: [],
        filteredUpcomingMovies: [],
        numberOfItems: 10, 
    },

    actions: {
        getUpcomingMoviesFromAPI(state) {
            axios.get(url + "movie/upcoming?api_key=" + API_KEY).then(response => {
                state.commit("getUpcomingMovies", response.data.results)
            }).catch(error => {
                console.log(error);
            })
        },
    },

    mutations: {
        getUpcomingMovies(state, payload) {
            state.upcomingMovies.push(payload);
            console.log(payload)
        },
        upcomingMoviesFiltered(state){
            console.log("something")
            // return state.filteredUpcomingMovies.push(_.sampleSize(state.filteredUpcomingMovies, state.numberOfItems))
            // state.filteredUpcomingMovies.push(payload);
            // console.log(_.sampleSize(state.upcomingMovies, state.numberOfItems))
        },
    },

    getters: {
        getAllMovies: state => state.allMovies,
        getAllUpcomingMovies: state => state.upcomingMovies,
        getFitleredItems: state => state.filteredUpcomingMovies,
    }
})