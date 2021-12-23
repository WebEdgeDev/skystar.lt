<template>
  <div>
    <PageHero image="otherfilms.jpg" />
    <section class="py-24">
      <h3 class="text-center text-6xl pb-6 tracking-wide font-gilda uppercase">Visos naujienos</h3>
      <div class="flex items-center flex-wrap container mx-auto">
        <a
          v-for="article in newsList"
          :key="article.id"
          :href="article.url"
          class="w-1/3 text-main px-10 pb-20"
        >
          <TheCard :card="article" />
        </a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newsList: [
        {
          id: 1,
          thumb: 'https://dergunov.com/uploads/blog/1594560715201simple-crm.jpg',
          h1: 'Оптимизация сайтов в прямом эфире',
          introtext:
            'Полезно для начинающих SEO специалистов, и людей, которые хотят разбираться в оптимизации.',
          url: '#',
          tag: 'Интернет-маркетинг',
        },
        {
          id: 2,
          thumb: 'https://dergunov.com/uploads/blog/1591449438107nuxt-example.jpg',
          h1: '30 примеров сайтов на Nuxt.js',
          introtext: 'Список использующих Nuxt.js и Vue.js сайтов со ссылками на проекты',
          url: '#',
          tag: ['Обучение', 'Интернет-маркетинг', 'Обо всём'],
        },
        {
          id: 3,
          thumb: 'https://dergunov.com/uploads/blog/1590259006052new2020-2.jpg',
          h1: 'Нововведения 2020',
          introtext: 'Перенос сайта с MODX на Nuxt.js.',
          url: '#',
          tag: ['Обо всём'],
        },
        {
          id: 4,
          thumb: 'https://dergunov.com/uploads/blog/1594560715201simple-crm.jpg',
          h1: 'Оптимизация сайтов в прямом эфире',
          introtext:
            'Полезно для начинающих SEO специалистов, и людей, которые хотят разбираться в оптимизации.',
          url: '#',
          tag: ['Интернет-маркетинг'],
        },
        {
          id: 5,
          thumb: 'https://dergunov.com/uploads/blog/1591449438107nuxt-example.jpg',
          h1: '30 примеров сайтов на Nuxt.js',
          introtext: 'Список использующих Nuxt.js и Vue.js сайтов со ссылками на проекты',
          url: '#',
          tag: ['Обучение'],
        },
        {
          id: 6,
          thumb: 'https://dergunov.com/uploads/blog/1590259006052new2020-2.jpg',
          h1: 'Нововведения 2020',
          introtext: 'Перенос сайта с MODX на Nuxt.js.',
          url: '#',
          tag: ['Обо всём'],
        },
        {
          id: 7,
          thumb: 'https://dergunov.com/uploads/blog/1590259006052new2020-2.jpg',
          h1: 'Нововведения 2020',
          introtext: 'Перенос сайта с MODX на Nuxt.js.',
          url: '#',
          tag: ['Обо всём'],
        },
      ],
    }
  },
  nuxtI18n: {
    paths: {
      lt: '/naujienos',
      en: '/news',
      ru: '/novosti',
    },
  },
}
</script>
