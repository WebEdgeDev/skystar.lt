<template>
  <nav>
    <MenuBurger :mobile="mobile" :menu-open="menuOpen" @menu-toggle="menuToggle" />
    <div class="navigation-menu" :class="{ 'hidden-block': !menuOpen }">
      <ul class="nav-links text-[24px] lg:text-[14px] xl:text-[16px]">
        <li><NuxtLink :to="localePath('/')">home</NuxtLink></li>
        <li><NuxtLink :to="localePath('about')">about</NuxtLink></li>
        <li><NuxtLink :to="localePath('weddingfilms')">wedding films</NuxtLink></li>
      </ul>

      <img class="h-[20%] w-[20%]" src="/logo.png" alt="" />
      <ul class="nav-links text-[24px] lg:text-[14px] xl:text-[16px]">
        <li><NuxtLink :to="localePath('otherfilms')">other films</NuxtLink></li>
        <li><NuxtLink :to="localePath('contact')">contact</NuxtLink></li>
        <li>
          <a
            type="button"
            class="inline-flex justify-center uppercase w-full px-4 cursor-pointer"
            @click="dropdown = !dropdown"
          >
            {{ $i18n.locale }}
            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          <div v-if="dropdown" class="absolute mt-2 w-[180px]">
            <div class="py-1 flex flex-col">
              <a v-if="$i18n.locale !== 'en'" :href="switchLocalePath('en')"
                ><span class="hover:text-pink cursor-pointer">EN</span></a
              >
              <a v-if="$i18n.locale !== 'lt'" :href="switchLocalePath('lt')"
                ><span class="hover:text-pink cursor-pointer">LT</span></a
              >
              <a v-if="$i18n.locale !== 'ru'" :href="switchLocalePath('ru')"
                ><span class="hover:text-pink cursor-pointer">RU</span></a
              >
            </div>
          </div>
        </li>
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
      dropdown: false,
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
  @apply block py-2 w-screen;
}

@screen lg {
  .hidden-block {
    transform: translateY(0);
  }

  .navigation-menu {
    @apply absolute flex-row justify-between items-center w-full bg-[transparent] h-auto pt-4;
  }

  .nav-links {
    @apply text-white flex font-ovo w-[600px];
  }

  .nav-links li {
    @apply my-4 w-[100%]  border-0 tracking-wider;
  }
}
</style>
