<template>
  <div class="home">
    <div class="container-fluid landing">
      <div class="row">
        <div class="col-lg-12 credentials">
          <h1 class="name">> Kelly Phillips</h1>
          <h1 class="title">Software Developer</h1>
          <hr class="name-hr">
          <a href="https://github.com/Kphill37">
            <i class="fab fa-github" data-toggle="tooltip" data-placement="bottom" title="Github"></i>
          </a>
          <a href="https://www.linkedin.com/in/kelly-a-phillips/">
            <i class="fab fa-linkedin" data-toggle="tooltip" data-placement="bottom" title="Linkedin"></i>
          </a>
          <a href="mailto:kelly.a.phillips@outlook.com">
            <i class="fas fa-envelope-square" data-toggle="tooltip" data-placement="bottom" title="Email"></i>
          </a>
          <a href="../assets/Kelly Phillips Resume.pdf" download>
            <i class="far fa-file" data-toggle="tooltip" data-placement="bottom" title="Resume"></i>
          </a>
        </div>
      </div>
    </div>


    <AboutMe />

    <Skills />

    <Pieces />

    <Footer />





  </div>
</template>

<script>
  // @ is an alias to /src
  import AboutMe from '@/components/AboutMe.vue'
  import Landing from '@/components/Landing.vue'
  import Skills from '@/components/Skills.vue'
  import Pieces from '@/components/Pieces.vue'
  import Footer from '@/components/Footer.vue'

  export default {
    name: 'home',
    components: {
      AboutMe,
      Landing,
      Skills,
      Pieces,
      Footer
    }
  }
</script>

<style>
  body {
    background-color: rgb(37, 37, 37);
    stroke: black;
  }

  a {
    color: white;
  }

  .landing {
    width: 123vw;
    height: auto;
    display: block;
    margin-right: 40vw;
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
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

  .credentials {
    max-width: 79%;
  }
</style>