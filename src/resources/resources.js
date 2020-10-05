import Vue from "vue";
import {
    config
} from "../config/config";
import axios from "axios";

// Vue.use(axios);
Vue.prototype.$axios = axios;
const baseURL = "https://api.themoviedb.org/3/";

export const HomeHttp = {
    async getUpcomingMovies (){
        return await axios.get(baseURL + "movie/upcoming?api_key=" + config.API_KEY);
    },

    async getPopularMovies () {
        return await axios.get(baseURL + "movie/popular?api_key=" + config.API_KEY);
    }
};

export const MovieHttp = {
    async getMovie (id) {
        return await axios.get(baseURL + "movie/" + id + "?api_key=" + config.API_KEY);
    }
};

export const HeaderHttp = {
    
    async getMovies (keyword) {
        return await axios.get(baseURL + 'search/movie?query=' + keyword + '&api_key=' + config.API_KEY);
    }
};