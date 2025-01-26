<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container">
        <a class="navbar-brand text-primary">Clinica Digital</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink class="nav-link active" to="/dashboard">Inicio</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/dashboard/agenda">Citas</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/dashboard/historico">Perfil</RouterLink>
            </li>
            <li class="nav-item">
              <button @click='closeSession' class="nav-link text-danger">Cerrar Sesión</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <main class="p-5">
    <router-view />
  </main>
</template>

<script setup lang="ts">
import { useClinicaStore } from '@/stores/useClinicaStore'
import router from '../router/index';

const store = useClinicaStore();

const closeSession = () => {
  store.isAuth = false;
  router.push('/login')
};

</script>

\

<style scoped>
main {
  background-color: #efefef;
  height: 100vh;
}
</style>
