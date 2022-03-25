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
