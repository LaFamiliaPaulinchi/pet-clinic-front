import { useState, useEffect } from "react";
import { Guardian } from "../types";
import * as guardianService from "../api-services/guardians.services";

export const useGuardians = () => {
  const [guardians, setGuardians] = useState<Guardian[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await guardianService.fetchGuardians();
        console.log(data);
        setGuardians(data);
      } catch (err) {
        setError("Failed to fetch guardians");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const addGuardian = async (guardian: Omit<Guardian, "id">) => {
    setLoading(true);
    try {
      const newGuardian = await guardianService.addGuardian(guardian);
      setGuardians([...guardians, newGuardian]);
    } catch (err) {
      setError("Failed to add guardian");
    } finally {
      setLoading(false);
    }
  };

  const updateGuardian = async (
    id: string,
    updatedGuardian: Partial<Guardian>
  ) => {
    setLoading(true);
    try {
      const updated = await guardianService.updateGuardian(id, updatedGuardian);
      setGuardians(
        guardians.map((guardian) => (guardian.id === id ? updated : guardian))
      );
    } catch (err) {
      setError("Failed to update guardian");
    } finally {
      setLoading(false);
    }
  };

  const deleteGuardian = async (id: string) => {
    setLoading(true);
    try {
      await guardianService.deleteGuardian(id);
      setGuardians(guardians.filter((guardian) => guardian.id !== id));
    } catch (err) {
      setError("Failed to delete guardian");
    } finally {
      setLoading(false);
    }
  };

  const getGuardianById = (id: string) => {
    return guardians.find((guardian) => guardian.id === id);
  };

   const getGuardiansListByName = async (name: string): Promise<Guardian[]> => {
    setLoading(true);
    setError(null);
    try {
      return await guardianService.getGuardiansByName(name); // Retorna solo los resultados buscados
    } catch (err) {
      setError("Failed to fetch guardians by name");
      return [];
    } finally {
      setLoading(false);
    }
  };

  return {
    guardians,
    addGuardian,
    updateGuardian,
    deleteGuardian,
    getGuardianById,
    getGuardiansListByName,
    loading,
    error,
  };
};
