<template>
  <div>
    <h2 class="text-xl font-semibold text-blue-900 text-center pb-10">
      Общие данные
    </h2>
    <span class="text-blue-900 text-base text-start">Ваш пол</span>
    <div class="grid grid-cols-2 gap-2.5 mb-6 mt-2.5">
      <div
        class="rounded-lg h-12 flex gap-3 items-center justify-center"
        :class="
          gender == 1
            ? 'text-blue-700 border-blue-700 border'
            : 'text-blue-200 border-transparent'
        "
        @click="changeGender(1)"
      >
        <man />
        <span>Мужской</span>
      </div>
      <div
        @click="changeGender(2)"
        class="h-12 border rounded-lg flex gap-3 items-center justify-center"
        :class="
          gender == 2
            ? 'text-blue-700 border-blue-700'
            : 'text-blue-200 border-transparent'
        "
      >
        <women />
        <span>Женский</span>
      </div>
    </div>
    <a-form class="">
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
      <span class="text-blue-900 text-base"> Дата рождения </span>
      <a-form-item class="mt-3">
        <a-date-picker
          :locale="locale"
          class="w-full min-h-12"
          :format="dateFormat"
          placeholder="ДД.ММ.ГГГГ"
        />
      </a-form-item>
      <a-form-item>
        <div class="grid grid-cols-2 gap-5">
          <a-input placeholder="Рост, см" />
          <a-input placeholder="Вес, кг" />
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
const gender = ref(1);
const changeGender = (i) => {
  gender.value = i;
};
const dateFormat = "DD-MM-YYYY";
</script>
