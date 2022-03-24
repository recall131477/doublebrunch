<template>
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
