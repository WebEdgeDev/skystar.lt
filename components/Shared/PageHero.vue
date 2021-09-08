<template>
  <div
    v-if="image"
    class="hero-img h-screen bg-top bg-cover bg-no-repeat darker"
    :style="{ 'background-image': 'url(' + require(`assets/img/${image}`) + ')' }"
  ></div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
  },
}
</script>
<style lang="postcss">
.darker {
  filter: brightness(70%);
}
</style>
