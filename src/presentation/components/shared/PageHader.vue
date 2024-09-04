<script setup lang="ts">
interface PageHeaderProps {
  img: string;
}

const props = defineProps<PageHeaderProps>();
</script>

<template>
  <div class="h-[400px] relative">
    <img :src="props.img" alt="" class="w-full h-full object-cover" />
    <div class="gradient w-full h-full absolute bottom-0"></div>
  </div>
</template>

<style lang="scss" scoped>
.gradient {
  background: linear-gradient(176deg, rgba(255, 255, 255, 0) 0%, rgba(12, 59, 46, 1) 74%);
}
</style>
