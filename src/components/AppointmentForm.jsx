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
    <form onSubmit={handleSubmit}>
      <h2>Nuevo turno</h2>
      <p>Completá los datos del paciente y la fecha del turno.</p>

      <div className="form-grid">
        <div className="field">
          <label htmlFor="name">Nombre</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Ej: Juan Pérez"
          />
        </div>

        <div className="field">
          <label htmlFor="date">Fecha</label>
          <input
            id="date"
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </div>

        <div className="field">
          <label htmlFor="time">Hora</label>
          <input
            id="time"
            type="time"
            value={time}
            onChange={(event) => setTime(event.target.value)}
          />
        </div>
      </div>

      <button type="submit">Agregar turno</button>
    </form>
  )
}

export default AppointmentForm


