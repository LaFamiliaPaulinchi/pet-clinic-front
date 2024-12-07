import axiosInstance from "./axios-instance";

import { Appointment } from "../types";

export const getNextAppointmentByPetId = async (id) => {
  const response = await axiosInstance.get<Appointment[]>(
    "/appointments/next?petId=" + id
  );
  return response.data;
};

export const getPastAppointmentsByPetId = async (
  id
): Promise<Appointment[]> => {
  const response = await axiosInstance.get<Appointment[]>(
    "/appointments/past?petId=" + id
  );
  return response.data;
};
