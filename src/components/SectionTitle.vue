<script setup lang="ts">
defineProps({
  text: String,
})
</script>
<template>
  <h1 class="display-6 text-primary fw-medium">{{ text }}</h1>
</template>
