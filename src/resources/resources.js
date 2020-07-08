import Vue from 'vue';
import {config} from '../config/config';
import axios from "axios";

Vue.use(axios);
const baseURL = 'https://api.themoviedb.org/3/';

export const HomeHttp = {

    getUpcomingMovies: () => {
        return axios.get(baseURL + 'movie/upcoming?api_key=' + config.API_KEY);
    },

    getPopularMovies: () => {
        return axios.get(baseURL + 'movie/popular?api_key=' + config.API_KEY);
    },
}

export const MovieHttp = {

    getMovie: (id) => {
        return axios.get('movie/' + id + '?api_key=' + config.API_KEY);
    },
}