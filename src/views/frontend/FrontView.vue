<template>
<<<<<<< HEAD
  <div class="fixed top-0 left-0 z-999 w-full h-full p-5 pointer-events-none">
    <div class="absolute top-0 right-0 w-full h-5 bg-secondary"></div>
    <div class="absolute top-0 right-0 w-5 h-full bg-secondary"></div>
    <div class="absolute bottom-0 left-0 w-full h-5 bg-secondary"></div>
    <div class="absolute bottom-0 left-0 w-5 h-full bg-secondary"></div>
    <div class="w-full h-full border-2 border-primary"></div>
  </div>
  <div class="p-5 overflow-hidden">
    <HeaderLayout></HeaderLayout>
    <NavBar></NavBar>
    <main class="mt-[100px]">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import HeaderLayout from '@/components/frontend/HeaderLayout.vue';
import NavBar from '@/components/frontend/NavBar.vue';

export default {
  components: {
    HeaderLayout,
    NavBar,
  },
};
</script>
=======
  <router-view></router-view>
</template>
>>>>>>> 45f295924f1a78f7dcaf0d113b47012ce78a5428
