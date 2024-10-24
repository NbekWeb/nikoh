<script setup>
import { useRouter } from "vue-router";
import Globus from "@/components/icons/Globus.vue";

const router = useRouter();

const goRegis = () => {
  router.push({ name: "regis" });
};
</script>
<template>
  <div class="flex w-full h-screen items-center justify-center">
    <div class="text-blue-900 font-medium px-10 flex flex-col items-center">
      <span class="text-2xl font-semibold"> Добро пожаловать </span>
      <span class="text-2xl flex gap-1 items-center mt-5 mb-10 text-blue-800">
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
          class="w-full rounded-2xl border-2 border-blue-700 text-blue-700 hover:!border-blue-800 hover:!text-blue-800 text-base font-medium h-12"
          >Войти
        </a-button>
      </div>
      <div
        class="text-base text-blue-700 font-semibold flex gap-2 items-center absolute bottom-10"
      >
        <globus class="text-xl" />
        <span>РУС</span>
      </div>
    </div>
  </div>
</template>
