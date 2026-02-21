import axiosInstance from "../lib/axios";

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string; // Optional field
  message: string;
  receiveUpdates: boolean;
}

export const submitContactForm = async (contactData: ContactFormData) => {
  console.log('Submitting contact form with data:', contactData);
  
  try {
    const response = await axiosInstance.post('/contact', contactData);
    return response.data;
  } catch (error: any) {
    console.error('API Error Details:', {
      status: error.response?.status,
      data: error.response?.data,
      config: error.config
    });
    throw error;
  }
};