<template>
  <div class="home">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <h1 class="title">Kelly Phillips</h1>
          <h1>Software Developer</h1>
          <hr class="title-hr">
          <i class="fab fa-github"></i>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  // @ is an alias to /src
  import AboutMe from '@/components/AboutMe.vue'
  import Landing from '@/components/Landing.vue'

  export default {
    name: 'home',
    components: {
      AboutMe,
      Landing
    }
  }
</script>

<style>
  body {
    background-color: rgb(37, 37, 37);
  }

  .title {
    margin-top: 10vh;
  }

  .title-hr {
    color: white;
    border-top: 1px solid white;
    width: 55vw;
  }

  .fab {
    font-size: 3rem;
  }
</style>