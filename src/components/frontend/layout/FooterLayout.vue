<template>
  <footer class="border-primary border-t-2">
    <div class="text-center border-primary border-b-2 py-5 md:py-[30px]">
      <div class="inline-block bg-primary px-5 py-2.5 mb-5">
        <img src="@/assets/images/logo.svg" alt="logo" />
      </div>
      <h4 class="text-20px text-primary mb-2">聯絡資訊</h4>
      <ul class="mb-5">
        <li>
          <p class="text-primary">
            電話：<a href="tel:0912000000">0912000000</a>
          </p>
        </li>
        <li>
          <p class="text-primary">地址：台中市的某個角落</p>
        </li>
        <li>
          <p class="text-primary">
            E-mail：
            <a href="mailto:doublebrunch@gmail.com">doublebrunch@gmail.com</a>
          </p>
        </li>
        <li>
          <p class="text-primary">營業時間 ( 週三公休 )：7:00 am - 17:00 pm</p>
        </li>
      </ul>
      <div class="flex justify-center">
        <router-link to="/" target="_blank" class="duration-300 hover:scale-110">
          <img src="@/assets/images/icon-fb.svg" alt="fb" />
        </router-link>
        <router-link to="/" target="_blank" class="duration-300 mx-4 hover:scale-110">
          <img src="@/assets/images/icon-line.svg" alt="line" />
        </router-link>
        <router-link to="/" target="_blank" class="duration-300 hover:scale-110">
          <img src="@/assets/images/icon-ig.svg" alt="ig" />
        </router-link>
      </div>
    </div>
    <div class="text-primary text-center p-5">
      <p class="mb-2 md:hidden">
        本網站僅供個人作品使用，<br />不提供任何商業用途<br />
        <router-link to="/admin/products" class="duration-300 border-transparent border-b-2 hover:border-primary">登入後台</router-link>
      </p>
      <p class="hidden mb-2 md:block">
        本網站僅供個人作品使用，不提供任何商業用途 |
        <router-link to="/admin/products" class="duration-300 border-transparent border-b-2 hover:border-primary">登入後台</router-link>
      </p>
      <p class="text-14px">午分之食 © 2022 COPYRIGHT | made by 肉鬆</p>
    </div>
  </footer>
</template>
