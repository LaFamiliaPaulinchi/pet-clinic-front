import React from 'react';
import { useGuardians } from '../../hooks/useGuardians';
import GuardianList from './GuardianList';

const GuardianManager: React.FC = () => {
  const { guardians, addGuardian, updateGuardian, deleteGuardian } = useGuardians();

  return (
    <div className="flex-1 p-8">
      <GuardianList
        guardians={guardians}
        onAdd={addGuardian}
        onUpdate={updateGuardian}
        onDelete={deleteGuardian}
      />
    </div>
  );
};

export default GuardianManager;