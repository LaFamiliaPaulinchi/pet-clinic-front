import React from 'react';
import { usePets } from '../../hooks/usePets';
import { useGuardians } from '../../hooks/useGuardians';
import PetList from './PetList';

const PetManager: React.FC = () => {
  const { pets, addPet, updatePet, deletePet } = usePets();
  const { guardians } = useGuardians();

  return (
    <div className="flex-1 p-8">
      <PetList
        pets={pets}
        guardians={guardians}
        onAdd={addPet}
        onUpdate={updatePet}
        onDelete={deletePet}
      />
    </div>
  );
};

export default PetManager;