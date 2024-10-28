<script setup>
import { useRouter } from "vue-router";
import Globus from "@/components/icons/Globus.vue";

const router = useRouter();

const goRegis = () => {
  router.push({ name: "regis" });
};
const goLog = () => {
  router.push({ name: "login" });
};
</script>
<template>
  <div class="flex items-center justify-center w-full overflow-y-hidden h-sc">
    <div class="flex flex-col items-center px-10 font-medium text-blue-900">
      <span class="text-2xl font-semibold"> Добро пожаловать </span>
      <span class="flex items-center gap-1 mt-5 mb-10 text-2xl text-blue-800">
        <img src="@/assets/img/logo.png" class="w-10" /> nikah.space
      </span>
      <div>
        <a-button
          @click="goRegis"
          type="primary"
          class="w-full rounded-2xl bg-blue-700 hover:!bg-blue-800 h-12 font-medium text-base mb-3"
          >Зарегистрироваться
        </a-button>
        <a-button
         @click="goLog"
          class="w-full rounded-2xl border-2 border-blue-700 text-blue-700 hover:!border-blue-800 hover:!text-blue-800 text-base font-medium h-12"
          >Войти
        </a-button>
      </div>
      <div
        class="absolute flex items-center gap-2 text-base font-semibold text-blue-700 bottom-10"
      >
        <globus class="text-xl" />
        <span>РУС</span>
      </div>
    </div>
  </div>
</template>
