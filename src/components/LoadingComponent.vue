<template>
  <div class="loading" :class="{ 'is-active': isLoading }">
    <div class="loading__main">
      <span
        class="absolute top-[23%] left-1/2 -translate-x-1/2 z-10 flex justify-center items-center text-14px text-secondary w-full h-full tracking-[0.2em] -mr-[0.2em]"
        >午分<br />之食</span
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
