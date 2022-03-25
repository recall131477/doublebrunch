<template>
  <div class="fixed top-0 left-0 z-999 w-full h-full p-5 pointer-events-none">
    <div class="absolute top-0 left-0 w-full h-5 bg-secondary"></div>
    <div class="absolute top-0 left-0 w-5 h-full bg-secondary"></div>
    <div class="absolute bottom-0 right-0 w-full h-5 bg-secondary"></div>
    <div class="absolute bottom-0 right-0 w-5 h-full bg-secondary"></div>
    <div class="w-full h-full border-primary border-2"></div>
  </div>
  <router-link
    to="/cart"
    class="fixed bottom-0 right-0 z-1000 flex justify-center items-center w-20 h-20 bg-secondary border-primary border-2"
  >
    <div class="relative">
      <img src="@/assets/images/icon-cart.svg" alt="購物車" />
      <span
        class="absolute top-[-6px] right-[-12px] flex justify-center items-center text-12px text-white bg-primary w-[18px] h-[18px] rounded-full"
        >2
      </span>
    </div>
  </router-link>
  <div class="p-5">
    <HeaderLayout></HeaderLayout>
    <FavoriteModal></FavoriteModal>
    <NavBar></NavBar>
    <main class="mt-[100px]">
      <router-view></router-view>
    </main>
    <FooterLayout></FooterLayout>
  </div>
</template>

<script>
import HeaderLayout from '@/components/frontend/layout/HeaderLayout.vue';
import FooterLayout from '@/components/frontend/layout/FooterLayout.vue';
import NavBar from '@/components/frontend/NavBar.vue';
import FavoriteModal from '@/components/frontend/modal/FavoriteModal.vue';

export default {
  components: {
    HeaderLayout,
    FooterLayout,
    NavBar,
    FavoriteModal,
  },
};
</script>
