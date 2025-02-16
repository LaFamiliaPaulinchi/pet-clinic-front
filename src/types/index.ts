export interface Pet {
  id: string;
  name: string;
  species: string;
  breed: string;
  age: number;
  guardianId: string;
  guardian?: Guardian;
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
  time: string;
  reason: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  notes?: string;
}