<script setup>
import Iconex from "@/components/icons/Iconex.vue";
import Globus from "@/components/icons/Globus.vue";
import Chevron from "@/components/icons/Chevron.vue";
import Length from "@/components/icons/Length.vue";
import Massa from "@/components/icons/Massa.vue";
import Loc from "@/components/icons/Loc.vue";
import Close from "@/components/icons/Close.vue";
import Check from "@/components/icons/Check.vue";
import Like from "@/components/icons/Like.vue";
import Filtr from "@/components/icons/Filtr.vue";
import Pallete from "@/components/icons/Pallete.vue";
import Ring from "@/components/icons/Ring.vue";
import Shop from "@/components/icons/Shop.vue";
import Profile from "@/components/icons/Profile.vue";
import Settings from "@/components/icons/Settings.vue";
import Logout from "@/components/icons/Logout.vue";
import { ref } from "vue";
const value2 = ref([20, 30]);

const selected = ref(1);
const back = ref(1);
const num = ref(1);
const seeAll = ref(true);
const setting = ref(false);
const checked1 = ref(true);
const checked2 = ref(false);
const filtr = ref(false);
const ring = ref(false);

const toggleSetting = () => {
  setting.value = !setting.value;
};

const goBack = () => {
  if (back.value == 1) {
    toggleSetting();
  } else {
    back.value = 1;
  }
};

const changeBack = (i) => {
  back.value = i;
};
const changeFiltr = () => {
  filtr.value = !filtr.value;
};
const changeSee = () => {
  seeAll.value = !seeAll.value;
};
const changeSelect = (i) => {
  if (i == 2) {
    ring.value = true;
  }
  selected.value = i;
};

