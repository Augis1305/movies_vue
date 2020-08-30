<template>
  <div id="app">
    <div id="bg-image">
      <img :class="{'bg-active' : !movieBg}" src="./assets/bg.jpeg" />
      <transition name="fade" mode="in-out">
        <img :src="backgroundImage" :key="'bg-image'" :class="{'bg-active' : movieBg}" />
      </transition>
    </div>

    <div class="wrapper">
      <div class="wrapper-inner">
        <div id="content" :class="{'loading' : loading}">
          <router-view
            @resetBg="movieBg = false"
            @loadingEnd="loading = false"
            @loadingStart="loading = true"
            @movieLoaded="movieLoaded($event)"
            :flickityOptions="flickityOptions"
            :posterPath="posterPath"
            :backgroundPath="backgroundPath"
          ></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Navigation from "@/components/Navigation.vue";

// Exporting this stuff, so it can be used anywhere in the program
export default {
  data() {
    return {
      backgroundImage: require('./assets/bg.jpeg'), // the background image
      posterPath: "https://image.tmdb.org/t/p/w500", // poster path
      backgroundPath: "https://image.tmdb.org/t/p/original",
      movieBg: false, // if movie background is loaded (for animation)
      loading: false, // if data is being lodaed (for animation)
      // Slider options 
      flickityOptions: {
        prevNextButtons: false,
        pageDots: true,
        wrapAround: true,
        cellAlign: "left",
        autoPlay: 5000,
      }
    };
  },
  name: "app",
  components: {
    // Navigation
  },
  methods: {
    movieLoaded(data) {
      this.backgroundImage = data;

      setTimeout(() => {
        this.movieBg = true;
      }, 1000);
    }
  }
};
</script>

<style lang="scss">
@import "assets/moviedb.scss";
</style>
