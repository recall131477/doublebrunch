<template>
  <div
    class="duration-300 fixed overflow-y-auto inset-[15px] z-[1000] md:inset-5"
    :class="{
      'opacity-100 visible': isOpen,
      'opacity-0 invisible': !isOpen,
    }"
  >
    <div
      class="fixed top-0 left-0 w-full h-full bg-primary bg-opacity-50"
      @click="closeModal"
    ></div>
    <div
      class="relative flex justify-center items-center w-full h-[calc(100%-30px)] max-w-[1000px] pointer-events-none px-[15px] mx-auto my-[15px] md:px-5"
    >
      <div
        class="flex flex-wrap flex-col-reverse bg-secondary w-full pointer-events-auto md:flex-row xl:h-[480px]"
      >
        <div class="w-full md:w-1/2">
          <div class="flex flex-wrap self-start">
            <div
              class="w-1/3"
              v-for="(puzzle, index) in puzzleStart"
              :key="puzzle.url"
              @click="handPuzzle(puzzle, index)"
            >
              <img :src="puzzle.url" alt="拼圖塊" />
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2">
          <div class="relative pt-[100%]">
            <img
              src="https://storage.googleapis.com/vue-course-api.appspot.com/rousong/1648289491156.png"
              alt="拼圖背景"
              class="absolute top-0 left-0 w-full h-full object-cover"
            />
            <div class="absolute top-0 left-0 w-full h-full object-cover">
              <div class="flex flex-wrap">
                <div
                  class="w-1/3"
                  v-for="(puzzle, index) in puzzleEnd"
                  :key="puzzle.url"
                  @click="resetPuzzle(puzzle, index)"
                >
                  <img :src="puzzle.url" alt="拼圖塊" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  watch: {
    puzzleEnd: {
      handler(newArr) {
        this.winIdx = 0;
        newArr.forEach((item, index) => {
          if (item.idx === index) {
            this.winIdx += 1;
          }
        });
      },
      deep: true,
    },
    winIdx: {
      handler(newVal) {
        if (newVal === 9) {
          this.isWin = true;
          this.$emit('get-coupon');
          this.isOpen = false;
        }
      },
    },
  },
  data() {
    return {
      puzzleStart: [
        {
          idx: 0,
          url: 'https://storage.googleapis.com/vue-course-api.appspot.com/rousong/1648288428981.png',
        },
        {
          idx: 1,
          url: 'https://storage.googleapis.com/vue-course-api.appspot.com/rousong/1648288455492.png',
        },
        {
          idx: 2,
          url: 'https://storage.googleapis.com/vue-course-api.appspot.com/rousong/1648288465718.png',
        },
        {
          idx: 3,
          url: 'https://storage.googleapis.com/vue-course-api.appspot.com/rousong/1648288479402.png',
        },
        {
          idx: 4,
          url: 'https://storage.googleapis.com/vue-course-api.appspot.com/rousong/1648288910173.png',
        },
        {
          idx: 5,
          url: 'https://storage.googleapis.com/vue-course-api.appspot.com/rousong/1648288923671.png',
        },
        {
          idx: 6,
          url: 'https://storage.googleapis.com/vue-course-api.appspot.com/rousong/1648288515793.png',
        },
        {
          idx: 7,
          url: 'https://storage.googleapis.com/vue-course-api.appspot.com/rousong/1648288524332.png',
        },
        {
          idx: 8,
          url: 'https://storage.googleapis.com/vue-course-api.appspot.com/rousong/1648288531291.png',
        },
      ],
      puzzleEnd: [],
      winIdx: 0,
      isWin: false,
      isOpen: false,
    };
  },
  methods: {
    randomPuzzle() {
      this.puzzleStart.sort(() => (Math.random() > 0.5 ? -1 : 1));
    },
    handPuzzle(item, index) {
      this.puzzleEnd.push(item);
      this.puzzleStart.splice(index, 1);
    },
    resetPuzzle(item, index) {
      this.puzzleStart.push(item);
      this.puzzleEnd.splice(index, 1);
    },
    openModal() {
      this.isOpen = true;
    },
    closeModal() {
      this.isOpen = false;
    },
  },
  mounted() {
    this.randomPuzzle();
  },
};
</script>
