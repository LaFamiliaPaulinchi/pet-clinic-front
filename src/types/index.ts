export interface Pet {
  id: string;
  name: string;
  species: string;
  breed: string;
  age: number;
  guardianId: string;
}

export interface Guardian {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface Appointment {
  id: string;
  petId: string;
  date: Date;
  reason: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  notes?: string;
}