<template>
    <header>
        <div id="logo">Movie <span> DB</span></div>

        <div id="navigation">
            <ul>
                <router-link
                    :to="{ name: 'home' }"
                    tag="li"
                    active-class="active-nav"
                    exact
                >
                    <a>Home</a></router-link
                >
                <router-link
                    :to="{ name: 'recommended' }"
                    tag="li"
                    active-class="active-nav"
                    exact
                >
                    <a>Recommended</a></router-link
                >
                <router-link
                    :to="{ name: 'about' }"
                    tag="li"
                    active-class="active-nav"
                    exact
                >
                    <a>About</a></router-link
                >
            </ul>
        </div>

        <div id="search">
            <div class="input-container" :class="searchToggleClass">
                <input
                    type="text"
                    class="input-field input-search"
                    @focus="searchFocus"
                    @blur="serachBlur"
                    @keyup="autocomplete"
                    placeholder="Search your Movie Here"
                    v-model="keyword"
                /><i class="fa fa-search input-icon input-search-icon"></i>
            </div>
            <transition name="fade" mode="in-out">
                <div>
                    <div>
                        {{ movie.title }}
                    </div>
                </div>
            </transition>
        </div>
    </header>
</template>

<script>
// import { HeaderHttp } from "../../resources/resources";

export default {
    data() {
        return {
            keyword: "",
            searchActive: false,
            searchMovie: [],
            search: "",
        };
    },
    props: ["resetSearch", "currentMovie"],
};
</script>
