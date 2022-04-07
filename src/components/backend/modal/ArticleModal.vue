<template>
  <div
    class="duration-300 fixed overflow-y-auto z-[1000] inset-0"
    v-if="isOpen"
  >
    <div
      class="fixed top-0 left-0 w-full h-full bg-primary bg-opacity-50"
    ></div>
    <div
      class="relative flex justify-center items-center w-full min-h-[calc(100%-2.5rem)] max-w-[960px] mx-auto my-5"
    >
      <div class="w-full">
        <h2 class="text-white bg-primary text-center py-5">新增文章</h2>
        <div class="bg-secondary">
          <div class="grid grid-cols-3 gap-5 p-5">
            <div class="col-span-1">
              <div class="space-y-5">
                <div>
                  <label for="title" class="block text-primary w-full mb-1"
                    >標題
                  </label>
                  <input
                    type="text"
                    id="title"
                    placeholder="請輸入標題"
                    class="text-primary bg-secondary border-primary border-2 w-full h-[60px] px-5"
                  />
                </div>
                <div>
                  <label for="imgUrl" class="block text-primary w-full mb-1"
                    >圖片網址
                  </label>
                  <input
                    type="text"
                    id="imgUrl"
                    placeholder="請輸入圖片連結"
                    class="text-primary bg-secondary border-primary border-2 w-full h-[60px] px-5"
                  />
                </div>
                <div>
                  <label for="author" class="block text-primary w-full mb-1"
                    >作者
                  </label>
                  <input
                    type="text"
                    id="author"
                    placeholder="請輸入作者"
                    class="text-primary bg-secondary border-primary border-2 w-full h-[60px] px-5"
                  />
                </div>
                <div>
                  <label for="createDate" class="block text-primary w-full mb-1"
                    >文章建立日期
                  </label>
                  <input
                    type="date"
                    id="createDate"
                    class="text-primary bg-secondary border-primary border-2 w-full h-[60px] px-5"
                  />
                </div>
              </div>
            </div>
            <div class="col-span-2 space-y-5">
              <div>
                <label for="tag" class="block text-primary w-full mb-1"
                  >標籤</label
                >
                <div class="flex">
                  <div class="relative">
                    <input
                      type="text"
                      id="tag"
                      placeholder="請輸入標籤"
                      class="text-primary bg-secondary border-primary border-2 w-[120px] h-10 p-2.5"
                    />
                    <button
                      type="button"
                      class="absolute top-1/2 right-2.5 -translate-y-1/2 w-5 h-5 bg-warning rounded-full"
                    >
                      <span
                        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 w-2 h-[2px] bg-white"
                      ></span>
                      <span
                        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-[2px] bg-white"
                      ></span>
                    </button>
                  </div>
                  <button
                    type="button"
                    class="duration-300 flex justify-center items-center text-primary border-primary border-2 w-[120px] h-10 p-2.5 ml-2.5 hover:text-white hover:bg-primary"
                  >
                    新增標籤
                  </button>
                </div>
              </div>
              <div>
                <label for="description" class="block text-primary w-full mb-1"
                  >文章描述</label
                >
                <input
                  type="text"
                  id="description"
                  placeholder="請輸入文章描述"
                  class="text-primary bg-secondary border-primary border-2 w-full h-[60px] px-5"
                />
              </div>
              <textarea class="text-primary bg-secondary border-primary border-2 w-full min-h-[300px] resize-none p-5"></textarea>
              <div class="flex items-center">
                <input
                  type="checkbox"
                  id="test"
                  class="btn-check mr-2"
                  :true-value="1"
                  :false-value="0"
                />
                <label for="test" class="text-primary">是否公開</label>
              </div>
            </div>
          </div>
          <div class="text-right border-primary border-t-2 p-5">
            <button
              type="button"
              class="duration-300 text-warning border-warning border-2 px-12 py-2.5 hover:text-white hover:bg-warning"
            >
              取消
            </button>
            <button
              type="button"
              class="duration-300 text-primary border-primary border-2 px-12 py-2.5 ml-2.5 hover:text-white hover:bg-primary"
            >
              確認
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style lang="scss">
input::placeholder {
  opacity: 0.5;
}
</style>
