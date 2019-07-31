<template>
  <div class="container-fluid">
    <div class="row aboutme">
      <div class="col-5">
        <div class="imgCrop">
          <img class="profilePic"
            src="https://photos.smugmug.com/CodeWorks-Summer-2019/n-4Q2tbf/i-bVm2Wmp/0/c5f92cb4/XL/i-bVm2Wmp-XL.jpg"
            alt="">
        </div>
      </div>
      <div class="col-7 aboutText">
        <h1>About Me: </h1>
        <div class="aboutText">I am a Full Stack Software Developer with an intimate passion for coding
          and
          technology, and with a desire to
          create, connect, and grow with my peers in a professional setting. My first exposure to coding began with
          introductory
          Java and C++ college courses. I've always loved the problem solving, and creativity that can be expressed
          with coding,
          and I knew I wanted to narrow my scope. Since attending Boise Codeworks, I have also picked up HTML5, CSS3,
          JavaScript,
          and C#. During my journey, I've built full stack applications utilizing tools such as: NodeJS, MongoDB, Dot
          NET Web
          APIs, JavaScript Frameworks, and even a few projects incorporating 3rd party APIs like Unsplash, iTunes, and
          more.

          I am excited to continue through the wide world of Software Development, and learn everything I can so that
          I may pass
          it on to my peers, and future developers. Where I can, I strive to be "the guy" people come to when there's
          no where
          else to turn. I enjoy being able to show everyone the solution, and how I came to that solution; not only to
          move the
          project forward, but to help my team grow as well.

          I also pride myself on having a strong work ethic. I'm always pondering how I can make something easier, or
          more
          efficient. I thrive in team environments, and encourage proper and open communication amongst my whole team;
          ensuring
          the project goes smoothly, and according to plan. Training in Agile Development / Scrum has also allowed me
          to build up
          my time management skills to complete project goals within strict time windows. Development and technology for
          me
          is a full
          time passion that I'm certain I will never be tired of!
        </div>
      </div>
    </div>
  </div>
</template>



<script>






</script>


<style>
  html {
    color: black;
  }

  .aboutme {
    height: 200px;
  }

  .aboutsection {
    width: 100vw;
  }

  .aboutText {
    height: 50vh;
    text-align: center;
    margin-top: 2%;
    max-width: 100%;
    font-size: 1em;
    word-wrap: break-word;
    display: inline-block;
    overflow: hidden;
  }

  .imgCrop {
    margin-top: 2vh;
    max-width: 100%;
    height: 60%;
    position: relative;
  }

  .profilePic {
    display: block;
    margin: 0 auto;
    height: 100%;
    width: auto;
    border: 2px solid rgb(0, 0, 0);
    -webkit-border-radius: 35%;
    -moz-border-radius: 35%;
    border-radius: 35%;
  }
</style>