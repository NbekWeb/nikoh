<template>
  <RouterView />
</template>
<script setup>
import { onMounted, onUnmounted } from "vue";
import { RouterView } from "vue-router";

const setVh = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
};

onMounted(() => {
  setVh();
  window.addEventListener("resize", setVh);
});

onUnmounted(() => {
  window.removeEventListener("resize", setVh);
});
</script>

<style>
#app {
  height: calc(var(--vh, 1vh) * 100);
}
</style>
