<template>
  <div class="loading" :class="{ 'is-active': isLoading }">
    <div class="loading__main">
      <span
        class="absolute top-[22.5%] left-1/2 -translate-x-1/2 z-10 flex justify-center items-center text-32px text-secondary w-full h-full"
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
