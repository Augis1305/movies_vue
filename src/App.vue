<template>
    <div id="app">
        <Navigation />
        <router-view class="container" />
    </div>
</template>

<script>
// import Home from './views/Home.vue';
import Navigation from "@/components/Navigation.vue";
export default {
  name: 'app',
  components: {
      Navigation,
  }
};
</script>

<style lang="scss">
$primary: #05b2dd;
@import "node_modules/bootstrap/scss/bootstrap";
</style>
