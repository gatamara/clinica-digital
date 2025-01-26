export interface Agenda {
  specialties: Specialty[]
}

export interface Specialty {
  id: string
  name: string
  availability: Availability
  doctors: Doctor[]
}

export interface Doctor {
  id: string
  name: string
  availability: Availability
}

export interface Availability {
  totalSlots: number
  bookedSlots: number
}
