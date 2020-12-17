<template>
  <div>
    <div id="traffic-light">
      <div class="light red active" :class="{ blink: isBlinked }">
        <span class="light-text">{{ counter }}</span>
      </div>
      <div class="light yellow"></div>
      <div class="light green"></div>
    </div>
    <div id="pole"></div>
  </div>
</template>

<script>
import { Routes, BLINK_SECONDS_COUNT } from '../const';

export default {
  data() {
    return {
      counter: 10,
      isBlinked: false,
    };
  },
  created() {
    const commonSecondsCount = this.counter;

    let interval = setInterval(() => {
      this.counter--;
      
      if (this.counter < BLINK_SECONDS_COUNT && !this.isBlinked) {
        this.isBlinked = true;
      }
    }, 1000);

    setTimeout(() => {
      this.$router.push({ path: Routes.YELLOW });
      clearInterval(interval);
    }, commonSecondsCount * 1000);
  },
};
</script>