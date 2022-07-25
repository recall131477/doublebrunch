import { defineStore } from 'pinia';

export default defineStore('statusStore', {
  state: () => ({
    isLoading: false,
  }),
  actions: {
    changeLoading() {
      this.isLoading = !this.isLoading;
    },
  },
});
