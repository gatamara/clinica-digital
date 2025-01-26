export interface Historico {
  appointments: Appointments
}

export interface Appointments {
  future: Future[]
  past: Past[]
}

export interface Future {
  id: number
  date: Date
  time: string
  specialty: string
  doctor: string
}

export interface Past {
  id: number
  date: Date
  time: string
  specialty: string
  doctor: string
  status: string
  statusClass?: string
}
