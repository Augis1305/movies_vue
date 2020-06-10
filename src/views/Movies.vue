<template >
  <div class="container">
    <table class="table table-dark" >
      <thead>
        <tr>
          <th scope="col">Episode</th>
          <th scope="col">Name</th>
          <th scope="col">Overview</th>
          <th scope="col">Vote</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="allEpisodes in info" :key="allEpisodes">
          <th scope="row">{{allEpisodes.episode_number}}</th>
          <td>{{allEpisodes.name}}</td>
          <td>{{allEpisodes.overview}}</td>
          <td>{{allEpisodes.vote_average}}</td>
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
      info: null
    };
  },
  mounted() {
    axios
      .get(
        "https://api.themoviedb.org/3/tv/1399/season/1?api_key=a80f05423b30ed9d18d929aa01fc2a03&language=en-US"
      )
      .then(response => {
        this.info = response.data.episodes;
        console.log(this.info);
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  }
};
</script>