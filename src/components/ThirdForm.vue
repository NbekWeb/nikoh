<template>
  <div class="overflow-hidden mr-1 h-full">
    <h2 class="text-xl font-semibold text-blue-900 text-center pb-10">
      Религиозность
    </h2>
    <a-form class="">
      <div class="flex flex-col gap-3 mb-6">
        <span class="text-lg text-blue-900"> Носите бороду? </span>
        <a-radio-group
          v-model:value="value"
          name="radioGroup"
          class="flex gap-14"
        >
          <a-radio value="1">Да</a-radio>
          <a-radio value="2">Нет</a-radio>
        </a-radio-group>
      </div>
      <a-form-item label="Вы читаете Намаз?">
        <a-select placeholder="Выбрать" class="w-full !min-h-12">
          <a-select-option value="yes">Да </a-select-option>
          <a-select-option value="no">Нет </a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="Вы читаете Коран?">
        <a-select placeholder="Выбрать" class="w-full !min-h-12">
          <a-select-option value="yes">Да </a-select-option>
          <a-select-option value="no">Нет </a-select-option>
        </a-select>
      </a-form-item>
    </a-form>
  </div>
</template>
<script setup>
import { ref } from "vue";
const value = ref("1");
</script>
<style>
.ant-radio-inner {
  border-color: #354ddf !important;
}
.ant-radio-wrapper .ant-radio-inner::after {
  background: #354ddf !important;
}
.ant-radio-wrapper .ant-radio-checked .ant-radio-inner::after {
  transform: scale(0.75);
}
.ant-radio-wrapper .ant-radio-inner {
  width: 20px;
  height: 20px;
}
.ant-radio-wrapper .ant-radio-checked .ant-radio-inner {
  background: #fff;
}
</style>
