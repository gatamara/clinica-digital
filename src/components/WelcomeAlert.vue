<script setup lang="ts">

interface Props {
  name: string
  time: string
  date: string
  doctor: string
}

const props = defineProps<Props>()

const formatDate = (date: string) => {
  const newDate = new Date(date)
  return newDate.toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
  })
}

</script>
<template>
  <div class="alert alert-primary" role="alert">
    <h4 class="alert-heading">¡Bienvenido, {{ props.name }}!</h4>
    <p>
      Recuerde que su próxima cita es el {{ formatDate(props.date) }} a las
      {{ props.time }} con el {{ props.doctor }}.
    </p>
  </div>
</template>
