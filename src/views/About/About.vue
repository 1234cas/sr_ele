<template>
  <div class="about-container">
    <section class="section">
      <div class="bg"></div>
      <h1>redblingbling</h1>
    </section>
    <section class="section">
      <div class="bg"></div>
      <h1>x</h1>
    </section>
    <section class="section">
      <div class="bg"></div>
      <h1>会变得更好</h1>
    </section>
    <section class="section">
      <div class="bg"></div>
      <h1>地瘦栽松柏</h1>
    </section>
    <section class="section">
      <div class="bg"></div>
      <h1>家贫子读书</h1>
    </section>

  </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'About',
  mounted() {},
  activated() {
    ScrollTrigger.refresh()
    gsap.utils.toArray('.section', this.$el).forEach((section, i) => {
      section.bg = section.querySelector('.bg')

      // Give the backgrounds some random images
      section.bg.style.backgroundImage = `url(https://picsum.photos/${innerWidth}/${innerHeight}?random=${i})`

      // Do the parallax effect on each section
      if (i) {
        section.bg.style.backgroundPosition = `50% ${-innerHeight / 2}px`

        gsap.to(section.bg, {
          backgroundPosition: `50% ${innerHeight / 2}px`,
          ease: 'none'
        })
      }

      // the first image should be positioned against the top. Use px on the animating part to work with GSAP.
      else {
        section.bg.style.backgroundPosition = '50% 0px'

        gsap.to(section.bg, {
          backgroundPosition: `50% ${innerHeight / 2}px`,
          ease: 'none',
          scrollTrigger: {
            markers: true,
            trigger: section,
            start: 'top top',
            end: 'bottom top',
            scrub: true
          }
        })
      }
    })
  },
  deactivated() {
    ScrollTrigger.getAll().forEach(t => t.kill())
  }
}
</script>

<style lang="less" scoped>
.about-container {
  height: auto;
}
section {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

h1 {
  color: white;
  text-shadow: 1px 1px 3px black;
  z-index: 1;
  font-size: 3em;
  font-weight: 400;
}
</style>