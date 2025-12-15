import { useState } from 'react'

// Componente de formulario para crear nuevos turnos
// Recibe por props: onAddAppointment (función que recibe el nuevo turno)
function AppointmentForm({ onAddAppointment }) {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  // Maneja el envío del formulario y valida datos básicos
  const handleSubmit = (event) => {
    event.preventDefault()

    if (!name.trim() || !date || !time) {
      // Validación sencilla: todos los campos son obligatorios
      return
    }

    const newAppointment = {
      id: crypto.randomUUID(), // id simple para identificar el turno
      name: name.trim(),
      date,
      time,
    }

    onAddAppointment(newAppointment)

    // Reiniciar campos del formulario
    setName('')
    setDate('')
    setTime('')
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '16px' }}>
      <h2>Nuevo turno</h2>
      <div style={{ marginBottom: '8px' }}>
        <label>
          Nombre:
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            style={{ marginLeft: '8px' }}
          />
        </label>
      </div>
      <div style={{ marginBottom: '8px' }}>
        <label>
          Fecha:
          <input
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
            style={{ marginLeft: '8px' }}
          />
        </label>
      </div>
      <div style={{ marginBottom: '8px' }}>
        <label>
          Hora:
          <input
            type="time"
            value={time}
            onChange={(event) => setTime(event.target.value)}
            style={{ marginLeft: '8px' }}
          />
        </label>
      </div>
      <button type="submit">Agregar turno</button>
    </form>
  )
}

export default AppointmentForm


