<template>
  <div class="container">
    <div class="table">
      <div class="col-6">
        <input
          class="form-control"
          type="text"
          v-model="season"
          @keydown="getResults(season)"
        />
      </div>
    </div>
    <table class="table table-dark">
      <thead>
        <tr>
          <th scope="col">Episode</th>
          <th scope="col">Name</th>
          <th scope="col">Overview</th>
          <th scope="col">Vote</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="allEpisodes in results" :key="allEpisodes">
          <th scope="row">{{ allEpisodes.episode_number }}</th>
          <td>{{ allEpisodes.name }}</td>
          <td>{{ allEpisodes.overview }}</td>
          <td>{{ allEpisodes.vote_average }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      results: "",
      season: ""
    };
  },
  methods: {
    getResults: season => {
      axios
        .get(
          "https://api.themoviedb.org/3/tv/1399/season/" +
            season +
            "?api_key=a80f05423b30ed9d18d929aa01fc2a03&language=en-US"
        )
        .then(response => {
          this.results = response.data.episodes;
          console.log(this.results);
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
