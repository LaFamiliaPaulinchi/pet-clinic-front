import React from 'react';
import { Calendar, Users, PawPrint } from 'lucide-react';
import { mockAppointments, mockPets, mockGuardians } from '../data/mockData';
import AppointmentList from './AppointmentList';

const Dashboard = () => {
  return (
    <div className="flex-1 p-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center gap-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Calendar className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-gray-600">Appointments</p>
              <p className="text-2xl font-bold">{mockAppointments.length}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center gap-4">
            <div className="bg-green-100 p-3 rounded-lg">
              <PawPrint className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-gray-600">Pets</p>
              <p className="text-2xl font-bold">{mockPets.length}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center gap-4">
            <div className="bg-purple-100 p-3 rounded-lg">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <p className="text-gray-600">Guardians</p>
              <p className="text-2xl font-bold">{mockGuardians.length}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Upcoming Appointments</h2>
        <AppointmentList appointments={mockAppointments} />
      </div>
    </div>
  );
};

export default Dashboard;