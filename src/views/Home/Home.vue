<template>
  <div class="pin-container">
    <div class="home-container" id="container">
      <div class="banner">
        <div class="imgcontent">
          <h2>Welcome To My Website</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, consequuntur?</p>
        </div>
      </div>
      <main class="main">
        <article class="article">
          <h3 class="article-title">Content One</h3>
          <p class="article-content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione dolorem voluptates eveniet tempora ut
            cupiditate
            magnam, sapiente, hic quo in ipsum iste soluta eaque perferendis nihil recusandae dolore officia aperiam
            corporis
            similique. Facilis quos tempore labore totam! Consectetur molestiae iusto ducimus error reiciendis
            aspernatur dolor,
            modi dolorem sit architecto, voluptate magni sunt unde est quas? Voluptates a dolorum voluptatum quo
            perferendis aut
            sit. Aspernatur libero laboriosam ab eligendi omnis delectus earum labore, placeat officiis sint illum
            rem
            voluptas
            ipsum repellendus iste eius recusandae quae excepturi facere, iure rerum sequi? Illum velit delectus
            dicta
            et iste
            dolorum obcaecati minus odio eligendi!</p>
        </article>
        <article class="article">
          <h3 class="article-title">Content Two</h3>
          <p class="article-content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur provident nostrum possimus inventore
            nisi
            laboriosam
            consequatur modi nulla eos, commodi, omnis distinctio! Maxime distinctio impedit provident, voluptates
            illo
            odio nostrum
            minima beatae similique a sint sapiente voluptatum atque optio illum est! Tenetur tempora doloremque
            quae
            iste aperiam
            hic cumque repellat?</p>
        </article>
      </main>
    </div>
  </div>

</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'Home',
  data() {
    return {}
  },
  methods: {},
  activated() {
    ScrollTrigger.refresh()
    gsap.to('.banner', {
      yPercent: -100,
      ease: 'none',
      stagger: 0.5,
      scrollTrigger: {
        trigger: '#container',
        start: 'top top',
        end: '+=100%',
        scrub: true,
        pin: true
      }
    })
    // 移动端适配
    // ScrollTrigger.normalizeScroll({
    //   type: 'touch,wheel,pointer',
    //   momentum: self => Math.min(3, self.velocityY / 1000)
    // })
  },
  deactivated() {
    // location.reload()
    ScrollTrigger.getAll().forEach(t => {
      t.kill()
      console.log(1)
    })
  }
}
// window.addEventListener('resize', () => {
//   ScrollTrigger.refresh()
//   console.log(1)
// })
</script>

<style lang="less">
.home-container {
  height: 1000px;
  background: #e2e2e2;
  overflow: hidden;
  .banner {
    width: 100vw;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
    background: url(https://images.pexels.com/photos/9921341/pexels-photo-9921341.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260) center/cover no-repeat;
    .imgcontent {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      color: white;
      line-height: 40px;
    }
  }
  .main {
    width: 1200px;
    margin: auto;
    padding: 60px;
  }
  .article,
  .article-title {
    margin: 10px 0;
  }
}
</style>