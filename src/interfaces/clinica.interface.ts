export interface Clinica {
  user: User
  appointments: Appointment[]
}

export interface Appointment {
  date: string
  time: string
  specialty: string
  doctor: string
  status: string
  statusClass: string
}

export interface User {
  name: string
  nextAppointment: NextAppointment
}

export interface NextAppointment {
  date: string
  time: string
  doctor: string
}
