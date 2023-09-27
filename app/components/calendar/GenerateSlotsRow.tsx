import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import SlotsRowContainer from './SlotsRowContainer';
import AppointmentContainer from './AppointmentContainer';
import AppointmentLabel from './AppointmentLabel';
import AppointmentButton from '../ui/buttons/AppointmentBtn';
import UnworkingHoursLabel from '../ui/labels/UnworkingHoursLabel';
import SpinnerSmall from '../ui/SpinnerSmall';
import { GenerateSlotsRowProps, InfoModalType } from '../../helpers/interfaces';
import { isWorkingHour, capitalizeFirstLetter } from '../../helpers/universalFunctions';
import ConfirmationModal from '../ui/modals/ConfirmationModal';
import InfoModal from '../ui/modals/InfoModal';
import AbsenceHoursLabel from '../ui/labels/AbsenceHoursLabel';

const GenerateSlotsRow: React.FC<GenerateSlotsRowProps> = ({
  weekDays,
  dataLoaded,
  workingHours,
  appointments,
  time,
  handleAppointmentButton,
  setDisplayForm,
  services,
  clients,
  slotDuration,
  showRow,
  index,
  setAppointments,
  setErrorModal,
}) => {
  const [showConfirmation, setShowConfirmation] = useState({
    isVisible: false,
    delete: false,
    appointmentId: '',
  });
  const [showInfoModal, setShowInfoModal] = useState<InfoModalType>({ isVisible: false, text: '' });
  const handleAppointmentDelete = useCallback(
    async (appointmentId: string) => {
      try {
        await axios.delete(`${process.env.NEXT_PUBLIC_DATABASE_URL}/appointments/${appointmentId}`);
        setAppointments((prevAppointments) =>
          prevAppointments.filter((appointment) => appointment.id !== appointmentId),
        );

        setShowInfoModal({ isVisible: true, text: 'Termin je uspešno obrisan.' });
      } catch (error) {
        console.error('An error occurred while deleting the appointment:', error);
        setErrorModal({ isVisible: true, text: 'Došlo je do greške, termin nije obrisan.' });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  useEffect(() => {
    showConfirmation.delete ? handleAppointmentDelete(showConfirmation.appointmentId) : undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showConfirmation.delete]);

  return (
    <div key={index}>
      <ConfirmationModal
        showConfirmation={showConfirmation}
        setShowConfirmation={setShowConfirmation}
        text='Da li ste sigurni da želite obrisati termin?'
      />
      <InfoModal showInfoModal={showInfoModal} setShowInfoModal={setShowInfoModal} />
      {showRow && (
        <SlotsRowContainer>
          {weekDays.map((day) => {
            const workingHour = workingHours.find((wh: any) => wh.date === day.date); // Update this line
            const isAbsence = workingHour?.absence !== 'nema odsustva';
            return (
              <div className='col-span-1 border-2 border-solid border-transparent' key={day.day}>
                {dataLoaded ? (
                  workingHours &&
                  workingHours.length > 0 &&
                  isWorkingHour(day.day, time, workingHours) ? (
                    <AppointmentContainer>
                      {appointments.find(
                        (appointment) =>
                          appointment.day === day.day &&
                          appointment.time === time &&
                          appointment.date === day.date,
                      ) ? (
                        <AppointmentLabel
                          appointment={appointments.find(
                            (appointment) =>
                              appointment.day === day.day &&
                              appointment.time === time &&
                              appointment.date === day.date,
                          )}
                          services={services}
                          clients={clients}
                          slotDuration={slotDuration}
                          onDoubleClick={() => {
                            const appointment = appointments.find(
                              (appointment) =>
                                appointment.day === day.day &&
                                appointment.time === time &&
                                appointment.date === day.date,
                            );
                            if (appointment) {
                              setShowConfirmation({
                                ...showConfirmation,
                                isVisible: true,
                                appointmentId: appointment.id,
                              });
                            }
                          }}
                        />
                      ) : isAbsence ? (
                        <AbsenceHoursLabel
                          time={time}
                          absence={capitalizeFirstLetter(workingHour?.absence)}
                        />
                      ) : (
                        <AppointmentButton
                          onClick={() => {
                            setDisplayForm({
                              clientForm: true,
                              serviceForm: false,
                              backdrop: true,
                              post: false,
                            });
                            handleAppointmentButton(day.day, time, day.date);
                          }}
                          time={time}
                        />
                      )}
                    </AppointmentContainer>
                  ) : (
                    <UnworkingHoursLabel time={time} />
                  )
                ) : (
                  <SpinnerSmall />
                )}
              </div>
            );
          })}
        </SlotsRowContainer>
      )}
    </div>
  );
};

export default GenerateSlotsRow;
