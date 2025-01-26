<script setup lang="ts">

interface Props {
  label: string;
  type: string;
  placeholder: string;
  name: string;
}
defineProps<Props>()

const model = defineModel()

</script>
<template>
  <div class="control-container mb-4">
    <label :for="name" class="form-label">{{ label }}</label>
    <input :type="type" class="form-control" :id="name" :placeholder="placeholder" v-model="model" />
  </div>
</template>
