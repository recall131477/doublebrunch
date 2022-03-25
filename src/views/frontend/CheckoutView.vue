<template>
  <ProgressBar></ProgressBar>
  <section class="checkout">
    <h2 class="text-20px text-white bg-primary p-5">填寫資訊</h2>
    <form class="p-5">
      <div class="grid grid-cols-2 gap-5">
        <div class="col-span-1">
          <label for="name" class="block text-primary w-full mb-1">姓名</label>
          <div class="relative border-primary border-2 border-opacity-50">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="請輸入姓名"
              class="text-primary bg-secondary w-full h-[60px] px-5"
            />
            <div class="absolute top-1/2 right-5 -translate-y-1/2">
              <img
                src="@/assets/images/icon-checked.svg"
                alt="icon-checked"
                class="bg-primary rounded-full"
              />
            </div>
          </div>
        </div>
        <div class="col-span-1">
          <label for="email" class="block text-primary w-full mb-1"
            >E-mail</label
          >
          <div class="relative border-warning border-2">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="請輸入E-mail"
              class="text-primary bg-secondary w-full h-[60px] px-5"
            />
            <div class="absolute top-1/2 right-5 -translate-y-1/2">
              <img
                src="@/assets/images/icon-remind.svg"
                alt="icon-remind"
                class="bg-warning rounded-full"
              />
            </div>
          </div>
          <span class="block text-14px text-warning mt-1"
            >E-mail 須為有效的電子信箱</span
          >
        </div>
        <div class="col-span-1">
          <label for="tel" class="block text-primary w-full mb-1">電話</label>
          <div class="relative border-primary border-2 border-opacity-50">
            <input
              type="tel"
              name="tel"
              id="tel"
              placeholder="請輸入電話"
              class="text-primary bg-secondary w-full h-[60px] px-5"
            />
            <div class="absolute top-1/2 right-5 -translate-y-1/2">
              <img
                src="@/assets/images/icon-checked.svg"
                alt="icon-checked"
                class="bg-primary rounded-full"
              />
            </div>
          </div>
        </div>
        <div class="col-span-1">
          <label for="address" class="block text-primary w-full mb-1"
            >地址</label
          >
          <div class="relative border-primary border-2 border-opacity-50">
            <input
              type="text"
              name="address"
              id="address"
              placeholder="請輸入地址"
              class="text-primary bg-secondary w-full h-[60px] px-5"
            />
            <div class="absolute top-1/2 right-5 -translate-y-1/2">
              <img
                src="@/assets/images/icon-checked.svg"
                alt="icon-checked"
                class="bg-primary rounded-full"
              />
            </div>
          </div>
        </div>
        <div class="col-span-2">
          <label for="remark" class="block text-primary w-full mb-1"
            >備註</label
          >
          <div class="border-primary border-2 border-opacity-50">
            <textarea
              name="remark"
              id="remark"
              class="text-primary bg-secondary resize-none w-full min-h-[160px] p-5"
            ></textarea>
          </div>
        </div>
      </div>
    </form>
  </section>
  <section>
    <div class="flex justify-between bg-primary p-5">
      <h2 class="text-20px text-white">訂單資訊</h2>
      <img src="@/assets/images/icon-arrow-down.svg" alt="icon-arrow-down" />
    </div>
    <div class="p-5">
      <ul>
        <li class="flex border-primary border-b-2 pb-2.5">
          <div class="w-1/4">
            <span class="text-primary">商品資訊</span>
          </div>
          <div class="w-1/4">
            <span class="text-primary">單件價格</span>
          </div>
          <div class="w-1/4">
            <span class="text-primary">數量</span>
          </div>
          <div class="w-1/4">
            <span class="text-primary">小計</span>
          </div>
        </li>
        <li class="relative flex items-center border-primary border-b-2 py-5">
          <div class="w-1/4">
            <div class="flex items-center">
              <img
                src="@/assets/images/bg-test.png"
                alt="測試圖片"
                class="w-20 mr-5"
              />
              <span class="text-primary">薯泥香雞</span>
            </div>
          </div>
          <div class="w-1/4">
            <span class="text-primary">$60</span>
          </div>
          <div class="w-1/4">
            <span class="text-primary">3</span>
          </div>
          <div class="w-1/4">
            <span class="text-primary">小計</span>
          </div>
        </li>
        <li class="relative flex items-center border-primary border-b-2 py-5">
          <div class="w-1/4">
            <div class="flex items-center">
              <img
                src="@/assets/images/bg-test.png"
                alt="測試圖片"
                class="w-20 mr-5"
              />
              <span class="text-primary">薯泥香雞</span>
            </div>
          </div>
          <div class="w-1/4">
            <span class="text-primary">$60</span>
          </div>
          <div class="w-1/4">
            <span class="text-primary">3</span>
          </div>
          <div class="w-1/4">
            <span class="text-primary">小計</span>
          </div>
        </li>
      </ul>
      <div class="text-right mt-5">
        <p class="text-20px text-primary opacity-50 mb-2">總計金額 : $420</p>
        <p class="text-24px text-primary mb-5">折扣後金額 : $320</p>
        <router-link
          to="/checkorder"
          class="inline-block text-white bg-primary px-12 py-[18px]"
          >送出訂單</router-link
        >
      </div>
    </div>
  </section>
</template>

<script>
import ProgressBar from '@/components/frontend/ProgressBar.vue';

export default {
  components: {
    ProgressBar,
  },
};
</script>
