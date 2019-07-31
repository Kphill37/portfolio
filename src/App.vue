<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>
    </div> -->
    <router-view />
  </div>
</template>

<style>
  #app {
    font-family: 'PT Mono', monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #ffffff;
    text-shadow: 2px 2px #000000;
    overflow-x: hidden;
  }

  body {
    background-color: #ffffff;
    color: #ffffff;
    position: relative;
    height: 100%;
    width: 100%;
  }

  #nav {
    padding: 30px;
    color: #5cd9ff;
  }

  #nav a {
    font-weight: bold;
    color: #5cd9ff;
  }

  #nav a.router-link-exact-active {
    color: #229460;
  }
</style>