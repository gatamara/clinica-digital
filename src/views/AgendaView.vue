<template>
  <div class="container">
    <SectionTitle text="Agendar Nueva Cita" />
    <div class="row g-4">
      <div v-if="alertMessage" class="alert alert-success" role="alert">
        {{ alertMessage }}
      </div>
      <div class="col-12">
        <SelectField label="Seleccione Especialidad" :options="store.specialties ?? []" v-model="selected" />
      </div>
      <div class="col-12">
        <ProgressField label="Disponibilidad de la especialidad:"
          :percent="getPercent(availability?.totalSlots ?? 0, availability?.bookedSlots ?? 0)" />
      </div>
      <div class="col-12">
        <SelectField label="Seleccione Doctor" :options="doctors ?? []" v-model="selectedDoctor" />
      </div>
      <div class="col-12">
        <ProgressField label="Disponibilidad del doctor:" :percent="getPercent(availabilityDoctor?.totalSlots ?? 0, availabilityDoctor?.bookedSlots ?? 0)
          " />
      </div>
      <div class="col-12">
        <TextField label="Fecha" type="date" name="date" placeholder="01/01/2024" v-model="date" />
      </div>
      <div class="col-12">
        <TextField label="Hora" type="time" name="time" placeholder="12:30" v-model="time" />
      </div>
      <div class="col-12">
        <button class="btn btn-primary w-100" @click="shedule">Agendar Cita</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProgressField from '@/components/ProgressField.vue';
import SectionTitle from '@/components/SectionTitle.vue';
import SelectField from '@/components/SelectField.vue';
import TextField from '@/components/TextField.vue';
import type { Doctor } from '@/interfaces/agenda.interface';
import { useClinicaStore } from '@/stores/useClinicaStore';
import { onMounted, ref, watch } from 'vue';

const store = useClinicaStore();
const selected = ref(null);
const doctors = ref<Doctor[]>([])
const selectedDoctor = ref(null);
const date = ref('');
const time = ref('');
const availability = ref()
const availabilityDoctor = ref()
const alertMessage = ref('');

console.log(selected.value)

watch(selected, () => {
  console.log(selected)

  availability.value = store.specialties.find(
    (specialty) => specialty.id == selected.value,
  )?.availability

  doctors.value = store.specialties.find(
    (specialty) => specialty.id == selected.value,
  )?.doctors || []

})

watch(selectedDoctor, () => {
  availabilityDoctor.value = doctors.value.find(
    (doctor: Doctor) => doctor.id == selectedDoctor.value,
  )?.availability
})


function getPercent(totalSlots: number, bookedSlots: number) {
  return totalSlots === 0 ? 0 : (bookedSlots / totalSlots) * 100;
}

onMounted(() => {
  store.getAgenda()
});


const shedule = () => {
  if (!selected.value || !selectedDoctor.value || !date.value || !time.value) {
    alertMessage.value = 'Por favor, complete todos los campos.';
    setTimeout(() => {
      alertMessage.value = '';
    }, 2000);
    return;
  }
  store.scheduleAppointment({
    specialty: selected.value,
    doctor: selectedDoctor.value,
    date: date.value,
    time: time.value,
    status: 'pending',
    statusClass: "warning"
  })

  setTimeout(() => {
    alertMessage.value = 'Cita agendada correctamente.';
  }, 2000);
  selected.value = null;
  selectedDoctor.value = null;
  date.value = '';
  time.value = '';

}
</script>

<style scoped></style>
