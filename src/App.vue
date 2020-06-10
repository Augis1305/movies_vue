<template>
  <div class="container-fluid">
    <Home/>
    <Movies/>
  </div>
</template>

<script>
import Home from './views/Home.vue';
import Movies from './views/Movies.vue';
export default {
  name: 'app',
  components: {
    Home,
    Movies
  }
};
</script>

<style lang="scss">
</style>
