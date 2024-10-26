<script setup>
import FirstForm from "@/components/FirstForm.vue";
import SecondForm from "@/components/SecondForm.vue";
import Scrollbar from "@/components/Scrollbar.vue";
import { ref } from "vue";
const start = ref(true);

const current = ref(2);

const changeCurrent = (i) => {
  current.value = i;
};

const next = (i) => {
  current.value += i;
};

const toggleStart = () => {
  start.value = true;
};
</script>
<template>
  <div class="h-screen overflow-hidden py-10">
    <div
      class="flex flex-col items-center justify-between h-full"
      v-if="!start"
    >
      <div class="flex items-center gap-1 text-sm font-semibold text-blue-800">
        <img src="@/assets/img/logo.png" class="w-5 h-5" />
        nikah.space
      </div>
      <p class="px-3 text-base text-center text-blue-900">
        Чтобы начать знакомиться, нужно заполнить небольшую анкету
      </p>
      <div class="relative w-full h-12 mb-20 px-7">
        <a-button
          @click="toggleStart"
          type="primary"
          class="w-full !rounded-2xl bg-blue-700 hover:!bg-blue-800 h-12 font-medium text-base mb-10"
          >Заполнить анкету
        </a-button>
        <img
          src="@/assets/img/bg-form.png"
          class="absolute w-full left-2 -top-36 -z-10"
        />
      </div>
    </div>
    <div
      v-else
      class="h-full overflow-hidden justify-between flex flex-col gap-0"
    >
      <div class="flex gap-0 items-center text-white px-5">
        <div
          @click="changeCurrent(1)"
          class="w-7 h-7 rounded-full bg-blue-700 flex justify-center items-center"
        >
          1
        </div>
        <div
          class="flex flex-grow h-1"
          :class="current > 1 ? ' bg-blue-700' : 'bg-pink-600'"
        ></div>
        <div
          @click="changeCurrent(2)"
          class="w-7 h-7 rounded-full flex justify-center items-center"
          :class="current > 1 ? 'bg-blue-700' : '  bg-pink-600'"
        >
          2
        </div>
        <div
          class="flex flex-grow h-1"
          :class="current > 2 ? ' bg-blue-700' : 'bg-pink-600'"
        ></div>
        <div
          @click="changeCurrent(3)"
          class="w-7 h-7 rounded-full flex justify-center items-center"
          :class="current > 2 ? 'bg-blue-700' : ' bg-pink-600'"
        >
          3
        </div>
      </div>
      <div class="pt-10 px-2.5">
        <scrollbar height="calc(100vh - 280px)">
          <template #content>
            <template v-if="current == 1">
              <FirstForm />
            </template>
            <template v-else-if="current == 2">
              <SecondForm />
            </template>
          </template>
        </scrollbar>
      </div>
      <div class="px-7 flex gap-6 flex-col">
        <a-button
          v-if="current > 1"
          @click="next(-1)"
          class="w-full rounded-2xl border-2 border-blue-700 text-blue-700 hover:!border-blue-800 hover:!text-blue-800 text-base font-medium h-12"
          >Назад
        </a-button>
        <a-button
          v-if="current < 3"
          @click="next(1)"
          type="primary"
          class="w-full !rounded-2xl bg-blue-700 hover:!bg-blue-800 h-12 font-medium text-base"
          >Продолжить
        </a-button>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
