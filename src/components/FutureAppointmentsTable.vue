<script setup lang="ts">
import type { Future } from '@/interfaces/historico.interface';

defineProps({
  appointments: {
    type: Array as () => Future[],
    required: true,
  },
});

</script>
<template>
  <table class="table table-bordered">
    <thead class="table-success">
      <tr>
        <th scope="col">Fecha</th>
        <th scope="col">Hora</th>
        <th scope="col">Especialidad</th>
        <th scope="col">Médico</th>
        <th scope="col">Acciones</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(appointment, index) in appointments" :key="index">
        <td>{{ appointment.date }}</td>
        <td>{{ appointment.time }}</td>
        <td>{{ appointment.specialty }}</td>
        <td>{{ appointment.doctor }}</td>
        <td class="d-flex gap-2">
          <button class="btn btn-warning">Modificar</button>
          <button class="btn btn-danger">Cancelar</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
