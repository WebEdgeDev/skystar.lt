<template>
  <div v-if="image" class="hero-img h-screen bg-top bg-cover bg-no-repeat flex flex-col justify-end items-center pb-32" :style="backgroundImage">
    <h2 class="text-[28px] lg:text-6xl text-white pt-40 font-gilda">{{ title }}</h2>
    <h2 class="text-xl lg:text-3xl text-white font-bold font-ovo">{{ subTitle }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: '',
    },
    subTitle: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      backgroundImage: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${require(`@/assets/img/${this.image}`)})`,
      },
    }
  },
}
</script>
