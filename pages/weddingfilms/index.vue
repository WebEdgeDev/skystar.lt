<template>
  <div>
    <PageHero image="weddingfilms.jpg" title="Wedding Films" />
    <div v-if="works.length > 0" class="lg:p-64">
      <div
        v-for="work in works"
        :key="work.slug"
        :to="`/work/${work.slug}`"
        class="flex card lg:pb-32"
      >
        <nuxt-link :to="`/weddingfilms/${work.slug}`" class="w-full lg:w-1/2 lg:h-[650px]">
          <!-- <picture>
          <source :srcset="work.image.small" type="image/jpeg" />
          <source :srcset="work.image.medium" type="image/jpeg" />
          <img :src="work.image.large" type="image/jpeg" />
           </picture> -->
          <img :src="work.image.url" alt="" class="h-full w-full object-cover" />
        </nuxt-link>
        <div class="hidden lg:flex lg:justify-center lg:items-left lg:flex-col w-1/2 px-16">
          <div class="text-center px-20">
            <h2 class="text-4xl uppercase font-coda pb-4">{{ work.title }}</h2>
            <p class="leading-1 pb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et vel suscipit
              necessitatibus atque ut voluptate cum velit ea optio numquam totam quis placeat
              consequuntur similique
            </p>
            <p class="leading-1 pb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et vel suscipit
              necessitatibus atque ut voluptate cum velit ea optio numquam totam quis placeat
              consequuntur similique
            </p>
            <p class="leading-1 pb-20">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et vel suscipit
              necessitatibus atque ut voluptate cum velit ea optio numquam totam quis placeat
              consequuntur similique
            </p>
            <NuxtLink
              :to="`/weddingfilms/${work.slug}`"
              class="uppercase text-sm px-10 py-3 border font-ovo"
            >
              Find out more
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div v-else>No projects</div>
  </div>
</template>

<script>
export default {
  async asyncData({ i18n }) {
    return {
      works: await (
        await fetch(`https://webedge-strapi.herokuapp.com/works?_locale=${i18n.locale}`)
      ).json(),
    }
  },
  nuxtI18n: {
    paths: {
      lt: '/vestuviniai-filmai',
      en: '/wedding-films',
      ru: '/svadebnyje-filmy',
    },
  },
}
</script>
<style lang="postcss" scoped>
.card:nth-child(even) {
  @apply flex-row-reverse;
}
</style>
