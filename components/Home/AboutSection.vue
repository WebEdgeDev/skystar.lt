<template>
  <div class="container mx-auto px-6 py-24 relative">
    <h2 class="text-xl text-center pb-4 uppercase">About us</h2>
    <h3 class="text-3xl text-center uppercase">Wedding films</h3>
    <h3 class="text-3xl text-center uppercase">Natural & pure</h3>
    <div>
      <div>
        <img class="hidden lg:absolute top-0" src="@/static/image1.jpg" alt="image1" />
        <p class="py-6 text-sm">
          Hello, glad you are here! We are Anne, Valerie, Riccardo and Marco destination wedding
          photographers and wedding videographers from Europe. We create authentic, natural and
          emotional weddingphotos and wedding films for creative weddings. As storytellers and
          friends, we want to tell the day of your wedding in pictures and movies. Instead of weird
          posing, we love to capture real moments as they actually happen.
        </p>
      </div>
      <div>
        <img class="" src="@/static/image2.jpg" alt="image2" />
      </div>
      <div>
        <p class="py-6 text-sm">
          We totally love to be inspired by your personalities and by your wedding to tell your
          individual story. Because every story, every couple and every wedding is so unique and
          different. With us you will get a wedding reportage with authentic pictures, emotional
          films, real feelings and memories. We are a bit boho, unconventional and love to travel
          the world to capture special stories and meet great people. People who are like us, whose
          hearts also beat faster at unconventional, creative weddings with great attention to
          detail. Free spirit and urban weddings as well as hippie & bohemian style are some of our
          favorites! We love it when your wedding reflects you as a couple.
        </p>
        <img class="" src="@/static/image3.jpg" alt="image3" />
      </div>
      <div class="text-center pt-12">
        <NuxtLink to="/" class="uppercase text-sm px-10 py-3 border"> Write us </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
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
</style>

