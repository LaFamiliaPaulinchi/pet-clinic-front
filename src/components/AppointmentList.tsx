import React from 'react';
import { format } from 'date-fns';
import { Calendar, Clock } from 'lucide-react';
import { Appointment, Pet, Guardian } from '../types';
import { mockPets, mockGuardians } from '../data/mockData';

interface AppointmentListProps {
  appointments: Appointment[];
}

const AppointmentList: React.FC<AppointmentListProps> = ({ appointments }) => {
  const getPetDetails = (petId: string) => {
    return mockPets.find(pet => pet.id === petId);
  };

  const getGuardianDetails = (petId: string) => {
    const pet = getPetDetails(petId);
    return pet ? mockGuardians.find(guardian => guardian.id === pet.guardianId) : null;
  };

  return (
    <div className="space-y-4">
      {appointments.map((appointment) => {
        const pet = getPetDetails(appointment.petId);
        const guardian = getGuardianDetails(appointment.petId);

        return (
          <div key={appointment.id} className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">{pet?.name}</h3>
                <p className="text-gray-600">{pet?.breed}</p>
              </div>
              <div className={`px-3 py-1 rounded-full ${
                appointment.status === 'scheduled' ? 'bg-blue-100 text-blue-800' :
                appointment.status === 'completed' ? 'bg-green-100 text-green-800' :
                'bg-red-100 text-red-800'
              }`}>
                {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
              </div>
            </div>
            
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="h-4 w-4" />
                <span>{format(appointment.date, 'MMMM d, yyyy')}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="h-4 w-4" />
                <span>{format(appointment.date, 'h:mm a')}</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t">
              <p className="text-sm text-gray-600">Guardian: {guardian?.name}</p>
              <p className="text-sm text-gray-600">Reason: {appointment.reason}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AppointmentList;