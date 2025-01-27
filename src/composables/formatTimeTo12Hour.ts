function formatTimeTo12Hour(time: string): string {
  const [hours, minutes] = time.split(':').map(Number) // Divide y convierte a números
  const period = hours >= 12 ? 'PM' : 'AM' // Determina AM o PM
  const adjustedHours = hours % 12 || 12 // Convierte las 12 horas y maneja 12 AM/PM
  return `${adjustedHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${period}`
}

export default formatTimeTo12Hour
