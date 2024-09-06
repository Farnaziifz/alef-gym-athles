<template>
  <div class="swiper-container overflow-hidden relative">
    <div
      class="swiper-wrapper flex transition-transform duration-300 ease-in-out"
      :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
    >
      <div v-for="(item, index) in items" :key="index" class="swiper-slide flex flex-col w-full">
        <div>
          <slot :item="item">{{ item }}</slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

interface Props {
  items: Array<string>;
}

const props = defineProps<Props>();

const currentSlide = ref(0);

const nextSlide = () => {
  if (currentSlide.value < props.items.length - 1) {
    currentSlide.value++;
  }
};

const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--;
  }
};
</script>

<style scoped>
.swiper-slide {
  width: 100%;
}

.swiper-wrapper {
  display: flex;
}
</style>
