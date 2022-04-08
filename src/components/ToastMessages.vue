<template>
  <div class="fixed top-[15px] right-[15px] z-[1000] md:top-5 md:right-5">
    <div
      v-for="(msg, index) in messages"
      :key="index"
      class="mb-5"
      :class="`toastMessage${index}`"
    >
      <div
        class="relative flex justify-between items-center text-white min-w-[300px] p-5"
        :class="{
          'bg-primary': msg.style === 'success',
          'bg-warning': msg.style === 'danger',
        }"
      >
        <div
          :class="{
            'bg-primary': msg.style === 'success',
            'bg-warning': msg.style === 'danger',
          }"
        >
          <span class="inline-block rounded"></span>
          <span>{{ msg.title }}</span>
        </div>
        <button
          type="button"
          class="duration-300 relative w-6 h-6 hover:rotate-90"
          @click="clearToastMessage(index)"
        >
          <span
            class="block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white -rotate-45 w-4 h-[2px]"
          >
          </span>
          <span
            class="block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rotate-45 w-4 h-[2px]"
          >
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import emitter from '@/methods/emitter';

export default {
  data() {
    return {
      messages: [],
    };
  },
  methods: {
    toastMessageShow() {
      setTimeout(() => {
        this.messages.shift();
      }, 5000);
    },
    clearToastMessage(index) {
      this.messages.splice(index, 1);
    },
  },
  mounted() {
    emitter.on('push-message', (message) => {
      const { style = 'success', title, content } = message;
      this.messages.push({ style, title, content });
      this.toastMessageShow();
    });
  },
};
</script>
