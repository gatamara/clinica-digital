<script setup lang="ts">
import type { Past } from '@/interfaces/historico.interface';

defineProps({
  appointments: {
    type: Array as () => Past[],
    required: true,
  },
})
</script>
<template>
  <table class="table table-bordered">
    <thead class="table-secondary">
      <tr>
        <th scope="col">Fecha</th>
        <th scope="col">Hora</th>
        <th scope="col">Especialidad</th>
        <th scope="col">Médico</th>
        <th scope="col">Estado</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(appointment, index) in appointments" :key="index">
        <td>{{ appointment.date }}</td>
        <td>{{ appointment.time }}</td>
        <td>{{ appointment.specialty }}</td>
        <td>{{ appointment.doctor }}</td>
        <td>{{ appointment.status }}</td>
      </tr>
    </tbody>
  </table>
</template>
