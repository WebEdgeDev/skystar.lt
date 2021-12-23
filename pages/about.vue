<template>
  <div>
    <PageHero image="about.jpg" />
    <div>
      <h2 class="text-6xl">About us</h2>
    </div>
  </div>
</template>

<script>
export default {
  nuxtI18n: {
    paths: {
      lt: '/apie-mus',
      en: '/about',
      ru: '/o-nas',
    },
  },
}
</script>
