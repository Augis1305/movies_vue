/* eslint-disable */
<template>
    <div class="content">
        <div class="page-title">
            <div>
                <h2>Popular Movies</h2>
            </div>
        </div>
        <flickity
            v-if="sliderInit"
            ref="flickity-popular"
            :options="flickityOptions"
        >
            <div
                class="item"
                v-for="(movie, index) in popularMoviesFiltered"
                :class="{ active: index == 0 }"
                @click="loadMovie(movie.id)"
                :key="index"
            >
                <img
                    :src="posterPath + movie.poster_path"
                    class="item-image"
                    :alt="movie.title"
                />
                <div class="item-title">
                    <div class="center-align">
                        <div class="center-align-inner">
                            <p>{{ movie.title }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </flickity>

        <div class="page-title">
            <h2>Upcoming Movies</h2>
        </div>
        <flickity
            v-if="sliderInit"
            ref="flickity-upcoming"
            :options="flickityOptions"
        >
            <div
                class="item"
                v-for="(movie, index) in upcomingMoviesFiltered"
                @click="loadMovie(movie.id)"
                :class="{ active: index == 0 }"
                :key="index"
            >
                <img
                    :src="posterPath + movie.poster_path"
                    class="item-image"
                    :alt="movie.title"
                />
                <div class="item-title">
                    <div class="center-align">
                        <div class="center-align-inner">
                            <p>{{ movie.title }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </flickity>
    </div>
</template>

<script>
/* eslint-disable */
import { HomeHttp } from "../resources/resources";
import _ from "lodash";
import Flickity from "vue-flickity";
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
    components: {
        Flickity,
    },
    data() {
        return {
            sliderInit: false,
            numberOfItems: 10,
        };
    },
    props: ["posterPath", "backgroundPath", "flickityOptions"],
    computed: {
        upcomingMoviesFiltered() {
            return _.sampleSize(
                this.$store.state.upcomingMovies,
                this.numberOfItems
            );
        },
        popularMoviesFiltered() {
            return _.sampleSize(
                this.$store.state.popularMovies,
                this.numberOfItems
            ); // Pluck only N random items from the array
        },
    },
    methods: {
        fetchDataNew() {
            this.$store.dispatch("getUpcomingMoviesFromAPI").then(() => {
                this.$store.dispatch("getPopularMoviesFromAPI");
                this.$emit("loadingEnd");
                this.sliderInit = true;
            });
        },

        loadMovie(id) {
            this.$router.push({ name: "movie", params: { id: id } }); // Load the movie with the given id
        },
    },
    created() {
        this.$emit("resetBg"); // Change to default background if we go to the homepage
        this.$emit("loadingStart"); // Initiate loading
        this.$store.dispatch("getUpcomingMoviesFromAPI");
        this.$store.dispatch("getPopularMoviesFromAPI");
        this.fetchDataNew();
    },
};
</script>

<style lang="scss"></style>
