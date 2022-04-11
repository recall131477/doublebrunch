<template>
  <div class="loading" :class="{ 'is-active': isLoading }">
    <div class="loading__main">
      <div
        class="loading__square absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] bg-primary rounded -mt-2"
      ></div>
      <span
        class="relative block text-24px text-secondary w-full h-full pt-2"
        >午</span
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
