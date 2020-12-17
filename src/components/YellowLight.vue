<template>
  <div>
    <div id="traffic-light">
      <div class="light red"></div>
      <div class="light yellow active" :class="{ blink: isBlinked }">
        <span class="light-text">{{ counter }}</span>
      </div>
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
      counter: 3,
      nextRoute: localStorage.nextRoute ?? Routes.GREEN,
      isBlinked: false,
    };
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      if (from?.path === Routes.GREEN) {
        vm.nextRoute = Routes.RED;
      }
      else if (from?.path === Routes.RED) {
        vm.nextRoute = Routes.GREEN;
      }
      localStorage.nextRoute = vm.nextRoute;
    });
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
      this.$router.push({ path: this.nextRoute });
      clearInterval(interval);
    }, commonSecondsCount * 1000);
  },
};
</script>