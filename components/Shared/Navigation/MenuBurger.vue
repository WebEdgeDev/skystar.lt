<template>
  <div v-if="mobile" class="menu-block">
    <input id="menu-toogle" type="checkbox" @click="menuToggle" />
    <label for="menu-toogle"></label>
  </div>
</template>

<script>
export default {
  props: {
    mobile: {
      type: Boolean,
      required: true,
    },
    menuOpen: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    menuToggle() {
      this.$emit('menu-toggle', !this.menuOpen)
    },
  },
}
</script>

<style lang="postcss" scoped>
.menu-block {
  @apply fixed top-0 right-0 z-50;
}

#menu-toogle {
  @apply cursor-pointer absolute top-[14px] right-[24px] w-[40px] h-[40px] opacity-0;
}

label {
  @apply cursor-pointer absolute top-[34px] right-[24px] bg-white h-[3px] w-[40px] duration-300;
}

label::after {
  @apply absolute top-[-10px] left-[6px] bg-white h-[3px] w-[28px] duration-300;

  content: '';
}

label::before {
  @apply absolute top-[10px] left-[6px] bg-white h-[3px] w-[28px] duration-300;

  content: '';
}

#menu-toogle:checked ~ label::after {
  @apply bg-white top-0;

  transform: rotateZ(41deg);
}

#menu-toogle:checked ~ label {
  @apply bg-[transparent];
}

#menu-toogle:checked ~ label::before {
  @apply bg-white top-0;

  transform: rotateZ(-41deg);
}
@screen lg {
  .menu-block {
    @apply hidden;
  }
}
</style>
