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
