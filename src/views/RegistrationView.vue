<script setup>
import Globus from "@/components/icons/Globus.vue";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const checked = ref(true);
const sms = ref(false);
const smsInputRefs = ref([]);
const phoneNumber = ref("");
const sendSms = () => {
  if (!sms.value) {
    sms.value = true;
  } else {
    router.push({ name: "form" });
  }
};

const clear = () => {
  smsCode.value = ["", "", "", ""];
};

const smsCode = ref(["", "", "", ""]);

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

const handleInput = (event, index) => {
  const key = event.key;

  // If the key pressed is not a digit and not a control key (like Backspace)
  if (/[^0-9]/.test(key) && key !== "Backspace") {
    event.preventDefault(); // Prevent the default action of the key
    return;
  }

  // If the key is Backspace
  if (key === "Backspace") {
    // Clear the current input
    smsCode.value[index] = "";

    // Focus on the previous input field if it exists
    if (index > 0) {
      smsInputRefs.value[index - 1].focus();
    }
    return;
  }

  // If it's a valid digit, update smsCode and focus the next input
  if (/^\d$/.test(key)) {
    smsCode.value[index] = key; // Set the digit to the current index

    
  }
};
</script>
<template>
  <div
    class="flex flex-col items-center justify-between py-10 overflow-y-hidden h-sc"
  >
    <div class="flex flex-col items-center gap-10">
      <div class="flex items-center gap-1 text-sm font-semibold text-blue-800">
        <img src="@/assets/img/logo.png" class="w-5 h-5" />
        nikah.space 
      </div>
      <div class="w-screen">
        <div class="w-full" v-if="!sms">
          <p class="mb-10 text-2xl font-semibold text-center text-blue-900">
            Регистрация
          </p>
          <a-form class="w-full px-3" layout="vertical">
            <a-form-item class="w-full">
              <a-input
                type="tel"
                placeholder="Номер телефона"
                v-model="phoneNumber"
                @keydown="filterInput"
              ></a-input>
            </a-form-item>
            <a-form-item class="w-full">
              <a-input placeholder="Пароль" type="password"></a-input>
            </a-form-item>
            <div class="px-7">
              <a-button
                @click="sendSms"
                type="primary"
                class="w-full !rounded-2xl bg-blue-700 hover:!bg-blue-800 h-12 font-medium text-base mb-10"
                >Зарегистрироваться
              </a-button>
            </div>
            <a-checkbox v-model:checked="checked">
              <div class="pr-6 text-sm font-light text-blue-900">
                Мне есть 18. Я согласен

                <span class="text-blue-700">
                  с Лицензионным соглашением NIKAH.SPACE, Политикой приватности
                </span>
                и
                <span class="text-blue-700">  Правилами оплаты </span>
              </div>
            </a-checkbox>
          </a-form>
          <div class="flex flex-col items-center gap-0 mt-10">
            <span class="text-sm font-light text-blue-900">
              У вас есть аккаунт?
            </span>
            <router-link
              :to="{ name: 'login' }"
              class="text-base font-bold text-center text-blue-700"
            >
              Войти</router-link
            >
          </div>
        </div>
        <div v-else class="w-full px-3 text-center text-blue-900">
          <p class="mb-2 text-2xl font-semibold">Подтверждение</p>
          <p class="mb-1 text-base">Код отправлен на номер</p>
          <span class="text-base">{{ phoneNumber }}</span>
          <div class="flex flex-col w-full px-10 mt-24">
            <div class="grid w-full grid-cols-4 gap-4">
              <div
                class="flex justify-center pb-1 border-b-2"
                :class="sms ? 'border-transparent' : 'border-blue-700'"
                v-for="(sms, i) of smsCode"
                :key="i"
              >
                <input
                  type="number"
                  :min="0"
                  :max="9"
                  class="w-2 text-blue-700 bg-transparent border-none outline-none"
                  v-model="smsCode[i]"
                  maxlength="1"
                  @keydown="(event) => handleInput(event, i)"
                  ref="smsInputRefs"
                />
              </div>
            </div>
            <p
              class="mt-5 text-base font-medium text-center text-blue-700"
              @click="clear"
            >
              Отправить повторно
            </p>
          </div>
          <div class="w-full px-10 mt-16">
            <a-button
              @click="sendSms"
              type="primary"
              class="w-full !rounded-2xl bg-blue-700 hover:!bg-blue-800 h-12 font-medium text-base mb-10"
              >Подтвердить
            </a-button>
          </div>
          <div class="flex flex-col gap-1 text-sm font-light text-blue-700">
            <span>Условия использования</span>
            <span>Политика конфидециальности</span>
          </div>
        </div>
      </div>
    </div>
    <div class="flex items-center gap-2 text-base font-semibold text-blue-700 ">
      <globus class="text-xl" />
      <span>РУС</span>
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
<style scoped></style>
