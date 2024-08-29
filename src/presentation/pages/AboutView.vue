<script setup lang="ts">


import SharedButton from '@/presentation/components/shared/button.vue'



</script>
  


<template>
  <div class="about">
    <h1 class="text-secondary">This is an about page</h1>
   
    <SharedButton bgColor="secondary" text="text" color="primary" rounded="40px"/>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

