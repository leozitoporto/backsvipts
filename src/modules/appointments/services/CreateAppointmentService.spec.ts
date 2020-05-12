import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';

describe('CreateAppointment', () => {
  it('permite criar um novo agendamento', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();
    const createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );
    const appointment = await createAppointment.execute({
      date: new Date(),
      provider_id: '121212',
    });

    expect(appointment).toHaveProperty('id');
  });

  // it('nao deve permitir dois agendamentos no mesmo horário', () => {
  //   expect(1 + 2).toBe(3);
  // });
});
