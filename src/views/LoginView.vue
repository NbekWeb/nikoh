<script setup>
import Globus from "@/components/icons/Globus.vue";
import { useRouter } from "vue-router";
import { ref } from "vue";

const phoneNumber = ref("");

const router = useRouter();
const filterInput = (event) => {
  const input = event.target.value;
  const key = event.key;

  // If the key pressed is not a digit and not a control key (like Backspace)
  if (/[^0-9]/.test(key) && key !== "Backspace") {
    event.preventDefault(); // Prevent the default action of the key
    return;
  }

  // If the key is Backspace, allow it and update the phoneNumber state
  if (key === "Backspace") {
    // Remove the last character from the phone number
    phoneNumber.value = phoneNumber.value.slice(0, -1);
    return;
  }

  // If it's a valid digit, update phoneNumber
  if (/^\d$/.test(key)) {
    phoneNumber.value += key; // Append the digit to the phoneNumber
  }
};
const goMain = () => {
  router.push({ name: "dashboard" });
};
</script>
<template>
  <div
    class="flex flex-col items-center justify-between h-screen py-10 overflow-y-hidden"
  >
    <div class="flex flex-col items-center gap-10">
      <div class="flex items-center gap-1 text-sm font-semibold text-blue-800">
        <img src="@/assets/img/logo.png" class="w-5 h-5" />
        nikah.space
      </div>
      <div class="w-screen">
        <p class="mb-10 text-2xl font-semibold text-center text-blue-900">
          Войти
        </p>

        <a-form class="w-full px-3">
          <a-form-item class="w-full">
            <a-input
              type="tel"
              placeholder="Номер телефона"
              v-model="phoneNumber"
              @keydown="filterInput"
            />
          </a-form-item>
          <a-form-item class="w-full">
            <a-input placeholder="Пароль" type="password"></a-input>
          </a-form-item>
          <div class="px-7">
            <a-button
              @click="goMain"
              type="primary"
              class="w-full !rounded-2xl bg-blue-700 hover:!bg-blue-800 h-12 font-medium text-base mb-10"
              >Продолжить
            </a-button>
          </div>
        </a-form>
      </div>
    </div>
    <div class="flex flex-col items-center gap-10">
      <div class="flex flex-col items-center gap-0">
        <span class="text-sm font-light text-blue-900"> Нет аккаунта? </span>
        <router-link
          :to="{ name: 'regis' }"
          class="text-base font-bold text-center text-blue-700"
        >
          Зарегистрироваться</router-link
        >
      </div>
      <div
        class="flex items-center gap-2 text-base font-semibold text-blue-700"
      >
        <globus class="text-xl" />
        <span>РУС</span>
      </div>
    </div>
    <img
      src="@/assets/img/bg-t.png"
      class="absolute left-0 w-1/2 transform -translate-y-1/2 -z-10 top-1/2"
    />
    <img
      src="@/assets/img/bg-r.png"
      class="absolute right-0 -z-10 bottom-20 h-44"
    />
  </div>
</template>
