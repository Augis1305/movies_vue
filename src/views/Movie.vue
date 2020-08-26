<template>
  <div class="container">
    <div class="card flex-row">
      <div class="card-header border-0">
        <img
          :src=" posterPath + movie.poster_path"
          alt="movie.title"
          class="image-size"
        />
      </div>
      <div class="card-body">
        <h3 class="card-title">{{ movie.title}}</h3>
        <p class="card-text flex-wrap">{{movie.overview}}</p>
        <p class>Original Release: {{movie.release_date ? movie.release_date : '/'}}</p>
        <p>Running time {{movie.runtime ? movie.runtime : '-'}} min</p>
        <p>Box Office {{ formatedRevenue}}</p>
        <p>Rating {{ formatedRating}}</p>
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
      movieLoaded: false
    };
  },
  props: ["posterPath", "backgroundPath"],
  methods: {
    init(id) {
      this.movieId = id;
      this.$emit("loadingStart");
      this.fetchData(this.movieId);
    },
    fetchData(id) {
      var self = this;

      MovieHttp.getMovie(id).then(movie => {
        this.movie = movie.data;
        this.movieLoaded = true;
        self.$emit("movieLoaded", "https://image.tmdb.org/t/p/original"+ this.movie.backdrop_path);
        setTimeout(() => {
          self.$emit("loadingEnd");
        }, 1000);
      }),
        error => {
          console.log(error);
        };
    }
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
      return this.movie.vote_average ? this.movie.vote_average + " / 10" : "-";
    }
  },
  watch: {
    $route(to, from) {
      if (to.params.id !== from.params.id) {
        this.init(to.params.id);
      }
    }
  },
  created() {
    this.init(this.$route.params.id);
  }
};
</script>

<style lang="scss" scoped>
// .image-size {
//   width: 300px;
//   height: 500px;
// }
@import "../assets/moviedb.scss";
</style>