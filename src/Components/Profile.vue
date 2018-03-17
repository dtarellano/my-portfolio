<template>
  <div class="profile container">
    <div class="col-12">
      <h1>David Arellano</h1>
    </div>
    <div class="col-12">
      <div class="list-header">Software Engineer</div>
    </div>
    <div class="row text-center">
      <ul class="col-6">
        <li class="list-header">Frameworks</li>
        <li>React</li>
        <li>Vue.JS</li>
        <li>AngularJS</li>
        <li>Node/Express</li>
        <li>Serverless</li>
        <li>Boostrap</li>
      </ul>
      <ul class="col-6">
        <li class="list-header">Dev Tools</li>
        <li>Webpack</li>
        <li>Git</li>
        <li>Chrome Dev Tools</li>
        <li>Mocha/Chai</li>
        <li>Docker</li>
        <li>AWS Lambda</li>
      </ul>
      <ul class="col-6">
        <li class="list-header">Databases</li>
        <li>MongoDB</li>
        <li>Cassandra</li>
        <li>MySQL</li>
        <li>Postgres</li>
      </ul>
        <i class="fab fa-linkedin col-1">
          <a href="https://www.linkedin.com/in/davidtarellano/"></a></i>
        <i class="fab fa-github-square col-1">
          <a href="https://www.github.com/dtarellano"></a>
        </i>
        <a class="col-3 contact" href="mailto:contact@dtarellano.com">contact@dtarellano.com</a>
    </div>
    </div>

  </div>
</template>

<script>
</script>

<style>
.profile {
  width: 50%;
  height: auto;
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
  float: right;
  left: 20%;
}
h1 {
  font-size: 4em;
}

.fa-linkedin {
  font-size: 50px;
}

.fa-github-square {
  font-size: 50px;
}
.contact {
  text-decoration-style: none;
}
</style>
