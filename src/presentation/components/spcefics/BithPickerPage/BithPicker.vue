<script lang="ts" setup>
import { ref, onMounted } from 'vue';

const years = Array.from({ length: 60 }, (_, i) => 1340 + i);
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
];
const days = Array.from({ length: 31 }, (_, i) => i + 1);

const selectedYear = ref(1340);
const selectedMonth = ref('فرودین');
const selectedDay = ref(1);

const yearColumn = ref<HTMLElement | null>(null);
const monthColumn = ref<HTMLElement | null>(null);
const dayColumn = ref<HTMLElement | null>(null);

const itemHeight = 40;

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
  console.log(selectedMonth.value);
};

const handleScroll = (
  columnRef: any,
  items: any[],
  selectedValue: any,
  itemHeight: number,
  scrollTopNew: number
) => {
  const index = Math.round(scrollTopNew / itemHeight);
  selectedValue.value = items[index];
  smoothScrollTo(columnRef.value, index * itemHeight, 200);
};

const handleYearScroll = (e: any) => {
  handleScroll(yearColumn, years, selectedYear, itemHeight, e.target.scrollTop);
};

const handleMonthScroll = (e: any) => {
  handleScroll(monthColumn, months, selectedMonth, itemHeight, e.target.scrollTop);
};

const handleDayScroll = (e: any) => {
  handleScroll(dayColumn, days, selectedDay, itemHeight, e.target.scrollTop);
};

onMounted(() => {
  yearColumn.value!.scrollTop = years.indexOf(selectedYear.value) * itemHeight;
  monthColumn.value!.scrollTop = months.indexOf(selectedMonth.value) * itemHeight;
  dayColumn.value!.scrollTop = days.indexOf(selectedDay.value) * itemHeight;
});
</script>

<template>
  <div
    class="date-picker flex justify-center p-4 bg-secondaryGreen bg-opacity-20 rounded rounded-[30px]"
  >
    <div class="relative gap-8 flex">
      <div
        class="relative w-20 h-40 overflow-y-scroll text-center my-scroll"
        @scroll="(e) => handleYearScroll(e)"
      >
        <div ref="yearColumn" class="py-[60px]">
          <div v-for="year in years" :key="year" class="picker-item">{{ year }}</div>
        </div>
      </div>
      <div
        class="relative w-20 h-40 overflow-y-scroll text-center my-scroll"
        @scroll="(e) => handleMonthScroll(e)"
      >
        <div ref="monthColumn" class="py-[60px]">
          <div v-for="(month, index) in months" :key="index" class="picker-item">{{ month }}</div>
        </div>
      </div>
      <div
        class="relative w-20 h-40 overflow-y-scroll text-center my-scroll"
        @scroll="(e) => handleDayScroll(e)"
      >
        <div ref="dayColumn" class="py-[60px]">
          <div v-for="day in days" :key="day" class="picker-item z-10">{{ day }}</div>
        </div>
      </div>
      <div
        class="highlight absolute top-[50%] left-0 right-0 h-12 mt-[-20px] bg-primary bg-opacity-40 z-0 rounded rounded-2xl"
      ></div>
    </div>
  </div>
</template>

<style scoped>
.picker-item {
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  color: #fff;
}

.highlight {
  pointer-events: none;
}

.my-scroll::-webkit-scrollbar {
  display: none;
}

.my-scroll {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
