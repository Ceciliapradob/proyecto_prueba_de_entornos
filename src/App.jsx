import { useEffect, useState } from 'react'
import './App.css'
import AppointmentForm from './components/AppointmentForm.jsx'
import AppointmentList from './components/AppointmentList.jsx'

// Componente principal de la aplicación
// Se encarga de manejar el estado global de los turnos y la persistencia en localStorage
function App() {
  const LOCAL_STORAGE_KEY = 'appointments'

  // Estado principal de la app: lista de turnos
  const [appointments, setAppointments] = useState(() => {
    // Estado inicial: intenta leer del localStorage, si no hay datos usa un mock
    const stored = window.localStorage.getItem(LOCAL_STORAGE_KEY)
    if (stored) {
      try {
        return JSON.parse(stored)
      } catch {
        // Si falla el parseo, se ignora y se usa el mock
      }
    }

    // Lista de turnos mock inicial
    return [
      {
        id: '1',
        name: 'Juan Pérez',
        date: '2025-12-20',
        time: '10:00',
      },
      {
        id: '2',
        name: 'María López',
        date: '2025-12-21',
        time: '15:30',
      },
    ]
  })

  // Cada vez que cambia la lista de turnos, se guarda en localStorage
  useEffect(() => {
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(appointments))
  }, [appointments])

  // Maneja la agregación de un nuevo turno
  const handleAddAppointment = (newAppointment) => {
    setAppointments((currentAppointments) => [...currentAppointments, newAppointment])
  }

  // Maneja la eliminación de un turno por id
  const handleDeleteAppointment = (appointmentId) => {
    setAppointments((currentAppointments) =>
      currentAppointments.filter((appointment) => appointment.id !== appointmentId),
    )
  }

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '16px' }}>
      <h1>Gestión de turnos</h1>
      <AppointmentForm onAddAppointment={handleAddAppointment} />
      <AppointmentList
        appointments={appointments}
        onDeleteAppointment={handleDeleteAppointment}
      />
    </div>
  )
}

export default App
