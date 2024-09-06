<script setup lang="ts">
import { computed } from 'vue';

interface buttonProps {
  text?: string;
  outline?: boolean;
  color?: string;
  bgColor: string;
  rounded: string;
  borderColor?: string;
}
const props = defineProps<buttonProps>();
const buttonClassess = computed(() => {
  const clasess = [];
  clasess.push(`bg-${props.bgColor}`);
  clasess.push(`text-${props.color}`);
  if (props.outline) {
    clasess.push('border', `border-${props.borderColor}`);
  }
  clasess.push(`rounded rounded-[${props.rounded}]`);

  const joinClass = clasess.join(' ');
  return joinClass;
});
</script>

<template>
  <button :class="buttonClassess" class="w-full py-4 bg-secondary rounded rounded-[30px]">
    {{ props.text }}
  </button>
</template>
