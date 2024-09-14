<template>
  <div class="flex flex-col items-center justify-center bg-green-900 text-white relative">
    <h1 class="text-2xl font-bold text-yellow-400 mb-6">وزن خودت رو انتخاب کن</h1>

    <div class="text-4xl font-bold">{{ weight.toFixed(1) }} KG</div>

    <img src="../../../../assets/images/shapes/weight.png" alt="" class="w-full mt-5 h-[300px]" />

    <div class="w-64 h-64 flex items-center justify-center absolute">
      <!-- Gauge Circle -->
      <div class="relative w-full h-full flex items-center justify-center">
        <button
          @mousedown="startDrag"
          @touchstart="startDrag"
          class="absolute bg-white rounded-full p-4 shadow-lg cursor-pointer"
          :style="{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }"
        >
          <span>▲</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// import Weight from '@/assets/images/shapes/weight.png';

import { defineComponent, ref, computed, onBeforeUnmount } from 'vue';

export default defineComponent({
  setup() {
    const weight = ref(70); // Initial weight
    const minWeight = 40;
    const maxWeight = 200;

    // Gauge calculation
    const gaugeOffset = computed(() => {
      const range = maxWeight - minWeight;
      const progress = (weight.value - minWeight) / range;
      return (1 - progress) * 283; // 283 is the circumference of the circle (2 * PI * radius)
    });

    const gaugeColor = '#00ff00'; // Gauge color (green)

    // Handle dragging
    const startDrag = (event: MouseEvent | TouchEvent) => {
      const initialY = event instanceof MouseEvent ? event.clientY : event.touches[0].clientY;
      const initialWeight = weight.value;

      const onMove = (moveEvent: MouseEvent | TouchEvent) => {
        const clientY =
          moveEvent instanceof MouseEvent ? moveEvent.clientY : moveEvent.touches[0].clientY;
        const deltaY = clientY - initialY;
        weight.value = Math.min(maxWeight, Math.max(minWeight, initialWeight - deltaY / 10));
      };

      const onEnd = () => {
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', onEnd);
        document.removeEventListener('touchmove', onMove);
        document.removeEventListener('touchend', onEnd);
      };

      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup', onEnd);
      document.addEventListener('touchmove', onMove);
      document.addEventListener('touchend', onEnd);
    };

    // Handle scroll
    const onScroll = (event: WheelEvent) => {
      const scrollDelta = event.deltaY > 0 ? -0.1 : 0.1;
      weight.value = Math.min(maxWeight, Math.max(minWeight, weight.value + scrollDelta));
    };

    // Add scroll event listener
    document.addEventListener('wheel', onScroll);

    // Cleanup event listener on component unmount
    onBeforeUnmount(() => {
      document.removeEventListener('wheel', onScroll);
    });

    return {
      weight,
      gaugeOffset,
      gaugeColor,
      startDrag
    };
  }
});
</script>

<style scoped>
button {
  transition: transform 0.2s;
}

button:hover {
  transform: scale(1.1);
}
</style>
