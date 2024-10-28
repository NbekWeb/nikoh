<template>
  <div class="mr-1 overflow-y-hidden">
    <h2 class="pb-10 text-xl font-semibold text-center text-blue-900">
      Общие данные
    </h2>
    <span class="text-base text-blue-900 text-start">Ваш пол</span>
    <div class="grid grid-cols-2 gap-2.5 mb-6 mt-2.5">
      <div
        class="flex items-center justify-center h-12 gap-3 rounded-lg"
        :class="
          gender == 1
            ? 'text-blue-700 border-blue-700 border'
            : 'text-blue-200 border-blue-200 border'
        "
        @click="changeGender(1)"
      >
        <man />
        <span>Мужской</span>
      </div>
      <div
        @click="changeGender(2)"
        class="flex items-center justify-center h-12 gap-3 border rounded-lg"
        :class="
          gender == 2
            ? 'text-blue-700 border-blue-700'
            : 'text-blue-200 border-blue-200'
        "
      >
        <women />
        <span>Женский</span>
      </div>
    </div>

    <a-form class="" layout="vertical">
      <a-form-item>
        <a-input placeholder="Имя" />
      </a-form-item>
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
      <span class="text-base text-blue-900"> Дата рождения </span>
      <a-form-item class="mt-3">
        <!-- <a-select placeholder="ДД.ММ.ГГГГ" class="w-full !min-h-12">
          <a-select-option value="vil">11-02-2023</a-select-option>
        </a-select> -->
        <a-date-picker
          :locale="locale"
          class="w-full min-h-12"
          :format="dateFormat"
          placeholder="ДД.ММ.ГГГГ"
        />
      </a-form-item>
      <a-form-item>
        <div class="grid grid-cols-2 gap-5 min-h-12">
          <!-- <a-select placeholder="Рост, см " class="w-full !min-h-12" value="ac">
            <a-select-option value="vil">160  см</a-select-option>
            <a-select-option value="ac">170  см</a-select-option>
          </a-select>
          <a-select placeholder="Вес, кг" class="w-full !min-h-12" value="ac">
            <a-select-option value="vil">70  кг</a-select-option>
            <a-select-option value="ac">60  кг</a-select-option>
          </a-select> -->
          <a-input placeholder="Рост, см" suffix="см" type="number" :min="1" />
          <a-input placeholder="Вес, кг" suffix="кг" type="number" :min="1" />
        </div>
      </a-form-item>
    </a-form>
  </div>
</template>
<script setup>
import { ref } from "vue";
import Man from "./icons/Man.vue";
import Women from "./icons/Women.vue";
import locale from "ant-design-vue/es/date-picker/locale/ru_RU";
import "dayjs/locale/ru";
import dayjs from "dayjs";
dayjs.locale("ru");
const gender = ref(1);
const changeGender = (i) => {
  gender.value = i;
  localStorage.setItem("gender", i);
};
localStorage.setItem("gender", "1");
const dateFormat = "DD-MM-YYYY";
</script>
