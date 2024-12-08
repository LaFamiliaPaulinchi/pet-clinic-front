import axiosInstance from "./axios-instance";
import { Guardian } from "../types";

const API_URL = "/guardians";

// Fetch all guardians
export const fetchGuardians = async (): Promise<Guardian[]> => {
  const response = await axiosInstance.get<Guardian[]>(API_URL);
  console.log(response.data);
  return response.data;
};

// Add a new guardian
export const addGuardian = async (
  guardian: Omit<Guardian, "id">
): Promise<Guardian> => {
  const response = await axiosInstance.post<Guardian>(API_URL, guardian);
  return response.data;
};

// Update an existing guardian
export const updateGuardian = async (
  id: string,
  updatedGuardian: Partial<Guardian>
): Promise<Guardian> => {
  const response = await axiosInstance.put<Guardian>(
    `${API_URL}/${id}`,
    updatedGuardian
  );
  return response.data;
};

// Delete a guardian
export const deleteGuardian = async (id: string): Promise<void> => {
  await axiosInstance.delete(`${API_URL}/${id}`);
};

// get guardians list by name
export const getGuardiansByName = async (name: string): Promise<Guardian[]> => {
  const response = await axiosInstance.get<Guardian[]>(
    `${API_URL}?name=${name}`
  );
  console.log(response.data);
  return response.data;
};

// get guardian by id
export const getGuardianById = async (id: string): Promise<Guardian> => {
  const response = await axiosInstance.get<Guardian>(`${API_URL}/${id}`);
  return response.data;
};
