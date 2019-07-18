<template>
  <div class="home">
    <div class="image">
      <!-- <AboutMe /> -->
      <h1 class="homeTitle">Kelly Phillips • Software Developer</h1>


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
  .image {
    background-image: url(../assets/zhang-kaiyv--ozSZ9PaIew-unsplash.jpg);
    height: 100%;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: fixed;
  }

  .homeTitle {
    text-align: center;
  }
</style>