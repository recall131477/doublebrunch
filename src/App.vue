<template>
<<<<<<< HEAD
  <router-view></router-view>
</template>
=======
  <div class="p-5">
    <div class="border-primary border-2">
      <HeaderLayout></HeaderLayout>
      <main class="mt-[100px]">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
import HeaderLayout from '@/components/frontend/HeaderLayout.vue';

export default {
  components: {
    HeaderLayout,
  },
};
</script>
>>>>>>> 45f295924f1a78f7dcaf0d113b47012ce78a5428
