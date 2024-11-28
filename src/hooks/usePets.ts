import { useState } from 'react';
import { Pet } from '../types';
import { mockPets } from '../data/mockData';

export const usePets = () => {
  const [pets, setPets] = useState<Pet[]>(mockPets);

  const addPet = (pet: Omit<Pet, 'id'>) => {
    const newPet = {
      ...pet,
      id: Math.random().toString(36).substr(2, 9),
    };
    setPets([...pets, newPet]);
  };

  const updatePet = (id: string, updatedPet: Partial<Pet>) => {
    setPets(pets.map(pet => 
      pet.id === id ? { ...pet, ...updatedPet } : pet
    ));
  };

  const deletePet = (id: string) => {
    setPets(pets.filter(pet => pet.id !== id));
  };

  const getPetById = (id: string) => {
    return pets.find(pet => pet.id === id);
  };

  return {
    pets,
    addPet,
    updatePet,
    deletePet,
    getPetById,
  };
};