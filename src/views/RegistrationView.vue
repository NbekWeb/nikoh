<script setup>
import Globus from "@/components/icons/Globus.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const checked = ref(false);
const sms = ref(false);

const phone = ref("");
const sendSms = () => {
  if(!sms.value){
    
    sms.value = true;
  }
  else{
    router.push({name:'form'})
  }
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
  <div class="flex flex-col items-center justify-between h-screen py-10 overflow-y-hidden">
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
          <a-form class="w-full px-3">
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
          <span class="text-base">{{ phone }}</span>
          <div class="flex flex-col w-full px-10 mt-24">
            <div class="grid w-full grid-cols-4 gap-4">
              <div
                class="flex justify-center pb-1 border-b-2"
                :class="sms ? 'border-transparent' : 'border-blue-700'"
                v-for="(sms, i) of smsCode"
                :key="i"
              >
                <input
                  type="text"
                  class="w-2 text-blue-700 bg-transparent border-none outline-none"
                  v-model="smsCode[i]"
                  maxlength="1"
                  @input="handleInput(i)"
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
    <div class="flex items-center gap-2 text-base font-semibold text-blue-700">
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
