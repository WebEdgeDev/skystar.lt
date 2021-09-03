<template>
  <nav class="hero-img">
    <MenuBurger :mobile="mobile" :menu-open="menuOpen" @menu-toggle="menuToggle" />
    <div class="navigation-menu" :class="{ 'hidden-block': !menuOpen }">
      <ul class="nav-links text-[40px] lg:text-[14px] xl:text-[16px]">
        <li><NuxtLink :to="localePath('/')">home</NuxtLink></li>
        <li><NuxtLink :to="localePath('about')">about</NuxtLink></li>
        <li><NuxtLink :to="localePath('wedding')">wedding films</NuxtLink></li>
      </ul>
      <div class="hidden lg:block">
        <a href="#" class="flex justify-center"
          ><img class="h-[70%] w-[70%]" src="/kreativ-wedding-logo-NEU-weiss.png" alt=""
        /></a>
      </div>
      <ul class="nav-links text-[40px] lg:text-[12px] xl:text-[16xp]">
        <li><NuxtLink :to="localePath('wedding')">other films</NuxtLink></li>
        <li><NuxtLink :to="localePath('contact')">contact</NuxtLink></li>
        <li><NuxtLink to="#" class="hidden lg:block">EN</NuxtLink></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      mobile: true,
      menuOpen: false,
      windowWidth: 0,
    }
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    },
  },
  watch: {
    $route() {
      this.menuOpen = false
    },

    windowWidth() {
      if (this.windowWidth >= 1024) {
        this.mobile = false
        this.menuOpen = false
      } else {
        this.mobile = true
      }
    },
  },
  beforeMount() {
    this.windowWidth = window.innerWidth
  },

  mounted() {
    document.addEventListener('click', this.menuClose)
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
    })
  },

  beforeDestroy() {
    document.removeEventListener('click', this.menuClose)
  },
  methods: {
    menuToggle(result) {
      this.menuOpen = result
    },
    menuClose(e) {
      if (!this.$el.contains(e.target)) {
        this.menuOpen = false
      }
    },
  },
}
</script>

<style lang="postcss" scoped>
.hero-img {
  height: 100vh;
  background-image: url('/hero.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
}
.hidden-block {
  transform: translateX(100vw);
}

.navigation-menu {
  @apply fixed h-screen flex flex-col items-center bg-second z-40 pt-32 pb-6;
}

.nav-links {
  @apply text-center text-white font-ovo uppercase;
}

.nav-links li {
  @apply block py-2 w-screen border border-r-0 border-l-0;
}

@screen lg {
  .hidden-block {
    transform: translateY(0);
  }

  .navigation-menu {
    @apply flex-row justify-between items-center w-full bg-[transparent] h-auto pt-4;
  }

  .nav-links {
    @apply text-white flex font-ovo w-[600px];
  }

  .nav-links li {
    @apply my-4 w-[100%]  border-0 tracking-wider;
  }
}
</style>
