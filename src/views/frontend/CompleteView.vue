<template>
  <ProgressBar></ProgressBar>
  <section>
    <h2 class="text-20px text-white bg-primary p-5">感謝您的購買</h2>
    <ul class="px-5 pt-5 pb-10">
      <li class="flex border-primary border-b-2 pb-5">
        <div class="w-1/2">
          <span class="text-primary">下單時間</span>
        </div>
        <div class="w-1/2">
          <span class="text-primary">2022/3/20</span>
        </div>
      </li>
      <li class="flex border-primary border-b-2 py-5">
        <div class="w-1/2">
          <span class="text-primary">訂單編號</span>
        </div>
        <div class="w-1/2">
          <span class="text-primary">-My_Pe-0tzpnCHZBvQzx</span>
        </div>
      </li>
      <li class="flex border-primary border-b-2 py-5">
        <div class="w-1/2">
          <span class="text-primary">姓名</span>
        </div>
        <div class="w-1/2">
          <span class="text-primary">測試</span>
        </div>
      </li>
      <li class="flex border-primary border-b-2 py-5">
        <div class="w-1/2">
          <span class="text-primary">電話</span>
        </div>
        <div class="w-1/2">
          <span class="text-primary">0912123000</span>
        </div>
      </li>
      <li class="flex border-primary border-b-2 py-5">
        <div class="w-1/2">
          <span class="text-primary">E-mail</span>
        </div>
        <div class="w-1/2">
          <span class="text-primary">test@gmail.com</span>
        </div>
      </li>
      <li class="flex border-primary border-b-2 py-5">
        <div class="w-1/2">
          <span class="text-primary">地址</span>
        </div>
        <div class="w-1/2">
          <span class="text-primary">很遠的地方</span>
        </div>
      </li>
      <li class="flex border-primary border-b-2 py-5">
        <div class="w-1/2">
          <span class="text-primary">備註</span>
        </div>
        <div class="w-1/2">
          <span class="text-primary">無</span>
        </div>
      </li>
      <li class="flex border-primary border-b-2 py-5">
        <div class="w-1/2">
          <span class="text-primary">總計</span>
        </div>
        <div class="w-1/2">
          <span class="text-primary">$420</span>
        </div>
      </li>
    </ul>
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
        <a
          href="javascript:;"
          class="inline-block text-primary border-primary border-2 px-12 py-4"
          >前往首頁
        </a>
        <a
          href="javascript:;"
          class="inline-block text-white bg-primary px-12 py-[18px] ml-5"
          >繼續購物
        </a>
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
