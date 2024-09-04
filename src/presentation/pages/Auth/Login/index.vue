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
        <img :src="Logo" class="w-32" />
        <p class="text-secondary font-[dana-demi] text-xl mt-8">خوش آمدید</p>
        <p class="text-white font-[dana-demi] text-2xl mt-16">ورود | ثبت نام</p>
        <CustomInput
          type="number"
          :model-value="phoneNumber"
          placeholder="شماره همراه خود را وارد کنید"
          class="mt-8"
        />
        <Button
          text="ارسال کد یکبار مصرف"
          color="primary"
          bg-color="secondary"
          rounded="40px"
          class="mt-2"
        />
      </div>
    </div>
  </div>
</template>
