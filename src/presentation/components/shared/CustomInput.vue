<script setup lang="ts">
import { computed, defineProps, defineEmits, ref } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: 'Enter text...'
  },
  inputClass: {
    type: String,
    default: ''
  },
  wrapperClass: {
    type: String,
    default: ''
  },
  isInvalid: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue'])

const inputValue = ref(props.modelValue)

const handleInput = () => {
  emit('update:modelValue', inputValue.value)
}
</script>

<template>
  <div :class="['flex items-center', wrapperClass]">
    <input
      :type="type"
      :placeholder="placeholder"
      v-model="inputValue"
      :class="[
        'w-full p-2.5 bg-transparent outline-none',
        inputClass,
        isInvalid ? 'border-red-500' : 'border-gray-300'
      ]"
      @input="handleInput"
      :disabled="disabled"
    />
  </div>
</template>

<style scoped>
input {
  border-radius: 50px;
  border: 1px solid #9fb59f;
}
</style>
