<template>
  <div class="containeri mt-4">
    <div class="row justify-content-center">
      <div class="col-12 col-md-9 col-lg-7">
        <h1 class="font-weight-light text-center">Text</h1>
        <div>
          <input type="text" v-model="query" @keyup="getResult(query)">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      shows: ""

    };
  },

  methods: {
    fetchTvShow() {
      axios
        .get(
          "https://api.themoviedb.org/3/tv/top_rated?api_key=a80f05423b30ed9d18d929aa01fc2a03&language=en-US&"
        )
        .then(response => {
          this.shows = response.data.results;
        })
        .catch(error => {
          console.log(error);
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    }
  }
};
</script>
