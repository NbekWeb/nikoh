<script setup>
import FirstForm from "@/components/FirstForm.vue";
import SecondForm from "@/components/SecondForm.vue";
import ThirdForm from "@/components/ThirdForm.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const start = ref(0);

const current = ref(1);

const goMain = () => {
  router.push({ name: "dashboard" });
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
const changeCurrent = (i) => {
  current.value = i;
  scrollToTop();
};

const next = (i) => {
  if (current.value > 2) {
    start.value = 2;
  } else {
    current.value += i;
  }
  scrollToTop();
};

const toggleStart = (i) => {
  start.value = i;
  scrollToTop();
};
</script>
<template>
  <div class="overflow-x-hidden">
    <div
      class="relative flex flex-col items-center justify-between py-10 overflow-x-hidden overflow-y-hidden max-h-sc h-sc"
      v-if="start == 0"
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
          @click="toggleStart(1)"
          type="primary"
          class="w-full !rounded-2xl bg-blue-700 hover:!bg-blue-800 h-12 font-medium text-base mb-10"
          >Заполнить анкету
        </a-button>
        <img
          src="@/assets/img/bg-form.png"
          class="absolute w-full left-2 -bottom-16 -z-10"
        />
      </div>
    </div>
    <div
      v-else-if="start == 1"
      class="flex flex-col h-full min-h-screen gap-0 py-10 overflow-y-auto"
    >
      <div class="flex items-center gap-0 px-5 text-white">
        <div
          @click="changeCurrent(1)"
          class="flex items-center justify-center bg-blue-700 rounded-full w-7 h-7"
        >
          1
        </div>
        <div
          class="flex flex-grow h-1"
          :class="current > 1 ? ' bg-blue-700' : 'bg-pink-600'"
        ></div>
        <div
          @click="changeCurrent(2)"
          class="flex items-center justify-center rounded-full w-7 h-7"
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
          class="flex items-center justify-center rounded-full w-7 h-7"
          :class="current > 2 ? 'bg-blue-700' : ' bg-pink-600'"
        >
          3
        </div>
      </div>
      <div class="pt-10 px-2.5 flex-grow">
        <template v-if="current == 1">
          <FirstForm />
        </template>
        <template v-else-if="current == 2">
          <SecondForm />
        </template>
        <template v-else>
          <ThirdForm />
        </template>
      </div>
      <div class="flex flex-col gap-3 px-7">
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
        <a-button
          v-else
          @click="next(1)"
          type="primary"
          class="w-full !rounded-2xl bg-blue-700 hover:!bg-blue-800 h-12 font-medium text-base"
          >Завершить
        </a-button>
      </div>
    </div>
    <div
      v-else
      class="flex flex-col items-center justify-between py-10 h-sc"
    >
      <div>
        <div
          class="flex items-center justify-center gap-1 text-sm font-semibold text-blue-800"
        >
          <img src="@/assets/img/logo.png" class="w-5 h-5" />
          nikah.space
        </div>
        <h2 class="pt-10 mb-1 text-xl font-semibold text-center text-blue-900">
          Поздравляем
        </h2>
        <span class="text-base text-center text-blue-900"
          >Регистрация прошла успешно</span
        >
      </div>
      <div class="w-full px-7">
        <a-button
          @click="goMain"
          type="primary"
          class="w-full mb-24 !rounded-2xl bg-blue-700 hover:!bg-blue-800 h-12 font-medium text-base"
          >Смотреть анкеты
        </a-button>
      </div>
      <img
        src="@/assets/img/bg-suc.png"
        class="absolute bottom-0 left-0 w-full -z-10"
      />
    </div>
  </div>
</template>
<style scoped></style>
