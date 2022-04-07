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
        <h2 class="text-white bg-primary text-center py-5">訂單細節</h2>
        <div class="bg-secondary">
          <div class="grid grid-cols-2 gap-5 p-5">
            <div class="col-span-1">
              <h3 class="text-24px text-primary mb-5">用戶資料</h3>
              <ul class="text-primary">
                <li class="flex pb-5">
                  <div class="w-1/2">
                    <span>姓名</span>
                  </div>
                  <div class="w-1/2">
                    <span>test</span>
                  </div>
                </li>
                <li class="flex border-primary border-t-2 py-5">
                  <div class="w-1/2">
                    <span>Email</span>
                  </div>
                  <div class="w-1/2">
                    <span>ttre@cc.cc</span>
                  </div>
                </li>
                <li class="flex border-primary border-t-2 py-5">
                  <div class="w-1/2">
                    <span>電話</span>
                  </div>
                  <div class="w-1/2">
                    <span>0911111111</span>
                  </div>
                </li>
                <li class="flex border-primary border-t-2 pt-5">
                  <div class="w-1/2">
                    <span>地址</span>
                  </div>
                  <div class="w-1/2">
                    <span>test</span>
                  </div>
                </li>
              </ul>
            </div>
            <div class="col-span-1">
              <h3 class="text-24px text-primary mb-5">訂單細節</h3>
              <ul class="text-primary">
                <li class="flex pb-5">
                  <div class="w-1/2">
                    <span>訂單編號</span>
                  </div>
                  <div class="w-1/2">
                    <span>-MzeF0rYhjSAT2WZkACq</span>
                  </div>
                </li>
                <li class="flex border-primary border-t-2 py-5">
                  <div class="w-1/2">
                    <span>下單時間</span>
                  </div>
                  <div class="w-1/2">
                    <span>2022/4/2</span>
                  </div>
                </li>
                <li class="flex border-primary border-t-2 py-5">
                  <div class="w-1/2">
                    <span>付款時間</span>
                  </div>
                  <div class="w-1/2">
                    <span>2022/4/2</span>
                  </div>
                </li>
                <li class="flex border-primary border-t-2 py-5">
                  <div class="w-1/2">
                    <span>付款狀態</span>
                  </div>
                  <div class="w-1/2">
                    <span>已付款</span>
                  </div>
                </li>
                <li class="flex border-primary border-t-2 pt-5">
                  <div class="w-1/2">
                    <span>總金額</span>
                  </div>
                  <div class="w-1/2">
                    <span>$330</span>
                  </div>
                </li>
              </ul>
            </div>
            <div class="col-span-2">
              <h3 class="text-24px text-primary mb-5">選購商品</h3>
              <ul class="text-primary">
                <li class="flex pb-5">
                  <div class="w-1/3">
                    <span>柳橙汁</span>
                  </div>
                  <div class="w-1/3">
                    <span>4 / 杯</span>
                  </div>
                  <div class="w-1/3">
                    <span>$200</span>
                  </div>
                </li>
                <li class="flex border-primary border-t-2 py-5">
                  <div class="w-1/3">
                    <span>柳橙汁</span>
                  </div>
                  <div class="w-1/3">
                    <span>4 / 杯</span>
                  </div>
                  <div class="w-1/3">
                    <span>$200</span>
                  </div>
                </li>
                <li class="flex border-primary border-t-2 py-5">
                  <div class="w-1/3">
                    <span>柳橙汁</span>
                  </div>
                  <div class="w-1/3">
                    <span>4 / 杯</span>
                  </div>
                  <div class="w-1/3">
                    <span>$200</span>
                  </div>
                </li>
              </ul>
              <div class="flex justify-end items-center">
                <input
                  type="checkbox"
                  id="test"
                  class="btn-check mr-2"
                  :true-value="1"
                  :false-value="0"
                />
                <label for="test" class="text-primary">已付款</label>
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
              修改
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
