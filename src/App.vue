<template>
  <ToastMessages></ToastMessages>
  <router-view v-if="routerAlive"></router-view>
</template>

<script>
import ToastMessages from '@/components/ToastMessages.vue';

export default {
  data() {
    return {
      routerAlive: true,
    };
  },
  components: {
    ToastMessages,
  },
  provide() {
    return {
      routerRefresh: this.routerRefresh,
    };
  },
  watch: {
    $route(to) {
      const nowTitle = to.meta.title || '';
      document.title = `${nowTitle} 午分之食`;
    },
  },
  methods: {
    routerRefresh() {
      this.routerAlive = false;
      this.$nextTick(() => {
        this.routerAlive = true;
      });
    },
  },
};
</script>
