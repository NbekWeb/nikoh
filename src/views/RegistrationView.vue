<script setup>
import Globus from "@/components/icons/Globus.vue";
import { ref } from "vue";
const checked = ref(false);
const sms = ref(false);

const phone = ref("");
const sendSms = () => {
  sms.value = true;
};

const clear = () => {
  smsCode.value = ["", "", "", ""];
};

const smsCode = ref(["", "", "", ""]);

const handleInput = (index) => {
  // Check if the current input is filled
  if (smsCode.value[index].length === 1 && index < smsCode.value.length - 1) {
    // Focus on the next input
    const nextInput =
      document.querySelectorAll('input[type="text"]')[index + 1];
    if (nextInput) {
      nextInput.focus();
    }
  }
};
</script>
<template>
  <div class="py-10 flex flex-col justify-between items-center h-screen">
    <div class="flex flex-col gap-10 items-center">
      <div class="text-blue-800 text-sm flex items-center gap-1 font-semibold">
        <img src="@/assets/img/logo.png" class="w-5 h-5" />
        nikah.space
      </div>
      <div class="w-screen">
        <div class="w-full" v-if="!sms">
          <p class="text-blue-900 text-2xl font-semibold mb-10 text-center">
            Регистрация
          </p>
          <a-form class="px-3 w-full">
            <a-form-item class="w-full">
              <a-input
                placeholder="Номер телефона"
                v-model:value="phone"
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
              <div class="font-light text-sm text-blue-900 pr-6">
                Мне есть 18. Я согласен

                <span class="text-blue-700">
                  с Лицензионным соглашением NIKAH.SPACE, Политикой приватности
                </span>
                и
                <span class="text-blue-700">  Правилами оплаты </span>
              </div>
            </a-checkbox>
          </a-form>
          <div class="flex flex-col items-center mt-10 gap-2">
            <span class="text-blue-900 font-light text-sm">
              У вас есть аккаунт?
            </span>
            <router-link
              :to="{ name: 'login' }"
              class="text-base text-blue-700 font-bold text-center"
            >
              Войти</router-link
            >
          </div>
        </div>
        <div v-else class="w-full text-center text-blue-900 px-3">
          <p class="text-2xl font-semibold mb-2">Подтверждение</p>
          <p class="mb-1 text-base">Код отправлен на номер</p>
          <span class="text-base">{{ phone }}</span>
          <div class="mt-24 w-full flex flex-col px-10">
            <div class="w-full grid grid-cols-4 gap-4">
              <div
                class="border-b-2 flex justify-center pb-1"
                :class="sms ? 'border-transparent' : 'border-blue-700'"
                v-for="(sms, i) of smsCode"
                :key="i"
              >
                <input
                  type="text"
                  class="outline-none border-none bg-transparent w-2 text-blue-700"
                  v-model="smsCode[i]"
                  maxlength="1"
                  @input="handleInput(i)"
                />
              </div>
            </div>
            <p
              class="text-center text-blue-700 font-medium text-base mt-5"
              @click="clear"
            >
              Отправить повторно
            </p>
          </div>
          <div class="w-full mt-16 px-10">
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
    <div class="text-base text-blue-700 font-semibold flex gap-2 items-center">
      <globus class="text-xl" />
      <span>РУС</span>
    </div>
    <img
      src="@/assets/img/bg-t.png"
      class="w-1/2 absolute left-0 -z-10 top-1/2 transform -translate-y-1/2"
    />
    <img
      src="@/assets/img/bg-r.png"
      class="absolute right-0 -z-10 bottom-20 h-44"
    />
  </div>
</template>
<style scoped></style>
