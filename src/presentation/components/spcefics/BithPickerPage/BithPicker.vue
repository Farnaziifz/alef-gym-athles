<template>
  <div class="date-picker">
    <div class="picker-container">
      <!-- ستون سال -->
      <div class="picker-column" @scroll="(e) => handleYearScroll(e)">
        <div ref="yearColumn" class="scroll-container">
          <div v-for="year in years" :key="year" class="picker-item">{{ year }}</div>
        </div>
      </div>
      <!-- ستون ماه -->
      <div class="picker-column" @scroll="(e) => handleMonthScroll(e)">
        <div ref="monthColumn" class="scroll-container">
          <div v-for="(month, index) in months" :key="index" class="picker-item">{{ month }}</div>
        </div>
      </div>
      <!-- ستون روز -->
      <div class="picker-column" @scroll="(e) => handleDayScroll(e)">
        <div ref="dayColumn" class="scroll-container">
          <div v-for="day in days" :key="day" class="picker-item">{{ day }}</div>
        </div>
      </div>
      <!-- هایلایت مشترک -->
      <div class="highlight"></div>
    </div>
  </div>
  <button @click="checkDate">final</button>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';

const years = Array.from({ length: 40 }, (_, i) => 1340 + i); // لیست سال‌ها
const months = [
  'فروردین',
  'اردیبهشت',
  'خرداد',
  'تیر',
  'مرداد',
  'شهریور',
  'مهر',
  'آبان',
  'آذر',
  'دی',
  'بهمن',
  'اسفند'
]; // لیست ماه‌ها
const days = Array.from({ length: 31 }, (_, i) => i + 1); // لیست روزها

// متغیرهای انتخاب‌شده
const selectedYear = ref(1372);
const selectedMonth = ref('مهر');
const selectedDay = ref(16);

// مراجع برای ستون‌های سال، ماه، و روز
const yearColumn = ref<HTMLElement | null>(null);
const monthColumn = ref<HTMLElement | null>(null);
const dayColumn = ref<HTMLElement | null>(null);

const itemHeight = 40; // ارتفاع هر آیتم

// تابع اسکرول برای همگام‌سازی دقیق
const smoothScrollTo = (element: HTMLElement, targetPosition: number, duration: number) => {
  const startPosition = element.scrollTop;
  const distance = targetPosition - startPosition;
  let startTime: number | null = null;

  const step = (currentTime: number) => {
    if (!startTime) {
      startTime = currentTime;
    }
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    element.scrollTop = startPosition + distance * progress;

    if (timeElapsed < duration) {
      window.requestAnimationFrame(step);
    }
  };

  window.requestAnimationFrame(step);
};

// بروزرسانی مقدار بر اساس اسکرول
const handleScroll = (
  columnRef: any,
  items: any[],
  selectedValue: any,
  itemHeight: number,
  scrollTopNew: number
) => {
  const index = Math.round(scrollTopNew / itemHeight); // محاسبه آیتم وسط
  selectedValue.value = items[index]; // بروزرسانی مقدار انتخاب شده
  smoothScrollTo(columnRef.value, index * itemHeight, 200); // اسکرول آرام به آیتم جدید
};

// بروزرسانی مقدار سال
const handleYearScroll = (e: any) => {
  handleScroll(yearColumn, years, selectedYear, itemHeight, e.target.scrollTop);
};

// بروزرسانی مقدار ماه
const handleMonthScroll = (e: any) => {
  handleScroll(monthColumn, months, selectedMonth, itemHeight, e.target.scrollTop);
};

// بروزرسانی مقدار روز
const handleDayScroll = (e: any) => {
  handleScroll(dayColumn, days, selectedDay, itemHeight, e.target.scrollTop);
};

// تنظیم اسکرول به مقدار پیش‌فرض هنگام لود کامپوننت
onMounted(() => {
  yearColumn.value!.scrollTop = years.indexOf(selectedYear.value) * itemHeight;
  monthColumn.value!.scrollTop = months.indexOf(selectedMonth.value) * itemHeight;
  dayColumn.value!.scrollTop = days.indexOf(selectedDay.value) * itemHeight;
});

// تابع برای بررسی مقدار نهایی
const checkDate = () => {
  console.log('سال انتخاب‌شده:', selectedYear.value);
  console.log('ماه انتخاب‌شده:', selectedMonth.value);
  console.log('روز انتخاب‌شده:', selectedDay.value);
};
</script>

<style scoped>
.date-picker {
  display: flex;
  justify-content: center;
  padding: 20px;
}

.picker-container {
  position: relative;
  display: flex;
  gap: 10px;
}

.picker-column {
  position: relative;
  width: 80px;
  height: 160px;
  overflow-y: scroll;
  text-align: center;
}

.scroll-container {
  padding: 60px 0;
}

.picker-item {
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  color: #fff;
}

.highlight {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 40px;
  margin-top: -20px;
  background-color: rgba(100, 255, 100, 0.3);
  pointer-events: none;
  z-index: 10;
  border-radius: 10px;
}
</style>
