<script setup lang="ts">
import BirthPicker from '@/presentation/components/spcefics/BithPickerPage/BithPicker.vue';
import PageHader from '@/presentation/components/shared/PageHader.vue';
import BirthBanner from '@/assets/images/Banners/Birth-Banner.png';
import SelectSex from '@/presentation/components/spcefics/BithPickerPage/SelectSex.vue';
import Button from '@/presentation/components/shared/button.vue';
</script>

<template>
  <PageHader :img="BirthBanner">
    <template #text-header>
      <p class="text-white text-xl font-[dana-bold] text-center">
        <span class="text-secondary font-[dana-bold]">جنسیت</span> و
        <span class="text-secondary font-[dana-bold]">تاریخ تولد</span> خودت رو انتخاب کن
      </p>
    </template>
  </PageHader>
  <div class="container">
    <SelectSex />
    <div class="w-full h-px bg-white my-4"></div>
    <BirthPicker />

    <Button text="ارسال" color="white" bg-color="secondary" rounded="40px" class="mt-10" />
  </div>
</template>
