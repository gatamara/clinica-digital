<template>
  <section>
    <div class="pb-4">
      <WelcomeAlert :name="store.user.name" :date="store.user.nextAppointment.date"
        :time="store.user.nextAppointment.time" :doctor="store.user.nextAppointment.doctor" />
    </div>

    <h5 class="pb-1">Estado de sus citas agendadas</h5>
    <div class="card p-3">
      <AppointmentsTable :appointments="store.appointments" />
    </div>
  </section>
</template>

<script setup lang="ts">
import AppointmentsTable from '@/components/AppointmentsTable.vue';
import WelcomeAlert from '@/components/WelcomeAlert.vue';
import { useClinicaStore } from '@/stores/useClinicaStore';
import { onMounted } from 'vue';


const store = useClinicaStore();

onMounted(() => {
  store.getDashboardData();
});

</script>

<style scoped></style>
