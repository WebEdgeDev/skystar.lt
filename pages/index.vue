<template>
  <main>
    <PageHero image="home.jpg" title="REAL AUTHENTIC & EMOTIONAL" sub-title="Weddings & Corparative Films" />
    <section id="about" class="py-24 container mx-auto relative">
      <h3 class="text-center text-6xl pb-6 tracking-wide font-gilda uppercase">About us</h3>
      <h3 class="text-center text-xl tracking-wide uppercase">
        <span class="mr-6">DESTINATION</span><span class="mr-6"> WEDDING</span><span class="mr-6">STORYTELLER</span>
      </h3>
      <div class="block lg:flex lg:flex-wrap lg:relative">
        <div class="hidden lg:block lg:w-[25%]">
          <img src="@/static/image2.jpg" alt="image1" />
        </div>
        <div class="lg:w-[45%] lg:ml-6">
          <p class="py-6 text-lg">
            We totally love to be inspired by your personalities and by your wedding to tell your individual story. Because every story, every couple and every
            wedding is so unique and different. With us you will get a wedding reportage with authentic pictures, emotional films, real feelings and memories.
          </p>
          <img src="@/static/image3.jpg" alt="image3" />
        </div>
        <div class="lg:w-[25%] lg:ml-6">
          <img src="@/static/image2.jpg" alt="image2" />
        </div>
      </div>
      <!-- <div class="text-center pt-12">
        <NuxtLink to="/" class="uppercase text-sm px-10 py-3 border"> Write us </NuxtLink>
      </div> -->
    </section>
    <section id="particles-js" class="bg-main flex h-[1000px] justify-center items-center flex-col text-white z-10">
      <h2 class="text-3xl lg:text-6xl pt-32 tracking-wide font-gilda">IT ALL STARTS WITH A GREAT STORY</h2>

      <div class="border-2 absolute mx-10 border-gray w-[70%] h-[60%] bg-main"></div>
    </section>
    <section id="wedding-films" class="container mx-auto py-20 text-center">
      <h2 class="text-center text-6xl pb-10 tracking-wide font-gilda">WEDDING FILMS</h2>
      <div class="grid md:grid-flow-col md:grid-cols-5 md:grid-rows-4 gap-5 md:max-h-[600px] pb-5 font-ovo">
        <div class="md:col-span-3 md:row-span-4 relative" @mouseover="imgHover1 = true" @mouseleave="imgHover1 = false">
          <h2 v-if="imgHover1 === true" class="weddingfilm-title z-20">Title 1</h2>
          <div v-if="imgHover1" class="overlay"></div>
          <img src="weddingfilms/3.jpg" class="w-full h-full object-cover" alt="" />
        </div>
        <div class="md:col-span-2 md:row-span-2 relative" @mouseover="imgHover2 = true" @mouseleave="imgHover2 = false">
          <h2 v-if="imgHover2 === true" class="weddingfilm-title z-20">Title 2</h2>
          <div v-if="imgHover2" class="overlay"></div>
          <img src="weddingfilms/2.jpg" class="w-full h-full object-cover" alt="" />
        </div>
        <div class="md:col-span-2 md:row-span-2 relative" @mouseover="imgHover3 = true" @mouseleave="imgHover3 = false">
          <h2 v-if="imgHover3 === true" class="weddingfilm-title z-20">Title 3</h2>
          <div v-if="imgHover3" class="overlay"></div>
          <img src="weddingfilms/1.jpg" class="w-full h-full object-cover" alt="" />
        </div>
      </div>
      <div class="grid md:grid-flow-col md:grid-cols-5 md:grid-rows-4 gap-5 md:max-h-[600px] font-ovo">
        <div class="md:col-span-2 md:row-span-2 relative" @mouseover="imgHover4 = true" @mouseleave="imgHover4 = false">
          <h2 v-if="imgHover4 === true" class="weddingfilm-title z-20">Lorem ipsum dolor.</h2>
          <div v-if="imgHover4" class="overlay"></div>
          <img src="weddingfilms/4.jpg" class="w-full h-full object-cover" alt="" />
        </div>
        <div class="md:col-span-2 md:row-span-2 relative" @mouseover="imgHover5 = true" @mouseleave="imgHover5 = false">
          <h2 v-if="imgHover5 === true" class="weddingfilm-title z-20">Title 5</h2>
          <div v-if="imgHover5" class="overlay"></div>
          <img src="weddingfilms/5.jpg" class="w-full h-full object-cover" alt="" />
        </div>
        <div class="md:col-span-3 md:row-span-4 relative" @mouseover="imgHover6 = true" @mouseleave="imgHover6 = false">
          <h2 v-if="imgHover6 === true" class="weddingfilm-title z-20">Title 6</h2>
          <div v-if="imgHover6" class="overlay"></div>
          <img src="weddingfilms/6.jpg" class="w-full h-full object-cover" alt="" />
        </div>
      </div>
      <div class="text-center pt-12">
        <NuxtLink to="/wedding-films" class="uppercase text-sm px-10 py-3 border"> More films </NuxtLink>
      </div>
    </section>
    <!-- <section id="other-films">
      <client-only>
        <vimeo-player ref="player" :video-id="'633672078'" @ready="onReady" />
      </client-only>
    </section> -->
  </main>
</template>

<script>
if (process.browser) {
  require('particles.js')
}
export default {
  data() {
    return {
      playerReady: false,
      imgHover1: false,
      imgHover2: false,
      imgHover3: false,
      imgHover4: false,
      imgHover5: false,
      imgHover6: false,
    }
  },
  mounted() {
    this.initParticles()
  },

  nuxtI18n: {
    paths: {
      lt: '/',
      en: '/',
      ru: '/',
    },
  },
  methods: {
    initParticles() {
      window.particlesJS.load('particles-js', '/particles.json', function () {})
    },
    onReady() {
      this.playerReady = true
    },
    play() {
      this.$refs.player.play()
    },
    pause() {
      this.$refs.player.pause()
    },
  },
}
</script>

<style lang="postcss" scoped>
img {
  @apply object-cover w-full max-h-[400px];
}

@screen md {
  img {
    @apply max-h-[600px];
  }
}
.weddingfilm-title {
  @apply text-white  text-3xl  absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%];
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