const filterInput = (event) => {
  const input = event.target.value;
  const key = event.key;

  // If the key pressed is not a digit and not a control key (like Backspace)
  if (/[^0-9]/.test(key) && key !== "Backspace") {
    event.preventDefault();
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
</script>

<template>
  <div class="min-h-screen">
    <div class="min-h-screen overflow-y-auto" v-if="!filtr">
      <div class="flex flex-col justify-between h-full">
        <div class="mb-[52px]">
          <template v-if="selected == 1">
            <div class="flex justify-between w-full px-2.5 pt-10 pb-5 text-xl">
              <filtr @click="changeFiltr" />
              <div
                class="flex items-center justify-center flex-grow gap-1 text-sm font-semibold text-blue-800"
              >
                <img src="@/assets/img/logo.png" class="w-5 h-5" />
                nikah.space
              </div>
            </div>
            <div class="">
              <div class="px-2.5">
                <div class="relative">
                  <img src="@/assets/img/user.png" class="w-full" />
                  <div class="absolute left-0 w-full px-2 text-white bottom-5">
                    <h2 class="mb-2 text-base font-semibold">Имя, 29</h2>
                    <div
                      class="flex items-center justify-between w-full text-xl"
                    >
                      <div class="flex items-center gap-1">
                        <loc />
                        <span class="text-sm font-extralight"
                          >Казахстан, Астана</span
                        >
                      </div>
                      <iconex />
                    </div>
                  </div>
                </div>

                <p class="pr-20 my-4 text-base font-medium text-blue-900">
                  Ищу любовь. Умею готовить, люблю детей
                </p>
              </div>

              <template v-if="seeAll">
                <div
                  class="flex flex-wrap items-center gap-2 px-2.5 pb-4 font-inter"
                >
                  <div
                    class="py-2.5 px-4 text-sm bg-pink-200 text-blue-900 rounded-3xl"
                  >
                    Читаю Намаз
                  </div>
                  <div
                    class="py-2.5 px-4 text-sm bg-pink-200 text-blue-900 rounded-3xl"
                  >
                    Живу с детьми
                  </div>
                  <div
                    class="py-2.5 px-4 text-sm bg-pink-200 text-blue-900 rounded-3xl"
                  >
                    Читаю Коран
                  </div>
                  <div
                    @click="changeSee"
                    class="py-2.5 px-4 text-sm border-pink-200 text-blue-900 rounded-3xl border"
                  >
                    Смотреть ещё
                  </div>
                </div>
              </template>
              <template v-else>
                <div class="px-2.5">
                  <div class="flex flex-col gap-3">
                    <span class="text-base font-semibold text-blue-900"
                      >О себе</span
                    >
                    <div class="flex gap-5 mb-2 text-blue-700">
                      <div class="flex items-center gap-1 text-2xl">
                        <length />
                        <span class="text-sm text-blue-900"> 160 см </span>
                      </div>
                      <div class="flex items-center gap-1 text-xl">
                        <massa />
                        <span class="text-sm text-blue-900">60 кг </span>
                      </div>
                    </div>
                    <div
                      class="flex flex-wrap items-center gap-2 px-2.5 pb-4 font-inter"
                    >
                      <div
                        class="py-2.5 px-4 text-sm bg-pink-200 text-blue-900 rounded-3xl"
                      >
                        Разведена
                      </div>
                      <div
                        class="py-2.5 px-4 text-sm bg-pink-200 text-blue-900 rounded-3xl"
                      >
                        Готова к переезду
                      </div>
                      <div
                        class="py-2.5 px-4 text-sm bg-pink-200 text-blue-900 rounded-3xl"
                      >
                        Живу с детьми
                      </div>
                    </div>
                  </div>
                  <div class="pt-4">
                    <span class="text-base font-semibold text-blue-900"
                      >Религиозность</span
                    >
                    <div
                      class="flex flex-wrap items-center gap-2 px-2.5 pb-4 font-inter mt-3"
                    >
                      <div
                        class="py-2.5 px-4 text-sm bg-pink-200 text-blue-900 rounded-3xl"
                      >
                        Разведена
                      </div>
                      <div
                        class="py-2.5 px-4 text-sm bg-pink-200 text-blue-900 rounded-3xl"
                      >
                        Читаю перевод Коран
                      </div>
                      <div
                        class="py-2.5 px-4 text-sm bg-pink-200 text-blue-900 rounded-3xl"
                      >
                        Совершаю все обязательные намазы
                      </div>
                    </div>
                  </div>
                  <div class="pt-4">
                    <span class="text-base font-semibold text-blue-900"
                      >Материальное положенеи</span
                    >
                    <div
                      class="flex flex-wrap items-center gap-2 px-2.5 pb-4 font-inter mt-3"
                    >
                      <div
                        class="py-2.5 px-4 text-sm bg-pink-200 text-blue-900 rounded-3xl"
                      >
                        Работаю
                      </div>
                    </div>
                  </div>
                  <div class="pb-5 text-center">
                    <span class="text-xl text-red" @click="changeSee">
                      Пожаловаться
                    </span>
                  </div>
                </div>
              </template>
              <div
                class="flex items-center justify-between px-12 py-4 text-white border-t border-pink-200"
              >
                <div
                  class="flex items-center justify-center w-16 h-16 rounded-full bg-red"
                >
                  <close />
                </div>
                <div
                  class="flex items-center justify-center w-10 h-10 text-blue-700 rounded-full custom-shadow"
                >
                  <like />
                </div>
                <div
                  class="flex items-center justify-center w-16 h-16 bg-blue-700 rounded-full"
                >
                  <check />
                </div>
              </div>
            </div>
          </template>
          <template v-else-if="selected == 2">
            <div>
              <div
                class="flex items-center justify-center flex-grow gap-1 pt-10 pb-6 text-sm font-semibold text-blue-800"
              >
                <img src="@/assets/img/logo.png" class="w-5 h-5" />
                nikah.space
              </div>
              <div class="flex flex-col gap-0 px-2.5 font-inter pb-4">
                <div class="flex items-center gap-2 h-14">
                  <div class="w-10 h-10 rounded-full bg-gray"></div>
                  <div class="flex flex-col gap-0 text-sm text-blue-900">
                    <span class="text-base font-semibold">Имя, 25</span>
                    <span class="">Посмотрела вашу анкету</span>
                  </div>
                </div>
                <div
                  class="flex items-center justify-between h-14"
                  v-for="i of 3"
                  :key="i"
                >
                  <div class="flex items-center gap-2">
                    <div class="w-10 h-10 rounded-full bg-gray"></div>
                    <div class="flex flex-col gap-0 text-sm text-blue-900">
                      <span class="text-base font-semibold">Имя, 25</span>
                      <span class="">Лайкнула вашу анкету</span>
                    </div>
                  </div>
                  <like class="text-xl text-blue-700" />
                </div>
                <div
                  class="flex items-center gap-2 h-14"
                  v-for="j of 12"
                  :key="j"
                >
                  <div class="w-10 h-10 rounded-full bg-gray"></div>
                  <div class="flex flex-col gap-0 text-sm text-blue-900">
                    <span class="text-base font-semibold">Имя, 25</span>
                    <span class="">Посмотрела вашу анкету</span>
                  </div>
                </div>
              </div>
            </div>
          </template>
          <template v-else-if="selected == 4">
            <div v-if="!setting">
              <div
                class="w-full pt-10 pb-6 px-2.5 flex justify-between items-center text-2xl text-blue-700"
              >
                <settings @click="toggleSetting" />

                <div
                  class="flex items-center gap-1 text-sm font-semibold text-blue-800"
                >
                  <img src="@/assets/img/logo.png" class="w-5 h-5" />
                  nikah.space
                </div>
                <logout />
              </div>
              <h2 class="pb-6 text-lg font-semibold text-center text-blue-900">
                Мой профиль
              </h2>

              <div class="px-2.5">
                <div class="relative">
                  <img src="@/assets/img/image.png" class="w-full" />
                  <div class="absolute left-0 w-full px-2 text-white bottom-5">
                    <h2 class="mb-2 text-base font-semibold">Имя, 29</h2>
                    <div
                      class="flex items-center justify-between w-full text-xl"
                    >
                      <div class="flex items-center gap-1">
                        <loc />
                        <span class="text-sm font-semibold">Казахстан, Астана</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="flex items-center gap-4 py-4 text-sm text-blue-700 font-extralight"
                >
                  <iconex class="text-xl" />
                  Разрешить другим видеть моё фото
                </div>
                <p class="px-2.5 pr-24 text-base text-[#230035] font-inter">
                  Ищу любовь. Умею готовить, люблю детей
                </p>
                <h2 class="text-base font-semibold text-blue-900 px-2.5">
                  О себе
                </h2>
                <div class="flex gap-5 mb-2 text-blue-700">
                  <div class="flex items-center gap-1 text-2xl">
                    <length />
                    <span class="text-sm text-blue-900"> 160 см </span>
                  </div>
                  <div class="flex items-center gap-1 text-xl">
                    <massa />
                    <span class="text-sm text-blue-900">60 кг </span>
                  </div>
                </div>
                <div
                  class="flex flex-wrap items-center gap-2 px-2.5 pb-4 font-inter"
                >
                  <div
                    class="py-2.5 px-4 text-sm bg-pink-200 text-blue-900 rounded-3xl"
                  >
                    Разведена
                  </div>
                  <div
                    class="py-2.5 px-4 text-sm bg-pink-200 text-blue-900 rounded-3xl"
                  >
                    Готова к переезду
                  </div>
                  <div
                    class="py-2.5 px-4 text-sm bg-pink-200 text-blue-900 rounded-3xl"
                  >
                    Живу с детьми
                  </div>
                </div>
              </div>
              <div class="pt-4">
                <span class="text-base font-semibold text-blue-900 px-2.5"
                  >Религиозность</span
                >
                <div
                  class="flex flex-wrap items-center gap-2 px-2.5 pb-4 font-inter mt-3"
                >
                  <div
                    class="py-2.5 px-4 text-sm bg-pink-200 text-blue-900 rounded-3xl"
                  >
                    Разведена
                  </div>
                  <div
                    class="py-2.5 px-4 text-sm bg-pink-200 text-blue-900 rounded-3xl"
                  >
                    Читаю перевод Коран
                  </div>
                  <div
                    class="py-2.5 px-4 text-sm bg-pink-200 text-blue-900 rounded-3xl"
                  >
                    Совершаю все обязательные намазы
                  </div>
                </div>
              </div>
              <div class="pt-4 px-2.5">
                <span class="text-base font-semibold text-blue-900"
                  >Материальное положенеи</span
                >
                <div
                  class="flex flex-wrap items-center gap-2 px-2.5 pb-4 font-inter mt-3"
                >
                  <div
                    class="py-2.5 px-4 text-sm bg-pink-200 text-blue-900 rounded-3xl"
                  >
                    Работаю
                  </div>
                </div>
              </div>
            </div>
            <template v-else>
              <div>
                <div
                  class="w-full relative pt-10 pb-6 px-2.5 flex justify-center items-center text-2xl text-blue-700"
                >
                  <chevron @click="goBack" class="absolute left-0" />

                  <div
                    class="flex items-center justify-center flex-grow gap-1 text-sm font-semibold text-blue-800"
                  >
                    <img src="@/assets/img/logo.png" class="w-5 h-5" />
                    nikah.space
                  </div>
                </div>
                <template v-if="back == 1">
                  <h2
                    class="pb-6 text-lg font-semibold text-center text-blue-900"
                  >
                    Настройки
                  </h2>
                  <div>
                    <div
                      class="px-2.5 text-base text-blue-900 mb-4"
                      @click="changeBack(2)"
                    >
                      Профиль
                    </div>
                    <div
                      class="px-2.5 text-base text-blue-900"
                      @click="changeBack(3)"
                    >
                      Безопасность
                    </div>
                    <div
                      class="flex items-center justify-center gap-2 py-10 text-base font-semibold text-blue-700"
                    >
                      <globus class="text-xl" />
                      <span>РУС</span>
                    </div>
                  </div>
                </template>
                <template v-else-if="back == 2">
                  <h2
                    class="pb-6 text-lg font-semibold text-center text-blue-900"
                  >
                    Профиль
                  </h2>
                  <div class="px-2.5">
                    <h2 class="mb-3 text-base font-semibold text-blue-900">
                      Общие данные
                    </h2>
                    <a-form>
                      <a-form-item>
                        <a-select
                          placeholder="Страна"
                          class="w-full !min-h-12"
                          value="kazak"
                        >
                          <a-select-option value="ru">Россия</a-select-option>
                          <a-select-option value="kazak"
                            >Казахстан</a-select-option
                          >
                        </a-select>
                      </a-form-item>
                      <a-form-item>
                        <a-select
                          placeholder="Город"
                          class="w-full !min-h-12"
                          value="ac"
                        >
                          <a-select-option value="vil">Москва</a-select-option>
                          <a-select-option value="ac">Астана</a-select-option>
                        </a-select>
                      </a-form-item>
                      <a-form-item>
                        <div class="grid grid-cols-2 gap-5 max-h-12">
                          <!-- <a-select
                            placeholder="Рост, см "
                            class="w-full !min-h-12"
                            value="ac"
                          >
                            <a-select-option value="vil"
                              >160 , см</a-select-option
                            >
                            <a-select-option value="ac"
                              >170 , см</a-select-option
                            >
                          </a-select>
                          <a-select
                            placeholder="Вес, кг"
                            class="w-full !min-h-12"
                            value="ac"
                          >
                            <a-select-option value="vil"
                              >70 , кг</a-select-option
                            >
                            <a-select-option value="ac"
                              >60 , кг</a-select-option
                            >
                          </a-select> -->
                          <a-input placeholder="Рост" suffix="см" type="number" :min="1" :value="160" />
                          <a-input placeholder="Вес" suffix="кг" type="number" :min="1" :value="50" />
                        </div>
                      </a-form-item>
                      <a-form-item label="Семейное положение">
                        <a-select
                          placeholder="Выбрать"
                          class="w-full !min-h-12"
                          value="divorced"
                        >
                          <a-select-option value="single"
                            >Холост</a-select-option
                          >
                          <!-- <a-select-option value="married">Женат/Замужем</a-select-option> -->
                          <a-select-option value="divorced"
                            >Разведен/Разведена</a-select-option
                          >
                          <a-select-option value="widowed"
                            >Вдовец/Вдова</a-select-option
                          >
                        </a-select>
                      </a-form-item>
                      <a-form-item label="Дети">
                        <a-select
                          placeholder="Выбрать"
                          class="w-full !min-h-12"
                          value="no"
                        >
                          <a-select-option value="yes">Есть </a-select-option>
                          <a-select-option value="no">Нет </a-select-option>
                        </a-select>
                      </a-form-item>
                      <a-form-item label="Переезд" value="no">
                        <a-select
                          placeholder="Выбрать"
                          class="w-full !min-h-12"
                        >
                          <a-select-option value="yes">Да</a-select-option>
                          <a-select-option value="no">Нет </a-select-option>
                        </a-select>
                      </a-form-item>
                      <a-form-item label="Образование" value="secondary">
                        <a-select
                          placeholder="Выбрать  "
                          class="w-full !min-h-12"
                        >
                          <a-select-option value="none"
                            >Нет образования</a-select-option
                          >
                          <a-select-option value="secondary"
                            >Среднее образование</a-select-option
                          >
                          <a-select-option value="higher"
                            >Высшее образование</a-select-option
                          >
                          <a-select-option value="postgraduate"
                            >Послевузовское образование</a-select-option
                          >
                        </a-select>
                      </a-form-item>
                      <a-form-item
                        label="Материальное положение"
                        value="medium"
                      >
                        <a-select
                          placeholder="Выбрать  "
                          class="w-full !min-h-12"
                        >
                          <a-select-option value="low"
                            >Низкий доход</a-select-option
                          >
                          <a-select-option value="medium"
                            >Средний доход</a-select-option
                          >
                          <a-select-option value="high"
                            >Высокий доход</a-select-option
                          >
                          <a-select-option value="not_specified"
                            >Не указано</a-select-option
                          >
                        </a-select>
                      </a-form-item>
                      <a-form-item label="Ссылки на соц.сети">
                        <div class="flex flex-col gap-6">
                          <a-input
                            placeholder="Номер WhatsApp"
                            value="12345671"
                          />
                          <a-input placeholder="Instagram " value="guhiui" />
                          <a-input placeholder="Telegram " value="guhiui" />
                          <a-textarea
                            placeholder=" Расскажите о себе"
                            :rows="4"
                          />
                        </div>
                      </a-form-item>
                      <div class="flex flex-col gap-3 mb-6">
                        <span class="text-lg text-blue-900">
                          Носите хиджаб?
                        </span>
                        <a-radio-group
                          name="radioGroup"
                          class="flex gap-14"
                          v-model:value="num"
                        >
                          <a-radio :value="1">Да</a-radio>
                          <a-radio :value="2">Нет</a-radio>
                        </a-radio-group>
                      </div>
                      <a-form-item label="Вы читаете Намаз?">
                        <a-select
                          placeholder="Выбрать"
                          class="w-full !min-h-12"
                          value="yes"
                        >
                          <a-select-option value="yes">Да </a-select-option>
                          <a-select-option value="no">Нет </a-select-option>
                        </a-select>
                      </a-form-item>
                      <a-form-item label="Вы читаете Коран?">
                        <a-select
                          placeholder="Выбрать"
                          class="w-full !min-h-12"
                          value="yes"
                        >
                          <a-select-option value="yes">Да </a-select-option>
                          <a-select-option value="no">Нет </a-select-option>
                        </a-select>
                      </a-form-item>
                    </a-form>
                    <div class="flex flex-col gap-3 px-8 pb-4">
                      <a-button
                        @click="goBack"
                        class="w-full rounded-2xl border-2 border-blue-700 text-blue-700 hover:!border-blue-800 hover:!text-blue-800 text-base font-medium h-12"
                        >Назад
                      </a-button>
                      <a-button
                        @click="goBack"
                        type="primary"
                        class="w-full !rounded-2xl bg-blue-700 hover:!bg-blue-800 h-12 font-medium text-base"
                        >Сохранить
                      </a-button>
                      <div
                        class="flex justify-center text-base text-blue-700"
                        @click="goBack"
                      >
                        Удалить профиль
                      </div>
                    </div>
                  </div>
                </template>
                <template v-else>
                  <h2
                    class="pb-6 text-lg font-semibold text-center text-blue-900"
                  >
                    Безопасность
                  </h2>
                  <a-form class="w-full px-2.5" layout="vertical">
                    <a-form-item class="w-full" label="Номер телефона">
                      <a-input
                        type="tel"
                        placeholder="Номер телефона"
                        v-model="phoneNumber"
                        @keydown="filterInput"
                      />
                    </a-form-item>
                    <a-form-item class="w-full" label="Пароль">
                      <a-input
                        placeholder="Пароль"
                        type="password"
                        value="nbekdev"
                      ></a-input>
                    </a-form-item>
                    <a-form-item class="w-full">
                      <a-input
                        placeholder="Новый номер пароль"
                        type="password"
                      ></a-input>
                    </a-form-item>
                    <a-form-item class="w-full">
                      <a-input
                        placeholder="Повторите новый пароль"
                        type="password"
                      ></a-input>
                    </a-form-item>
                  </a-form>
                  <div class="flex flex-col gap-3 px-8 pb-4">
                    <a-button
                      @click="goBack"
                      class="w-full rounded-2xl border-2 border-blue-700 text-blue-700 hover:!border-blue-800 hover:!text-blue-800 text-base font-medium h-12"
                      >Назад
                    </a-button>
                    <a-button
                      @click="goBack"
                      type="primary"
                      class="w-full !rounded-2xl bg-blue-700 hover:!bg-blue-800 h-12 font-medium text-base"
                      >Сохранить
                    </a-button>
                    <div
                      class="flex justify-center text-base text-blue-700"
                      @click="goBack"
                    >
                      Удалить профиль
                    </div>
                  </div>
                </template>
              </div>
            </template>
          </template>
        </div>
        <div
          class="min-h-[52px] border-t border-pink-200 text-blue-200 text-2xl flex justify-between items-center px-5 fixed bottom-0 bg-white w-full left-0"
        >
          <pallete
            @click="changeSelect(1)"
            :class="selected == 1 ? 'text-blue-700' : ''"
          />
          <div class="relative">
            <ring
              @click="changeSelect(2)"
              :class="selected == 2 ? 'text-blue-700' : ''"
            />
            <div
              v-if="!ring"
              class="flex h-2 w-2 bg-red absolute top-0 right-0.5 rounded"
            ></div>
          </div>
          <div @click="changeSelect(3)">
            <shop :class="selected == 3 ? 'text-blue-700' : ''" />
          </div>
          <profile
            @click="changeSelect(4)"
            :class="selected > 3 ? 'text-blue-700' : ''"
          />
        </div>
      </div>
    </div>

    <div v-else-if="filtr" class="min-h-screen">
      <div
        class="flex items-center justify-center flex-grow gap-1 pt-10 pb-5 text-sm font-semibold text-blue-800"
      >
        <img src="@/assets/img/logo.png" class="w-5 h-5" />
        nikah.space
      </div>
      <div>
        <h2 class="pb-10 text-xl font-semibold text-center text-blue-900">
          Фильтры
        </h2>
        <a-form class="px-2.5" layout="vertical">
          <a-form-item>
            <a-select placeholder="Страна" class="w-full !min-h-12">
              <a-select-option value="ru">Россия</a-select-option>
              <a-select-option value="kazak">Казахстан</a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item>
            <a-select placeholder="Город" class="w-full !min-h-12">
              <a-select-option value="vil">Москва</a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item label="Семейное положение">
            <a-select placeholder="Выбрать" class="w-full !min-h-12">
              <a-select-option value="single">Холост</a-select-option>
              <!-- <a-select-option value="married">Женат/Замужем</a-select-option> -->
              <a-select-option value="divorced"
                >Разведен/Разведена</a-select-option
              >
              <a-select-option value="widowed">Вдовец/Вдова</a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item label="Возраст партнёра">
            <div class="relative mx-4 mt-6">
              <a-slider
                v-model:value="value2"
                :min="18"
                :max="80"
                range
                class="w-full"
              />
              <div
                class="flex items-center justify-between w-full -mt-2 text-base text-blue-600"
              >
                <span>18</span>
                <span>80</span>
              </div>
              <div
                class="absolute flex justify-between h-5 pb-2 text-sm text-blue-500 -top-6"
                :style="{
                  left: `calc(${((value2[0] - 18) / (80 - 18)) * 100}% - 5px)`,
                  width: `calc(${
                    ((value2[1] - value2[0]) / (80 - 18)) * 100
                  }% + 18px)`,
                }"
              >
                <span>{{ value2[0] }}</span>
                <span>{{ value2[1] }}</span>
              </div>
            </div>
          </a-form-item>
          <a-form-item label="Дети">
            <a-select placeholder="Выбрать" class="w-full !min-h-12">
              <a-select-option value="yes">Есть </a-select-option>
              <a-select-option value="no">Нет </a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item label="Переезд">
            <a-select placeholder="Выбрать" class="w-full !min-h-12">
              <a-select-option value="yes">Да</a-select-option>
              <a-select-option value="no">Нет </a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item label="Материальное положение">
            <a-select placeholder="Выбрать  " class="w-full !min-h-12">
              <a-select-option value="low">Низкий доход</a-select-option>
              <a-select-option value="medium">Средний доход</a-select-option>
              <a-select-option value="high">Высокий доход</a-select-option>
              <a-select-option value="not_specified"
                >Не указано</a-select-option
              >
            </a-select>
            <div class="flex items-center gap-4 my-6 text-sm text-blue-900">
              <span class="w-[120px]">Только покрытые</span>
              <a-switch v-model:checked="checked1" />
            </div>
            <div class="flex items-center gap-4 mb-8 text-sm text-blue-900">
              <span class="w-[120px]">Только с фото</span>
              <a-switch v-model:checked="checked2" />
            </div>
            <div class="flex flex-col gap-3 px-8 pb-4">
              <a-button
                @click="changeFiltr"
                class="w-full rounded-2xl border-2 border-blue-700 text-blue-700 hover:!border-blue-800 hover:!text-blue-800 text-base font-medium h-12"
                >Назад
              </a-button>
              <a-button
                @click="changeFiltr"
                type="primary"
                class="w-full !rounded-2xl bg-blue-700 hover:!bg-blue-800 h-12 font-medium text-base"
                >Продолжить
              </a-button>
            </div>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>
<style scoped>
.custom-shadow {
  box-shadow: 0px 1px 4px 0px #d5cdff;
}

.h-calc {
  max-height: calc(100vh - 54px);
}
</style>
