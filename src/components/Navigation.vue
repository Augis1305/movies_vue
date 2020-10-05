<template>
  <div>
    <nav class="site-nav navbar navbar-expand bg-primary navbar-dark">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/shows">TV Shows</router-link>
        <router-link class="navbar-brand" to="/movies">Movies</router-link>
        <div class="navbar-nav ml-auto">
          <router-link class="nav-item nav-link" to="/episode"
            >Episodes</router-link
          >
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "navigation"
};
</script>
