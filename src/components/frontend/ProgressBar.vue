<template>
  <section>
    <div class="border-primary border-b-2 p-[15px] md:p-5">
      <ul class="flex justify-evenly items-center md:justify-center">
        <li>
          <div
            class="text-primary/50 text-center"
            :class="{ '!text-primary': step >= '1' }"
          >
            <span class="block text-12px">Step.1</span>
            <span class="block text-14px md:text-16px">購物車</span>
          </div>
        </li>
        <li>
          <img
            src="@/assets/images/icon-progress-arrow.svg"
            alt="icon-progress-arrow"
            class="opacity-50 md:mx-[30px]"
            :class="{ '!opacity-100': step >= '2' }"
          />
        </li>
        <li>
          <div
            class="text-primary/50 text-center"
            :class="{ '!text-primary': step >= '2' }"
          >
            <span class="block text-12px">Step.2</span>
            <span class="block text-14px md:text-16px">訂單資訊</span>
          </div>
        </li>
        <li>
          <img
            src="@/assets/images/icon-progress-arrow.svg"
            alt="icon-progress-arrow"
            class="opacity-50 md:mx-[30px]"
            :class="{ '!opacity-100': step >= '3' }"
          />
        </li>
        <li>
          <div
            class="text-primary/50 text-center"
            :class="{ '!text-primary': step >= '3' }"
          >
            <span class="block text-12px">Step.3</span>
            <span class="block text-14px md:text-16px">確認訂單</span>
          </div>
        </li>
        <li>
          <img
            src="@/assets/images/icon-progress-arrow.svg"
            alt="icon-progress-arrow"
            class="opacity-50 md:mx-[30px]"
            :class="{ '!opacity-100': step === '4' }"
          />
        </li>
        <li>
          <div
            class="text-primary/50 text-center"
            :class="{ '!text-primary': step === '4' }"
          >
            <span class="block text-12px">Step.4</span>
            <span class="block text-14px md:text-16px">完成訂單</span>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    step: {
      type: String,
      default: '',
    },
  },
};
</script>
