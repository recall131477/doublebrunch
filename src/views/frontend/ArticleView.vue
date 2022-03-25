<template>
  <section>
    <div class="relative h-[calc(100vh-140px)]">
      <div class="grid grid-cols-5 h-full">
        <div class="col-span-3">
          <div class="p-10">
            <span class="block text-primary opacity-50 mb-1">2022/3/25</span>
            <div class="flex justify-between items-center mb-5">
              <h2 class="text-40px text-primary">開幕喜相逢</h2>
              <div class="flex">
                <span class="block text-14px text-white bg-primary px-3 py-1"
                  >飲食</span
                >
                <span
                  class="block text-14px text-white bg-primary px-3 py-1 ml-2"
                  >運動</span
                >
              </div>
            </div>
            <p class="text-primary leading-loose mb-10">
              「午分之食」要在台中與大家見面了~走過路過千萬別錯過品嘗美食的機會!
              三五好友小聚時，找不到合適的聚會場所嗎?
              吃膩了現有的餐廳口袋名單嗎? 外食族總是吃著安全有疑慮的餐點嗎?
              那你們千萬不能錯過「午分之食」!
              本店具備各項健康、美味、與眾不同的餐點
              所用食材皆經過精心挑選及安全把關
              搭配半開放式廚房，讓顧客吃得更加安心 本店將於4/1(五)
              早上7:00正式開幕 開幕當日，本店餐點皆8折供應 地點：台中某個角落
              餐廳旁另有免費的公共停車場，開車的顧客也不用擔心唷!
            </p>
            <router-link to="/articles" class="inline-block text-primary border-primary border-2 px-12 py-5">返回列表</router-link>
          </div>
        </div>
        <div class="col-span-2">
          <img src="@/assets/images/bg-test.png" alt="測試圖片" class="w-full h-full object-cover">
        </div>
      </div>
    </div>
  </section>
</template>
