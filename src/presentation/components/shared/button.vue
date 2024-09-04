<script setup lang="ts">
import { computed } from 'vue';

interface buttonProps {
  text?: string;
  outline?: boolean;
  color?: string;
  bgColor?: string;
  rounded?: string;
  borderColor?: string;
}
const props = defineProps<buttonProps>();
const buttonClassess = computed(() => {
  const clasess = [];
  if (props.outline) {
    clasess.push('border', `border-${props.borderColor}`);
  }
  if (props.color) {
    clasess.push(`text-${props.color}`);
  }
  if (props.bgColor) {
    clasess.push(`bg-${props.bgColor}`);
  }
  if (props.rounded) {
    clasess.push(`rounded rounded-[${props.rounded}]`);
  }
  const test = clasess.join(' ');
  return test;
});
</script>

<template>
  <button :class="buttonClassess" class="w-full py-4">{{ props.text }}</button>
</template>
