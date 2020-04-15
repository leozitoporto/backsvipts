import { isEqual } from 'date-fns';
import Appointment from '../models/Appointment';

// DTO = Data Transfer Object

interface CreateAppoitmentDTO {
  provider: string;
  date: Date;
}

class AppointmentsRepository {
  private appointments: Appointment[];

  constructor() {
    this.appointments = [];
  }

  // Retornar todos os agendamentos
  public all(): Appointment[] {
    return this.appointments;
  }

  // Appointment | null = o retorno é do tipo Appointment ou será nulo
  public findByDate(date: Date): Appointment | null {
    // procuro um agendamento na msma data
    const findAppointment = this.appointments.find(appointment =>
      isEqual(date, appointment.date),
    );
    // se encontrar tras ele senao retorna nulo
    return findAppointment || null;
  }

  // Criar agendamento
  public create({ provider, date }: CreateAppoitmentDTO): Appointment {
    const appointment = new Appointment({ provider, date });

    this.appointments.push(appointment);

    return appointment;
  }
}

export default AppointmentsRepository;
