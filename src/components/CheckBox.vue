<script setup lang="ts">
defineProps({
  label: String,
  name: String,
})

const model = defineModel()
</script>
<template>
  <div class="control-container form-check mb-4">
    <input class="form-check-input" type="checkbox" v-model="model" :id="name" />
    <label class="form-check-label" :for="name"> {{ label }} </label>
  </div>
</template>
