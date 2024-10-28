<template>
  <div class="mr-1 overflow-hidden">
    <h2 class="pb-10 text-xl font-semibold text-center text-blue-900">
      Общие данные
    </h2>
    <a-form class="" layout="vertical">
      <a-form-item label="Семейное положение">
        <a-select placeholder="Выбрать" class="w-full !min-h-12">
          <a-select-option value="single">Холост</a-select-option>
          <!-- <a-select-option value="married">Женат/Замужем</a-select-option> -->
          <a-select-option value="divorced">Разведен/Разведена</a-select-option>
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
      <a-form-item label="Образование">
        <a-select placeholder="Выбрать  " class="w-full !min-h-12">
          <a-select-option value="none">Нет образования</a-select-option>
          <a-select-option value="secondary"
            >Среднее образование</a-select-option
          >
          <a-select-option value="higher">Высшее образование</a-select-option>
          <a-select-option value="postgraduate"
            >Послевузовское образование</a-select-option
          >
        </a-select>
      </a-form-item>
      <a-form-item label="Материальное положение">
        <a-select placeholder="Выбрать  " class="w-full !min-h-12">
          <a-select-option value="low">Низкий доход</a-select-option>
          <a-select-option value="medium">Средний доход</a-select-option>
          <a-select-option value="high">Высокий доход</a-select-option>
          <a-select-option value="not_specified">Не указано</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="Ссылки на соц.сети">
        <div class="flex flex-col gap-6">
          <a-input placeholder="Номер WhatsApp" />
          <a-input placeholder="Instagram " />
          <a-input placeholder="Telegram " />
          <a-textarea placeholder=" Расскажите о себе" :rows="4" />
        </div>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup>
import { ref } from "vue";
const value2 = ref([20, 30]);
</script>
<style>
.ant-tooltip {
  display: none !important;
}
</style>
