<script setup lang="ts">
import { ref } from 'vue';

import PageHader from '@/presentation/components/shared/PageHader.vue';
import LoginBanner from '@/assets/images/Banners/Login-Banner.png';
import Logo from '@/assets/images/Generals/Logo.svg';
import Button from '@/presentation/components/shared/button.vue';
import CustomInput from '@/presentation/components/shared/CustomInput.vue';

const phoneNumber = ref('');
</script>

<template>
  <div>
    <PageHader :img="LoginBanner" />
    <div class="container">
      <div class="flex flex-col items-center">
        <img :src="Logo" class="w-24" />
        <p class="text-white font-[dana-demi] text-2xl mt-32">اطلاعات شخصی</p>
        <CustomInput type="number" :model-value="phoneNumber" placeholder="نام" class="mt-8" />
        <CustomInput
          type="number"
          :model-value="phoneNumber"
          placeholder="نام خانوادگی"
          class="mt-8"
        />
        <Button text="ارسال" color="primary" bg-color="secondary" rounded="40px" class="mt-2" />
      </div>
    </div>
  </div>
</template>
