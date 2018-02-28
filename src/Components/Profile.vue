<template>
  <div class="profile container">
    <h1>David Arellano</h1>
    <p>Software Engineer</p>
    <div class="list">
      <ul>
        <li class="list-header">Frameworks</li>
        <li>React</li>
        <li>Vue.JS</li>
        <li>AngularJS</li>
        <li>Node/Express.JS</li>
        <li>Serverless</li>
        <li>Boostrap</li>
        <li>Backbone.JS</li>
      </ul>
    </div>
    <div class="list">
      <ul>
        <li class="list-header">Dev Tools</li>
        <li>Webpack</li>
        <li>Git</li>
        <li>Mocha/Chai</li>
        <li>Docker</li>
        <li>AWS Lambda</li>
      </ul>
    </div>
    <div class="list">
      <ul>
        <li class="list-header">Databases</li>
        <li>MongoDB</li>
        <li>Apache Cassandra</li>
        <li>MySQL</li>
        <li>Postgres</li>
      </ul>
    </div>
    <div class="link-container">
      <a href="https://www.linkedin.com/in/davidtarellano/">Linkedin</a>
      <a href="https://www.github.com/dtarellano">Github</a>
      <h3>contact@dtarellano.com</h3>
    </div>
  </div>
</template>

<script>

</script>

<style>
  .profile {
    width: 50%;
    height: 80%;
    position: absolute;
    color: white;
     background: rgba(0, 0, 0, 0.6);
  }
  .list-header {
    font-size: 1.2em;
    font-weight: bold;
  }
  ul {
  list-style-type: none;
  }
  .list {
    float: left;
  }
  .link-container {
    position: relative;
  }

</style>
