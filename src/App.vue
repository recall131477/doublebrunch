<template>
  <router-view v-if="routerAlive"></router-view>
</template>

<script>
export default {
  data() {
    return {
      routerAlive: true,
    };
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
