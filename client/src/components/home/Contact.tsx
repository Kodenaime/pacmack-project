import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { submitContactForm } from '../../api/contactApi'; 
import { toast } from 'react-toastify';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  receiveUpdates: boolean;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    receiveUpdates: false
  });

  const mutation = useMutation({
    mutationFn: submitContactForm,
    onSuccess: (data) => {
      toast.success(data.message || 'Message sent successfully!');
      setFormData({
        firstName: '', lastName: '', email: '', phone: '', message: '', receiveUpdates: false
      });
    },
    onError: (error: any) => {
      const message = error.response?.data?.message || 'Failed to send message. Please try again.';
      toast.error(message);
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  return (
    <section className="py-20 bg-brand-bg" id="contact">
      <div className="container-lg">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Let's Connect</h2>
          <p className="text-brand-text max-w-xl mx-auto">
            Have questions about the community or need more info? We'd love to hear from you.
          </p>
        </div>

        {/* Form Container */}
        <form 
          onSubmit={handleSubmit} 
          className="max-w-3xl mx-auto p-6 md:p-10 rounded-2xl bg-linear-to-br from-primary/5 to-primary/20 shadow-soft flex flex-col gap-6"
        >
          {/* User Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-brand-black">First Name <span className="text-red-500">*</span></label>
              <input 
                className="w-full p-3 rounded-lg border border-brand-gray/20 bg-brand-white focus:outline-primary"
                type="text" name="firstName" value={formData.firstName} onChange={handleChange}
                placeholder="First name" required 
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-brand-black">Last Name <span className="text-red-500">*</span></label>
              <input 
                className="w-full p-3 rounded-lg border border-brand-gray/20 bg-brand-white focus:outline-primary"
                type="text" name="lastName" value={formData.lastName} onChange={handleChange}
                placeholder="Last name" required 
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-brand-black">Email <span className="text-red-500">*</span></label>
              <input 
                className="w-full p-3 rounded-lg border border-brand-gray/20 bg-brand-white focus:outline-primary"
                type="email" name="email" value={formData.email} onChange={handleChange}
                placeholder="Email address" required 
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-brand-black">WhatsApp Phone</label>
              <input 
                className="w-full p-3 rounded-lg border border-brand-gray/20 bg-brand-white focus:outline-primary"
                type="tel" name="phone" value={formData.phone} onChange={handleChange}
                placeholder="+234..." 
              />
            </div>
          </div>

          {/* Message Area */}
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-brand-black">Message <span className="text-red-500">*</span></label>
            <textarea 
              className="w-full p-3 h-32 rounded-lg border border-brand-gray/20 bg-brand-white focus:outline-primary resize-none"
              name="message" value={formData.message} onChange={handleChange}
              placeholder="How can we help?" required 
            />
          </div>

          {/* Updates Checkbox */}
          <div className="flex items-center gap-3">
            <input 
              type="checkbox" name="receiveUpdates" checked={formData.receiveUpdates} onChange={handleChange}
              className="w-5 h-5 accent-primary cursor-pointer"
            /> 
            <p className="text-brand-black font-medium">Receive Community updates</p>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            disabled={mutation.isPending}
            className="w-full md:w-auto self-center bg-primary text-brand-black px-12 py-3 rounded-lg font-bold shadow-medium transition-smooth hover:scale-105 disabled:bg-brand-gray disabled:cursor-not-allowed flex items-center justify-center"
          >
            {mutation.isPending ? (
              <><span className="animate-spin h-5 w-5 border-2 border-brand-black border-t-transparent rounded-full mr-2" /> Sending...</>
            ) : 'Submit'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;