<template>
<div id="app">
  <b-navbar toggleable="md">

  <!-- <b-navbar-toggle target="nav_collapse"></b-navbar-toggle> -->

  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav class="ml-auto">
      <b-nav-item-dropdown text="Projects" right>
        <b-dropdown-item href="#">Ride Share</b-dropdown-item>
        <b-dropdown-item href="#">Siren</b-dropdown-item>
        <b-dropdown-item href="#">News Stand</b-dropdown-item>
        <b-dropdown-item href="#">Image Finder</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>

  </b-collapse>
</b-navbar>
  <h1>{{ hello }}</h1>
</div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

export default {
  name: 'app',
  data () {
    return {
      hello: 'Hello World'
    }
  }
}</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
  margin-left: 5px;
}

h1,
h2 {
  font-weight: normal;
}


a {
  color: #42b983;
}
</style>
