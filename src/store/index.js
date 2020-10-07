import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import {
    config
} from "../config/config";
// import _ from "loadash";

Vue.use(Vuex, axios);

const url = "https://api.themoviedb.org/3/";
const API_KEY = config.API_KEY;

/* eslint-disable */
export default new Vuex.Store({
    state: {
        allMovies: "no movies",
        upcomingMovies: [],
    },

    actions: {
        getUpcomingMovies(state) {
            axios.get(url + "movie/upcoming?api_key=" + API_KEY).then(response => {
                state.commit("getUpcomingMovies", response.data.results)
            }).catch(error => {
                console.log(error);
            })
        }
    },

    mutations: {
        getUpcomingMovies(state, payload) {
            // state.allMovies = payload;
            // state.upcomingMovies.push(payload);
            console.log(payload)
        }
    },

    getters: {
        getAllMovies: state => state.allMovies,

    }
})

// import {
//     config
// } from "../config/config";
// import axios from "axios";
// import _ from "lodash";

// Vue.prototype.$axios = axios;
// Vue.use(Vuex, axios);

// const store = new Vuex.store({
//     state: {
//         baseURL: "https://api.themoviedb.org/3/",
//         API_KEY: config.API_KEY,
//         upcomingMovies: [],
//         popularMovies: [],
//         numberOfItems: 10,
//     },

// Perform data mutations here. For example pushing data into array
// Is syncrous
//     mutations: {
//         SET_UPCOMING_EVENTS(state, events) {
//             state.upcomingMovies = events;
//         }
//     },


//     // Asyncronous
//     // Fetching data here.
//     actions: {
//         async getUpcomingMovies(state) {
//             await axios.get(state.baseURL + "movie/upcoming?api_key=" + state.API_KEY).then(
//                 (movies) => {
//                     console.log(state.baseURL)
//                     const r = movies.data.results;
//                     movies.commit("SET_UPCOMING_EVENTS", r);
//                 }).catch(error => {
//                     console.log(error);
//                 })
//         }
//     },

//     // Getters - what we want to get from this
//     // Will want to get list of upcomingMovies, popularMovies, 
//     getters: {
//         getBaseUrl: state => state.baseURL,

//     }
// });