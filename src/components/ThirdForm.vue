<template>
  <div class="h-full mr-1 overflow-hidden">
    <h2 class="pb-10 text-xl font-semibold text-center text-blue-900">
      Религиозность
    </h2>
    <a-form class="" layout="vertical">
      <div class="flex flex-col gap-3 mb-6">
        <span class="text-lg text-blue-900"
          >{{ gender == 1 ? "Носите бороду?" : "Носите хиджаб?" }}
        </span>
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
const gender = localStorage.getItem("gender");
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
