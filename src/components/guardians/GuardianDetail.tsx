import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Mail, Phone, MapPin, PawPrint } from "lucide-react";

import { getGuardianById } from "../../api-services/guardians.services";
import { getPetsByGuardianId } from "../../api-services/pets.services";
import { Guardian, Pet } from "../../types";

const GuardianDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  //   const { pets } = usePets();

  const [guardian, setGuardian] = useState<Guardian | null>(null);
  const [guardianPets, setPets] = useState<Pet[]>([]);

  const fetchData = async () => {
    const data = await getGuardianById(id || "");
    const guardianPets = await getPetsByGuardianId(id || "");
    setPets(guardianPets);
    setGuardian(data);
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  if (!guardian) {
    return (
      <div className="flex-1 p-8">
        <div className="text-center text-gray-600">Guardian not found</div>
      </div>
    );
  }

  return (
    <div className="flex-1 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Guardian Information Card */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            {guardian.name}
          </h1>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-gray-600">
              <Mail className="h-5 w-5" />
              <span>{guardian.email}</span>
            </div>

            <div className="flex items-center gap-3 text-gray-600">
              <Phone className="h-5 w-5" />
              <span>{guardian.phone}</span>
            </div>

            <div className="flex items-center gap-3 text-gray-600">
              <MapPin className="h-5 w-5" />
              <span>{guardian.address}</span>
            </div>
          </div>
        </div>

        {/* Pets List */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-2 mb-6">
            <PawPrint className="h-6 w-6 text-blue-600" />
            <h2 className="text-xl font-semibold">Pets</h2>
          </div>

          {guardianPets.length === 0 ? (
            <p className="text-gray-600 text-center py-4">
              No pets registered for this guardian
            </p>
          ) : (
            <div className="grid gap-4">
              {guardianPets.map((pet) => (
                <div
                  key={pet.id}
                  className="border rounded-lg p-4 hover:bg-gray-50"
                >
                  <h3 className="font-semibold text-lg text-blue-500">
                    <Link to={`/pets/${pet.id}`}>{pet.name}</Link>
                  </h3>
                  <div className="mt-2 space-y-1 text-gray-600">
                    <p>Species: {pet.species}</p>
                    {pet.breed && <p>Breed: {pet.breed}</p>}
                    <p>Age: {pet.age} years</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GuardianDetail;
