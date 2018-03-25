<template>
  <b-navbar class="bg-info" toggleable="md" variant="info" type="dark">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand href="#">Portfolio</b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <template slot="button-content">
            <em>Projects</em>
          </template>
          <b-dropdown-item
            href="https://github.com/dtarellano/serverless-dispatch-service"
            target="_blank"
          >
            Ride Share
          </b-dropdown-item>
          <b-dropdown-item
            href="https://github.com/gitPullRebase/Siren"
            target="_blank"
            >
            Siren
          </b-dropdown-item>
          <b-dropdown-item
            href="https://github.com/gitPullRebase/news_stand"
            target="_blank"
          >
            News Stand
          </b-dropdown-item>
          <b-dropdown-item href="#">Image Finder</b-dropdown-item>
          <b-dropdown-item
            href="https://github.com/dtarellano/VueJS-MathQuiz"
            target="_blank"
          >
          Math Quiz
          </b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
</script>

<style>
.bg-info {
  background-color: #232323 !important;
}
</style>
