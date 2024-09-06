<script setup lang="ts">
import Man from '@/assets/images/Icones/Men.vue';
import Female from '@/assets/images/Icones/Female.vue';
</script>

<template>
  <div class="grid grid-cols-2 gap-4">
    <div class="w-full p-4 rounded rounded-[30px] bg-secondaryGreen h-14 flex items-center">
      <Man />
      <p class="text-primary text-xl mr-3">مرد</p>
    </div>
    <div class="w-full p-4 rounded rounded-[30px] bg-secondaryGreen h-14 flex items-center">
      <Female />
      <p class="text-primary text-xl mr-3">زن</p>
    </div>
  </div>
</template>
