<template>
  <ul class="flex justify-center h-[60px] border-primary border-t-2">
    <li>
      <button
        type="button"
        class="flex justify-center items-center opacity-50 h-full cursor-not-allowed px-[25px]"
        :disabled="pages.current_page === 1"
        :class="{ 'opacity-100 cursor-pointer': pages.has_pre }"
        @click="changePages(pages.current_page - 1)"
      >
        <img src="@/assets/images/icon-arrow-left.svg" alt="icon-arrow-left" />
      </button>
    </li>
    <li v-for="(page, index) in pages.total_pages" :key="index">
      <button
        type="button"
        class="flex justify-center items-center text-primary opacity-50 h-full px-[15px]"
        :class="{ 'opacity-100': page === pages.current_page }"
        @click="changePages(page)"
      >
        {{ page }}
      </button>
    </li>
    <li>
      <button
        type="button"
        class="flex justify-center items-center opacity-50 h-full cursor-not-allowed px-[25px]"
        :disabled="pages.current_page === pages.total_pages"
        :class="{ 'opacity-100 cursor-pointer': pages.has_next }"
        @click="changePages(pages.current_page + 1)"
      >
        <img
          src="@/assets/images/icon-arrow-right.svg"
          alt="icon-arrow-right"
        />
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    pages: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    changePages(item) {
      this.$emit('change-pages', item);
    },
  },
};
</script>
