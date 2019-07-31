<template>
  <div class="home">
    <div class="container-fluid landing">
      <div class="row">
        <div class="col-12">
          <h1 class="name">> Kelly Phillips</h1>
          <h1 class="title">Software Developer</h1>
          <hr class="name-hr">
          <i class="fab fa-github" data-toggle="tooltip" data-placement="bottom" title="Github"></i>
          <i class="fab fa-linkedin" data-toggle="tooltip" data-placement="bottom" title="Linkedin"></i>
          <i class="fas fa-envelope-square" data-toggle="tooltip" data-placement="bottom" title="Email"></i>
          <i class="far fa-file" data-toggle="tooltip" data-placement="bottom" title="Resume"></i>
        </div>
      </div>
    </div>

    <AboutMe />

    <Skills />

  </div>
</template>

<script>
  // @ is an alias to /src
  import AboutMe from '@/components/AboutMe.vue'
  import Landing from '@/components/Landing.vue'
  import Skills from '@/components/Skills.vue'

  export default {
    name: 'home',
    components: {
      AboutMe,
      Landing,
      Skills
    }
  }
</script>

<style>
  body {
    background-color: rgb(37, 37, 37);
    stroke: black;
  }

  .landing {
    margin-right: 40vw;
    background-attachment: fixed;
    background-image: url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80');
    min-height: 100vh;
  }

  .name {
    margin-top: 20vh;
    font-size: 5rem;
  }

  .name-hr {
    border-radius: 25px;
    color: white;
    border-top: 5px solid white;
    width: 30vw;
  }

  .title {
    font-size: 3rem;
  }

  .fab {
    font-size: 3rem;
    margin-right: 4%;
    opacity: 0.6;
  }

  .fa-github {
    margin-right: 4%;
    opacity: 0.6;
  }

  .fas {
    font-size: 3rem;
    opacity: 0.6;
  }

  .far {
    font-size: 3rem;
    opacity: 0.6;
  }

  i {
    margin-right: 4%
  }

  i:hover {
    opacity: 1;
    transition: 0.3s;
  }
</style>