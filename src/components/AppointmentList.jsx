// Componente de presentación que muestra la lista de turnos
// Recibe por props: appointments (array de turnos) y onDeleteAppointment (función para borrar)
function AppointmentList({ appointments, onDeleteAppointment }) {
  return (
    <div>
      <h2>Lista de turnos</h2>
      {appointments.length === 0 ? (
        <p>No hay turnos cargados.</p>
      ) : (
        <ul>
          {appointments.map((appointment) => (
            <li key={appointment.id} style={{ marginBottom: '8px' }}>
              <span>
                <strong>{appointment.name}</strong> - {appointment.date} - {appointment.time}
              </span>
              <button
                type="button"
                onClick={() => onDeleteAppointment(appointment.id)}
                style={{ marginLeft: '8px' }}
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default AppointmentList


