<template>
  <div class="fixed top-5 right-5 z-[1000]">
    <div
      v-for="(msg, index) in messages"
      :key="index"
      class="text-white bg-primary p-5 mb-5"
      :class="`toast${index}`"
    >
      <div>
        <span :class="`bg-${msg.style}`" class="inline-block rounded"></span>
        <span>{{ msg.title }}</span>
        <button
          type="button"
          @click="clearToastMessage(index)"
        ></button>
      </div>
      <div v-if="msg.content">
        {{ msg.content }}
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
      }, 6000);
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
