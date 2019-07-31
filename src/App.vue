<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>
    </div> -->
    <router-view />
    <back-to-top bottom="50px" right="50px">
      <button type="button" class="btn btn-dark btn-to-top"><i class="fa fa-chevron-up"></i></button>
    </back-to-top>
  </div>
</template>

<script>
  import BackToTop from 'vue-backtotop'

  export default {
    components: {
      BackToTop
    }
  }
</script>

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

  .btn-to-top {
    color: green;
    width: 60px;
    height: 60px;
    padding: 10px 16px;
    border-radius: 50%;
    font-size: 22px;
    line-height: 22px;
  }
</style>