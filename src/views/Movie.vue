<template>
    <div class="content">
        <div class="item-full" v-if="movieLoaded">
            <div class="item-image">
                <transition name="fade" mode="out-in">
                    <img
                        :src="posterPath + this.movie.poster_path"
                        :alt="movie.title"
                        class="item-image"
                    />
                </transition>
            </div>
            <div class="item-data">
                <h3 class="item-title">{{ movie.title }}</h3>
                <p>{{ movie.overview }}</p>
                <div class="item-info">
                    <div class="item-info-col">
                        <p>Original Release:</p>
                        <span class="item-info-value">{{
                            movie.release_date ? movie.release_date : "/"
                        }}</span>
                    </div>
                    <div class="item-info-col">
                        <p>Running time</p>
                        <span class="item-info-value"
                            >{{ movie.runtime ? movie.runtime : "-" }} min</span
                        >
                    </div>
                    <div class="item-info-col">
                        <p>Box Office</p>
                        <span class="item-info-value">{{
                            formatedRevenue
                        }}</span>
                    </div>
                    <div class="item-info-col">
                        <p>Rating</p>
                        <span class="item-info-value">{{
                            formatedRating
                        }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { MovieHttp } from "../resources/resources";
export default {
    name: "Movie",
    data() {
        return {
            movie: "",
            movieId: "",
            movieLoaded: false,
        };
    },
    // Pass these props
    props: ["posterPath", "backgroundPath"],
    methods: {
        init(id) {
            this.movieId = id;
            this.$emit("loadingStart");
            this.fetchData(this.movieId);
        },
        fetchData(id) {
            var self = this;

            MovieHttp.getMovie(id).then((movie) => {
                this.movie = movie.data;
                this.movieLoaded = true;

                self.$emit(
                    "movieLoaded",
                    this.backgroundPath + this.movie.backdrop_path
                );
                setTimeout(() => {
                    self.$emit("loadingEnd");
                }, 1000);
            }),
                (error) => {
                    console.log(error);
                };
        },
    },
    computed: {
        formatedRevenue() {
            return this.movie.revenue
                ? "$" +
                      this.movie.revenue
                          .toFixed(0)
                          .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
                : "$0";
        },
        formatedRating() {
            return this.movie.vote_average
                ? this.movie.vote_average + " / 10"
                : "-";
        },
    },
    watch: {
        $route(to, from) {
            if (to.params.id !== from.params.id) {
                this.init(to.params.id);
            }
        },
    },
    created() {
        this.init(this.$route.params.id);
    },
    beforeDestroy() {
        this.$emit("resetBg");
    },
};
</script>
