import axios from "axios";
const ASSIGNMENTS_API = "https://kanbas-node-server-app.onrender.com/api/assignments";

export const fetchAssignments = async () => {
  const response = await axios.get(ASSIGNMENTS_API);
  return response.data;
};

export const fetchAssignmentById = async (id: string) => {
  const response = await axios.get(`${ASSIGNMENTS_API}/${id}`);
  return response.data;
};

export const createAssignment = async (assignment: any) => {
  const response = await axios.post(ASSIGNMENTS_API, assignment);
  return response.data;
};

export const updateAssignment = async (id: string, assignment: any) => {
  const response = await axios.put(`${ASSIGNMENTS_API}/${id}`, assignment);
  return response.data;
};

export const deleteAssignment = async (id: string) => {
  const response = await axios.delete(`${ASSIGNMENTS_API}/${id}`);
  return response.data;
};
