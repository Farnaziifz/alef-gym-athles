<script setup lang="ts">
import BirthPicker from '@/presentation/components/spcefics/BithPickerPage/BithPicker.vue';
import PageHader from '@/presentation/components/shared/PageHader.vue';
import LoginBanner from '@/assets/images/Banners/Login-Banner.png';
</script>

<template>
  <PageHader :img="LoginBanner" />
  <BirthPicker />
</template>
