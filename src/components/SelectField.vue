<script setup lang="ts">

interface Options {
  id: number | string;
  name: string;
}
interface Props {
  label: string;
  options: Options[];
}

defineProps<Props>()


const selected = defineModel()

</script>
<template>
  <div class="control-container">
    <label class="form-label">{{ label }}</label>
    <select class="form-select" v-model="selected">
      <option v-for="(option, index) in options" :value="option.id" :key="index" :selected="index == 0">
        {{ option.name }}
      </option>
    </select>
  </div>
</template>
