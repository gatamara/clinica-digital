<template>
  <section>
    <SectionTitle text="Listado de Citas" />
    <div class="mb-5">
      <h5 class="pb-1 text-success">Citas Futuras</h5>
      <FutureAppointmentsTable :appointments="store.futureAppointments" />
    </div>
    <h5 class="pb-1 text-secondary">Citas Pasadas o Canceladas</h5>
    <PastAppointmentsTable :appointments="store.pastAppointments" />
  </section>
</template>

<script setup lang="ts">
import FutureAppointmentsTable from '@/components/FutureAppointmentsTable.vue';
import PastAppointmentsTable from '@/components/PastAppointmentsTable.vue';
import SectionTitle from '@/components/SectionTitle.vue';
import { useClinicaStore } from '@/stores/useClinicaStore';
import { onMounted } from 'vue';

const store = useClinicaStore();


onMounted(() => {
  store.getHistorico()
});
</script>

<style scoped>
section {
  padding: 20px;
}
</style>
