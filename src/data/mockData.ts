import { Pet, Guardian, Appointment } from '../types';

export const mockGuardians: Guardian[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    phone: '(555) 123-4567',
    address: '123 Main St, City, State'
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '(555) 987-6543',
    address: '456 Oak Ave, City, State'
  }
];

export const mockPets: Pet[] = [
  {
    id: '1',
    name: 'Max',
    species: 'Dog',
    breed: 'Golden Retriever',
    age: 5,
    guardianId: '1'
  },
  {
    id: '2',
    name: 'Luna',
    species: 'Cat',
    breed: 'Siamese',
    age: 3,
    guardianId: '2'
  }
];

export const mockAppointments: Appointment[] = [
  {
    id: '1',
    petId: '1',
    date: new Date('2024-03-20T10:00:00'),
    reason: 'Annual Checkup',
    status: 'scheduled'
  },
  {
    id: '2',
    petId: '2',
    date: new Date('2024-03-21T14:30:00'),
    reason: 'Vaccination',
    status: 'scheduled'
  }
];