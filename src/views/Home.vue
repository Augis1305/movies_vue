<template>
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col-md-5">
        <h2 class="text-center">Popular Movies</h2>
        <div class="col-md-auto">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-ride="carousel"
            data-interval="1400"
          >
            <div class="carousel-inner">
              <div
                class="carousel-item"
                v-for="(movie, index) in popularMoviesFiltered"
                :key="index"
                :class="{ active: index==0}"
              >
                <img
                  class="img-fluid"
                  :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
                  alt
                />
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button col"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { HomeHttp } from "../resources/resources";
import _ from "lodash";

export default {
  name: "Home",
  data() {
    return {
      upcomingMovies: [],
      popularMovies: [],
      numberOfItems: 10,
      sliderInit: false,
      message: ""
    };
  },
  props: ["sliderOptions", "posterPath"],
  computed: {
    upcomingMoviesFiltered() {
      return _.sampleSize(this.upcomingMovies, this.numberOfItems);
    },
    popularMoviesFiltered() {
      return _.sampleSize(this.popularMovies, this.numberOfItems);
    }
  },
  methods: {
    fetchData() {
      let self = this;

      HomeHttp.getUpcomingMovies().then(movies => {
        this.upcomingMovies = movies.data.results;

        HomeHttp.getPopularMovies().then(
          movies => {
            this.popularMovies = movies.data.results;
            self.$emit("loadingEnd");
            this.sliderInit = true;
          },
          error => {
            console.log(error);
          }
        );
      });
    },
    loadMovie(id) {
      this.$router.push({ name: "movie", params: { id: id } });
    }
  },
  created() {
    this.$emit("resetBg");
    this.$emit("loadingStart");
    this.fetchData();
  }
};
</script>

<style lang="scss">
.text-center{
  text-align: center;
}
</style>
