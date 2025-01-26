<script setup lang="ts">
defineProps({
  label: String,
  percent: Number,
})
</script>
<template>
  <div class="control-container">
    <label class="form-label">{{ label }}</label>
    <div
      class="progress"
      role="progressbar"
      aria-label="Basic example"
      :ariaValuenow="percent"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <div class="progress-bar" :style="{ width: percent + '%' }"></div>
    </div>
  </div>
</template>
