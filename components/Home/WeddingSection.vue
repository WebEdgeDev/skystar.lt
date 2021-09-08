<template>
  <div class="container mx-auto py-20 text-center">
    <h2 class="text-center text-6xl pb-10 tracking-wide font-gilda">WEDDING FILMS</h2>
    <div
      class="
        grid
        md:grid-flow-col md:grid-cols-5 md:grid-rows-4
        gap-5
        md:max-h-[600px]
        pb-5
        font-ovo
      "
    >
      <div class="md:col-span-3 md:row-span-4 relative">
        <h2 class="weddingfilm-title z-20">Title</h2>
        <div class="overlay"></div>
        <img src="weddingfilms/3.jpg" class="w-full h-full object-cover" alt="" />
      </div>
      <div class="md:col-span-2 md:row-span-2 relative">
        <h2 class="weddingfilm-title z-20">Title</h2>
        <div class="overlay"></div>
        <img src="weddingfilms/2.jpg" class="w-full h-full object-cover" alt="" />
      </div>
      <div class="md:col-span-2 md:row-span-2 relative">
        <h2 class="weddingfilm-title z-20">Title</h2>
        <div class="overlay"></div>
        <img src="weddingfilms/1.jpg" class="w-full h-full object-cover" alt="" />
      </div>
    </div>
    <div
      class="
        grid
        md:grid-flow-col md:grid-cols-5 md:grid-rows-4
        gap-5
        md:max-h-[600px]
        pb-10
        font-ovo
      "
    >
      <div class="md:col-span-2 md:row-span-2 relative">
        <h2 class="weddingfilm-title z-20">Lorem ipsum dolor.</h2>
        <div class="overlay"></div>
        <img src="weddingfilms/4.jpg" class="w-full h-full object-cover" alt="" />
      </div>
      <div class="md:col-span-2 md:row-span-2 relative">
        <h2 class="weddingfilm-title z-20">Title</h2>
        <div class="overlay"></div>
        <img src="weddingfilms/5.jpg" class="w-full h-full object-cover" alt="" />
      </div>
      <div class="md:col-span-3 md:row-span-4 relative">
        <h2 class="weddingfilm-title z-20">Title</h2>
        <div class="overlay"></div>
        <img src="weddingfilms/6.jpg" class="w-full h-full object-cover" alt="" />
      </div>
    </div>
    <div class="text-center pb-5">
      <nuxt-link to="/weddingfilms" class="border-2 px-4 py-2">More films</nuxt-link>
    </div>
  </div>
</template>
<style lang="postcss" scoped>
.weddingfilm-title {
  @apply text-white  text-3xl  absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%];
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
