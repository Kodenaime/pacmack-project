
export const submitContactForm = async (contactData) => {
  console.log('Submitting contact form with data:', contactData); // Add this line
  try {
    const response = await axiosInstance.post('/contact', contactData);
    return response.data;
  } catch (error) {
    console.error('API Error Details:', {  // Enhanced error logging
      status: error.response?.status,
      data: error.response?.data,
      config: error.config
    });
    throw error;
  }
};