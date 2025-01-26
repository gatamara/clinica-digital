<script setup lang="ts">
defineProps({
  appointments: Array,
})

const badgeClass = (status) => {
  return `badge text-bg-${status}`
}

const formatDate = (date) => {
  const newDate = new Date(date)

  const day = newDate.getDate().toString().padStart(2, '0')
  const month = (newDate.getMonth() + 1).toString().padStart(2, '0')
  const year = newDate.getFullYear()
  return `${day}/${month}/${year}`
}
</script>
<template>
  <table class="table table-bordered">
    <thead class="table-primary">
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
        <td>{{ formatDate(appointment.date) }}</td>
        <td>{{ appointment.time }}</td>
        <td>{{ appointment.specialty }}</td>
        <td>{{ appointment.doctor }}</td>
        <td>
          <span :class="badgeClass(appointment.statusClass)">{{ appointment.status }}</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>
