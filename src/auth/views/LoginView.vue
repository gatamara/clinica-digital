<template>
  <main>
    <div class="card-container">
      <div class="card shadow-lg">
        <SectionTitle text="Clínica Digital" />
        <p class="card-text mb-5">Inicie sesión para gestionar sus citas</p>

        <form @submit.prevent="onSubmit">
          <TextField label="Correo Electrónico" type="email" name="email" placeholder="pedro@pacientes.com"
            v-model="email" />
          <TextField label="Contraseña" type="password" name="password" placeholder="Ingrese su contraseña"
            v-model="password" />
          <CheckBox label="Recordarme" name="remember" v-model="rememberme" />
          <button type="submit" href="#" class="btn btn-primary mb-4 w-100">Iniciar Sesión</button>
        </form>
        <a class="link-offset-2 link-underline link-underline-opacity-0">¿Olvidó su contraseña?</a>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TextField from '@/components/TextField.vue';
import SectionTitle from '@/components/SectionTitle.vue';
import CheckBox from '@/components/CheckBox.vue';
import { useClinicaStore } from '@/stores/useClinicaStore';

const store = useClinicaStore();

const email = ref('pedro@pacientes.com');
const password = ref('admin1234');
const rememberme = ref(false);

const onSubmit = async () => {
  try {
    await store.login({ email: email.value, password: password.value });
    console.log('Inicio exitoso', email.value, password.value);
  } catch (error) {
    console.error('Error en el inicio de sesión:', error);

  }
};
</script>


<style scoped>
main {
  background-color: #efefef;
  height: 100vh;
  display: flex;
  justify-content: center;

  .card-container {
    padding-top: 10%;

    .card {
      text-align: center;
      padding: 30px;
      width: 400px;
    }

    .control-container {
      text-align: left;
    }
  }
}
</style>
