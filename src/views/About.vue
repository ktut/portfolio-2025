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
        Hi! I’m <b>Ramzi Dreessen</b>, a web developer with <b><span>7</span> years of experience,</b> along with
        <b>6
          years of print and web design experience</b>, living in Chicago.
      </p>
      <p>
        I’ve never aligned myself to a particular job title. I enjoy planning, creating, reviewing, tearing apart
        my
        own work, rebuilding, finally shipping... any and all parts of the creative process.
      </p>
      <p>
        As a creator, I keep things simple. Good art, proper use of negative space, relevant typography, and
        staying
        in-tune with the “why” of the project. I’m aware that design without direction is just an aesthetics
        contest.
        With web design, I specialize in performative solutions that are fully responsive and utilize progressive
        enhancement.
      </p>
      <p>
        I understand component-based design, but I don’t believe in keeping design elements “sacred” across
        projects
        - to me, that’s just laziness. If you want someone to build you a cookie-cutter website filled with
        buzzwords
        and stock images (like one of these <a href="http://tiffzhang.com/startup" target="_blank"
          rel="noreferrer noopener">fake startup websites</a>), I’m probably not your guy. I value a strong art team
        and strong content, and working with others.
      </p>
      <p>
        I’m not afraid of complexity, but I also have a guideline: If I can't fully explain how something works to
        a
        non-technical person, in a concise manner, I find myself wondering why it was necessary to include in the
        first place.
      </p>
    </section>
  </main>
</template>
<style lang="scss" scoped>
.about {
  min-height: 100vh;
  background: linear-gradient(to bottom, #f8f9fa 0%, #ffffff 100%);

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