<template>
<div id="app">
  <app-navbar></app-navbar>
  <app-profile></app-profile>
</div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import Nav from './Components/Nav.vue';
import Profile from './Components/Profile.vue';
import canvas from './canvas';

export default {
  name: 'app',
  data() {
    return {
      hello: 'Hello World'
    };
  },
  created() {
    canvas();
  },
  components: {
    'app-navbar': Nav,
    'app-profile': Profile
  }
};
</script>

<style>
body {
  background-color: #343434;
}

/*canvas {
  position: absolute;
}*/
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
  color: white;
}
</style>
