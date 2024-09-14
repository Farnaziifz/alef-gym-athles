<script setup lang="ts">
import PageHader from '@/presentation/components/shared/PageHader.vue';
import LoginBanner from '@/assets/images/Banners/Login-Banner.png';
import Weight from '@/presentation/components/spcefics/WeightScale/Weight.vue';
</script>

<template>
  <PageHader :img="LoginBanner">
    <template #text-header>
      <p class="text-white text-xl font-[dana-bold] text-center">
        <span class="text-secondary font-[dana-bold]">وزن</span> <span> </span>
        <span>خودت رو وارد کن</span>
      </p>
    </template>
  </PageHader>
  <Weight />
</template>
