<template>
  <section>
    <div
      class="relative h-[calc(100vh-90px)] border-primary border-b-2 md:h-[calc(100vh-120px)] lg:h-[calc(100vh-140px)]"
    >
      <div class="flex h-[calc(100%-60px)] md:h-[calc(100%-80px)]">
        <div class="hidden w-[240px] md:block">
          <div class="relative h-full">
            <h4 class="absolute bottom-5 left-5 text-20px text-primary">
              Since 2022
            </h4>
          </div>
        </div>
        <div class="relative w-full md:w-[calc(100%-240px)]">
          <div class="border-primary border-l-2 h-full">
            <h2
              class="absolute bottom-[15px] left-[15px] text-48px text-white md:bottom-10 md:left-10 md:text-64px lg:bottom-[60px] lg:left-[60px] lg:text-80px"
            >
              關於午分之食
            </h2>
            <img
              src="@/assets/images/bg-about.png"
              alt="關於我們"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div class="border-primary border-t-2 h-[60px] px-[15px] md:px-5 md:h-20">
        <div class="flex justify-between items-center h-full">
          <p class="flex items-center text-primary md:h-full">
            加倍用心、加倍美味。
          </p>
          <h4 class="text-primary md:hidden">Since 2022</h4>
        </div>
      </div>
    </div>
  </section>
  <section>
    <ul class="space-y-[60px] md:space-y-20">
      <li class="border-primary border-b-2">
        <div class="flex flex-wrap p-[15px] md:min-h-[200px] md:p-0">
          <div class="w-full md:w-2/5">
            <div class="h-full md:border-primary md:border-r-2">
              <h2
                class="flex justify-center items-center h-full text-48px text-primary md:text-64px lg:text-80px"
              >
                理念
              </h2>
            </div>
          </div>
          <div class="w-full md:w-3/5">
            <div class="flex items-center h-full md:px-5">
              <p class="text-primary leading-loose">
                「午分之食」構思來自「五分之十」。<br />
                五分之十以數學角度計算結果為2，猶如「Double」加倍的意思並藉此當作出發點。<br />
                對於食材的選用、食材的運用、對待客人都秉持加倍的心態對待，讓午分之食為你美好一天的開始注入元氣。
              </p>
            </div>
          </div>
        </div>
      </li>
      <li class="border-primary border-y-2">
        <div class="flex flex-wrap flex-col-reverse p-[15px] md:flex-row md:min-h-[200px] md:p-0">
          <div class="w-full md:w-3/5">
            <div class="flex items-center h-full md:justify-end md:px-5">
              <p class="text-primary leading-loose md:text-right">
                不論是早上忙碌趕著上班、放假想睡到自然醒、下午想來點悠閒時光，<br />
                我們提供多種不同餐點因應不同時段用餐的人，給你多樣味覺上的享受。
              </p>
            </div>
          </div>
          <div class="w-full md:w-2/5">
            <div class="h-full md:border-primary md:border-l-2">
              <h2
                class="flex justify-center items-center h-full text-48px text-primary md:text-64px lg:text-80px"
              >
                特色
              </h2>
            </div>
          </div>
        </div>
      </li>
      <li class="border-primary border-t-2">
        <div class="flex flex-wrap p-[15px] md:min-h-[200px] md:p-0">
          <div class="w-full md:w-2/5">
            <div class="h-full md:border-primary md:border-r-2">
              <h2
                class="flex justify-center items-center h-full text-48px text-primary md:text-64px lg:text-80px"
              >
                精神
              </h2>
            </div>
          </div>
          <div class="w-full md:w-3/5">
            <div class="flex items-center h-full md:px-5">
              <p class="text-primary leading-loose">
                加倍用心、吃得安心。<br />
                加倍美味、征服你胃。
              </p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>
