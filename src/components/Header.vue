/* eslint-disable */
<template>
    <header>
        <div class="logo float-child">Movie<span>DB</span></div>

        <div class="navigation float-child">
            <ul class="navigation">
                <router-link
                    :to="{ name: 'home' }"
                    tag="li"
                    active-class="active-nav"
                    exact
                >
                    <a href="#">Home</a>
                </router-link>
                <router-link
                    :to="{ name: 'recommended' }"
                    tag="li"
                    active-class="active-nav"
                    exact
                >
                    <a>Recommended</a>
                </router-link>
                <router-link
                    :to="{ name: 'about' }"
                    tag="li"
                    active-class="active-nav"
                    exact
                >
                    <a>About</a>
                </router-link>
            </ul>
        </div>

        <div class="search">
            <div class="input-container" :class="searchToggleClass">
                <input
                    type="text"
                    class="input-field input-search"
                    @focus="searchFocus"
                    @blur="searchBlur"
                    @keyup="autocomplete"
                    placeholder="Search your Movie here"
                    v-model="keyword"
                />
                <i class="fa fa-search input-icon input-search-icon"></i>
            </div>
            <transition name="fate" mode="in-out">
                <div
                    class="dropdown"
                    :key="search - autocomplete"
                    v-if="showDropdown"
                >
                    <div
                        class="dropdown-item"
                        v-for="(movie, index) in searchMovies"
                        @click="loadSearchMovies(movie.id, movie.title)"
                        :key="index"
                    >
                        <span>{{ movie.title }}</span>
                    </div>
                </div>
            </transition>
        </div>
    </header>
</template>

<script>
/* eslint-disable */
import { HeaderHttp } from "../resources/resources.js";

export default {
    data() {
        return {
            keyword: "",
            searchActive: false,
            searchMovies: [],
            search: "",
        };
    },
    props: ["resetSearch", "currentMovie"],
    methods: {
        searchFocus(event) {
            this.searchActive = true;
            this.autocomplete(event);
        },
        searchBlur() {
            this.searchActive = false;
            this.searchMovies = [];
        },
        autocomplete(event) {
            let keyword = event.target.value;
            if (keyword) {
                HeaderHttp.getMovies(keyword).then(
                    (movies) => {
                        this.searchMovies = movies.data.results;
                    },
                    (error) => {
                        console.log(error);
                    }
                );
            } else {
                this.searchMovies = [];
            }
        },
        loadSearchMovies(id, title) {
            this.keyword = title;
            this.$router.push({ name: "movie", params: { id: id } });
        },
    },
    watch: {
        resetSearch(value) {
            if (value) {
                this.keyword = "";
                this.$emit("resetSearch");
            }
        },
        currentMovie(value) {
            this.keyword = value;
        },
    },
    computed: {
        searchToggleClass() {
            return this.searchActive ? "input-active" : "";
        },
        showDropdown() {
            return this.searchMovies.length > 0;
        },
    },
};
</script>

<style lang="scss"></style>
