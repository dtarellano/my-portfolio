<template>
<div id="app">
  <b-nav pills>
    <b-nav-item active>Active</b-nav-item>
    <b-nav-item>Link</b-nav-item>
    <b-nav-item-dropdown id="nav7_ddown" text="Dropdown" right>
      <b-dropdown-item>one</b-dropdown-item>
      <b-dropdown-item>two</b-dropdown-item>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item>three</b-dropdown-item>
    </b-nav-item-dropdown>
  </b-nav>
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
