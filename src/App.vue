<template>
<div id="app">
  <app-navbar></app-navbar>
  <h1>{{ hello }}</h1>
</div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Nav from './Components/Nav.vue';

export default {
  name: 'app',
  data () {
    return {
      hello: 'Hello World'
    }
  },
  components: {
    "app-navbar": Nav
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
