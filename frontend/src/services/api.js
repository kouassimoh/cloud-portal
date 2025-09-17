import axios from "axios";

// Base URL points to Flask backend
const API = axios.create({
  baseURL: "http://127.0.0.1:5000",
});

// Fetch all applicants
export const getApplicants = async () => {
  const response = await API.get("/applicants");
  return response.data;
};

// Add a new applicant
export const addApplicant = async (applicant) => {
  const response = await API.post("/applicants", applicant);
  return response.data;
};
