import React, { ReactNode } from 'react';

interface AppointmentContainerProps {
  children: ReactNode;
}

const AppointmentContainer: React.FC<AppointmentContainerProps> = ({ children }) => (
  <div className="flex justify-center relative w-slotsWidth min-w-slotsWidth">{children}</div>
);

export default AppointmentContainer;
