<script>
export default {
  name: 'AboutView'
}
</script>

<template>
  <main class="about">
    <section class="content-wrapper">
      <header class="project-header">
        <img src="../assets/me-burgundy-square.jpg" alt="Ramzi Dreessen" class="float">
        <h1 class="project-title">
          A little about me first.
        </h1>
      </header>
      <p>
        Hi! I’m <b>Ramzi Dreessen</b>, a web developer with <b><span>8</span> years of experience,</b> along with
        <b>6
          years of print and web design experience</b>. I’m based in Chicago, but I’ve worked with teams across the US
        and internationally.
      </p>
      <p>

      </p>
      <p>
        As a creator, I keep things simple. Good art, proper use of negative space, relevant typography, and
        staying
        in-tune with the “why” of the project.
        With web design, I specialize in performative solutions that are fully responsive and utilize progressive
        enhancement.
      </p>
      <p>
        My personal philsophy is centered around prioritizing the user at all stages of the project - planning, design,
        development and testing. I value processes that allow for quick iteration to meet their ongoing needs.</p>
      <p>I’m aware
        that design without
        direction is just an aesthetics
        contest. If you want someone to build you a cookie-cutter website filled with
        buzzwords
        and stock images (like one of these <a href="http://tiffzhang.com/startup" target="_blank"
          rel="noreferrer noopener">fake startup websites</a>), I’m probably not your guy.
      </p>
      <p>
        I’m not afraid of complexity, but I also have a guideline: If I can't fully explain how something works to
        a
        non-technical person, in a concise manner, I find myself wondering why it was necessary to include in the
        first place.
      </p>
      <p> You can reach me by email at <a
          href="mailto:ramzidreessen@gmail.com?Subject=Saw%20your%20site%20at%20rkdvis.com"
          target="_top">ramzidreessen@gmail.com</a>. Please put relevant information in the subject line. If we've
        already worked together, please feel free to add me as a contact on <a
          href="https://www.linkedin.com/in/ramzidreessen/" target="_blank" rel="noreferrer noopener">LinkedIn</a>. </p>
    </section>
  </main>
</template>
<style lang="scss" scoped>
.about {
  min-height: 100vh;

  .project-header {
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }

  h1 {
    text-align: left;
  }

  img {
    width: 200px;
    margin: 5px auto 15px;
    border-radius: 175px;
    -webkit-box-shadow: 2px 2px 10px rgba(0, 0, 0, .3);
    box-shadow: 2px 2px 10px rgba(0, 0, 0, .3);

    @media (min-width: 540px) {
      width: 300px;
      float: right;
      margin: 5px 5px 15px 15px;
    }
  }
}
</style>