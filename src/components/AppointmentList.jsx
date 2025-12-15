// Componente de presentación que muestra la lista de turnos
// Recibe por props: appointments (array de turnos) y onDeleteAppointment (función para borrar)
function AppointmentList({ appointments, onDeleteAppointment }) {
  return (
    <div>
      <h2>Lista de turnos</h2>
      {appointments.length === 0 ? (
        <p className="no-appointments">No hay turnos cargados.</p>
      ) : (
        <ul className="appointments-list">
          {appointments.map((appointment) => (
            <li key={appointment.id} className="appointment-item">
              <div className="appointment-main">
                <span className="appointment-name">{appointment.name}</span>
                <span className="appointment-meta">
                  {appointment.date} · {appointment.time}
                </span>
              </div>
              <button
                type="button"
                onClick={() => onDeleteAppointment(appointment.id)}
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


