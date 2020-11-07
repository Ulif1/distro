<template>
<div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <img class="img-fluid logo" src="/images/linux.png">
          <li class="nav-item">
            <router-link to="/">
              <h3 class="nav-link">Home</h3>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/browse">
              <div class="menu-item browse">
                <h3 class="nav-link">All Distros</h3>
              </div>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/explore">
              <div class="menu-item">
                <h3 class="nav-link">Explore</h3>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="jumbotron bg-light">
      <h1 class="header">DistroGaze</h1>
      <p class="text-muted centered">All things Linux</p>
    </div>
  <router-view />
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-bottom">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="https://github.com/Ulif1/Creative_Project_3">GitHub Repo</a>
        </li>
      </ul>
    </div>
  </nav>
</div>
</template>

<script>
export default{
  name: 'app',
  computed:{

  }
}
</script>

<style>

.logo{
  height: 50px;
  width: 50px;
  display: inline;
}

</style>

<style scoped>
.header{
  text-align: center;
  font-size: 3.5em;
}

.jumbotron{
  padding: 5px;
}

.centered{
  text-align: center;
}
</style>
