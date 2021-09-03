<template>
  <div
    class="hero-img h-screen bg-top bg-cover bg-no-repeat"
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
