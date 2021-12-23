<template>
  <nav class="font-gilda text-2xl lg:text-lg">
    <MenuBurger :mobile="mobile" :menu-open="menuOpen" @menu-toggle="menuToggle" />
    <div
      class="
        z-40
        w-full
        h-screen
        fixed
        flex flex-col
        justify-around
        items-center
        bg-second
        lg:absolute lg:h-64 lg:flex-row lg:justify-between lg:items-center lg:bg-[transparent]
      "
      :class="{ 'hidden-block': !menuOpen }"
    >
      <ul class="text-center text-white uppercase lg:flex lg:justify-around lg:w-full lg:pt-5">
        <li>
          <NuxtLink class="hover:text-pink block" :to="localePath('/')"> {{ $t('nav[0].home') }}</NuxtLink>
        </li>
        <li>
          <NuxtLink class="hover:text-pink block" :to="localePath('/about')">{{ $t('nav[0].about') }}</NuxtLink>
        </li>
        <li>
          <NuxtLink class="hover:text-pink block" :to="localePath('/wedding-films')">{{ $t('nav[0].weddingfilms') }}</NuxtLink>
        </li>
      </ul>

      <nuxt-link to="/" class="w-[50%] lg:w-[800px]">
        <img src="/logo.png" alt="" />
      </nuxt-link>
      <ul class="text-center text-white uppercase lg:flex lg:justify-around lg:w-full lg:pt-5">
        <li>
          <NuxtLink class="hover:text-pink block" :to="localePath('/news')">{{ $t('nav[0].news') }}</NuxtLink>
        </li>
        <li>
          <NuxtLink class="hover:text-pink block" :to="localePath('/contacts')">{{ $t('nav[0].contact') }}</NuxtLink>
        </li>
        <li>
          <div class="relative" @mouseleave="dropdown = false">
            <button class="mx-2 uppercase" @click="dropdown = !dropdown">
              {{ $i18n.locale }}
              <span class="inline-block border-white border-r-2 border-b-2 mb-1 p-[2px] up" :class="{ down: !dropdown }"></span>
            </button>
            <div v-if="dropdown" class="absolute flex flex-col w-[100%] left-[-6px]">
              <a v-if="$i18n.locale !== 'en'" :href="switchLocalePath('en')"><span class="hover:text-pink">EN</span></a>
              <a v-if="$i18n.locale !== 'lt'" :href="switchLocalePath('lt')"><span class="hover:text-pink">LT</span></a>
              <a v-if="$i18n.locale !== 'ru'" :href="switchLocalePath('ru')" class="pb-5"><span class="hover:text-pink">RU</span></a>
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

.up {
  transform: rotate(-135deg);
}

.down {
  transform: rotate(45deg);
}

@screen lg {
  .hidden-block {
    transform: translateY(0);
  }
}
</style>
