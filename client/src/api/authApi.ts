import axiosInstance from "../lib/axios";

// Match this to the Backend Route
export const joinCommunity = async (formData: any) => {
  // Prefix with /community to match app.use('/api/community', ...)
  const response = await axiosInstance.post('/community/join', formData);
  return response.data;
};