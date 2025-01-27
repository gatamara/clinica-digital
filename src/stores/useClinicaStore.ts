import { defineStore } from 'pinia'
import { ref } from 'vue'
import router from '@/router'
import type { Appointment, User } from '@/interfaces/clinica.interface'
import type { Specialty } from '@/interfaces/agenda.interface'
import { apiServices } from '@/services/index'
import type { Future, Past } from '@/interfaces/historico.interface'

interface LoginParams {
  email: string
  password: string
}
const defaultUser: User = {
  name: '',
  nextAppointment: {
    date: '',
    time: '',
    doctor: '',
  },
}
const defaulSpecialty: Specialty = {
  id: '',
  name: '',
  availability: {
    totalSlots: 0,
    bookedSlots: 0,
  },
  doctors: [],
}
export const useClinicaStore = defineStore('clinica', () => {
  const isAuth = ref(false)
  const userEmail = ref('')
  const password = ref('')
  const errorMessage = ref('')
  const user = ref<User>(defaultUser)
  const appointments = ref<Appointment[]>([])
  const specialties = ref<Specialty[]>([defaulSpecialty])
  const futureAppointments = ref<Future[]>([])
  const pastAppointments = ref<Past[]>([])
  const isDashboardDataLoaded = ref(false)

  const login = async ({ email, password }: LoginParams) => {
    try {
      const data = await apiServices.postLoginUser({ email, password })
      isAuth.value = true
      router.push('/dashboard')
      return data
    } catch (error) {
      isAuth.value = false
      errorMessage.value = 'Credenciales incorrectas. Intente nuevamente.'
      throw error
    }
  }

  const isLoading = ref(false)

  const getDashboardData = async () => {
    if (isDashboardDataLoaded.value) {
      console.log('Los datos del dashboard ya están cargados.')
      return
    }

    isLoading.value = true

    try {
      const result = await apiServices.getDashboard()
      console.log(result)
      user.value = result.user
      appointments.value = result.appointments
      isDashboardDataLoaded.value = true // Marca los datos como cargados
    } catch (error) {
      console.error('Error al obtener datos del dashboard:', error)
    } finally {
      isLoading.value = false
    }
  }

  const getAgenda = async () => {
    const result = await apiServices.getAgenda()
    specialties.value = result.specialties
  }

  const getHistorico = async () => {
    const result = await apiServices.getHistorico()
    const { future, past } = result.appointments
    futureAppointments.value = future
    pastAppointments.value = past
  }
  const scheduleAppointment = async (appointment: Appointment) => {
    appointments.value = [...appointments.value, appointment]
    //appointments.value.push(appointment)
    console.log(appointment, 'agendar nueva cita')
  }

  return {
    isAuth,
    isLoading,
    userEmail,
    password,
    user,
    appointments,
    specialties,
    futureAppointments,
    pastAppointments,
    isDashboardDataLoaded,
    //actions
    login,
    getDashboardData,
    getAgenda,
    getHistorico,
    scheduleAppointment,
  }
})
