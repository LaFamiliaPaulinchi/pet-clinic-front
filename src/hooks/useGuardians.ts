import { useState } from 'react';
import { Guardian } from '../types';
import { mockGuardians } from '../data/mockData';

export const useGuardians = () => {
  const [guardians, setGuardians] = useState<Guardian[]>(mockGuardians);

  const addGuardian = (guardian: Omit<Guardian, 'id'>) => {
    const newGuardian = {
      ...guardian,
      id: Math.random().toString(36).substr(2, 9),
    };
    setGuardians([...guardians, newGuardian]);
  };

  const updateGuardian = (id: string, updatedGuardian: Partial<Guardian>) => {
    setGuardians(guardians.map(guardian => 
      guardian.id === id ? { ...guardian, ...updatedGuardian } : guardian
    ));
  };

  const deleteGuardian = (id: string) => {
    setGuardians(guardians.filter(guardian => guardian.id !== id));
  };

  const getGuardianById = (id: string) => {
    return guardians.find(guardian => guardian.id === id);
  };

  return {
    guardians,
    addGuardian,
    updateGuardian,
    deleteGuardian,
    getGuardianById,
  };
};