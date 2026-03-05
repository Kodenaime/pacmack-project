import React from 'react';
import { useMutation } from '@tanstack/react-query';
import { joinCommunity } from '../api/authApi';
import { toast } from 'react-toastify';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

const CommunityRegister = () => {
  const mutation = useMutation({
    mutationFn: joinCommunity,
    onSuccess: () => {
      toast.success("Application sent! Check your email for confirmation.");
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || "Submission failed.");
    }
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    mutation.mutate(data);
  };

  
  return (
    <div className="bg-brand-bg min-h-screen">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container-lg max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-black text-brand-black uppercase">Join the Movement</h1>
          </div>

          <form onSubmit={handleSubmit} className="bg-brand-white p-8 md:p-12 rounded-3xl shadow-soft border border-brand-gray/10 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Section: Personal Information */}
            <div className="md:col-span-2 border-b border-brand-gray/10 pb-2">
               <h3 className="font-black text-lg uppercase">Personal Details</h3>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-bold text-xs uppercase">First Name*</label>
              <input name="firstName" required className="p-3 bg-brand-bg rounded-lg outline-none focus:ring-2 focus:ring-primary" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-bold text-xs uppercase">Middle Name (Optional)</label>
              <input name="middleName" className="p-3 bg-brand-bg rounded-lg outline-none focus:ring-2 focus:ring-primary" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-bold text-xs uppercase">Last Name*</label>
              <input name="lastName" required className="p-3 bg-brand-bg rounded-lg outline-none focus:ring-2 focus:ring-primary" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-bold text-xs uppercase">Biological Sex*</label>
              <select name="sex" required className="p-3 bg-brand-bg rounded-lg outline-none focus:ring-2 focus:ring-primary">
                <option value="">Select...</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-bold text-xs uppercase">Age Bracket*</label>
              <select name="ageBracket" required className="p-3 bg-brand-bg rounded-lg outline-none">
                <option value="">Select...</option>
                <option value="18-25">18 - 25</option>
                <option value="26-35">26 - 35</option>
                <option value="36-50">36 - 50</option>
                <option value="51+">51+</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-bold text-xs uppercase">Email*</label>
              <input type='email' name="email" required placeholder="example@gmail.com" className="p-3 bg-brand-bg rounded-lg outline-none" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-bold text-xs uppercase">WhatsApp Number*</label>
              <input name="whatsapp" required placeholder="+234..." className="p-3 bg-brand-bg rounded-lg outline-none" />
            </div>

            {/* Section: Professional & Location */}
            <div className="md:col-span-2 border-b border-brand-gray/10 pb-2 mt-4">
               <h3 className="font-black text-lg uppercase">Location & Background</h3>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-bold text-xs uppercase">Passport Country*</label>
              <input name="passportCountry" required className="p-3 bg-brand-bg rounded-lg outline-none" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-bold text-xs uppercase">Country of Residence*</label>
              <input name="countryOfResidence" required className="p-3 bg-brand-bg rounded-lg outline-none" />
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="font-bold text-xs uppercase">Current Engagement*</label>
              <select name="currentEngagement" required className="p-3 bg-brand-bg rounded-lg outline-none">
                <option value="">Select...</option>
                <option value="Student">Student</option>
                <option value="Employed">Employed</option>
                <option value="Entrepreneur">Entrepreneur</option>
                <option value="Missionary">Full-time Missionary</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Section: Community */}
            <div className="md:col-span-2 border-b border-brand-gray/10 pb-2 mt-4">
              <h3 className="font-black text-lg uppercase">Community Engagement</h3>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-bold text-xs uppercase">Membership Category*</label>
              <select name="category" required className="p-3 bg-brand-bg rounded-lg outline-none">
                <option value="MK/TCK">MK / TCK</option>
                <option value="MK/TCK Caregiver">MK/TCK Caregiver</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-bold text-xs uppercase">Join a community arm?*</label>
              <select name="joinCommunityArm" required className="p-3 bg-brand-bg rounded-lg outline-none">
                <option value="Yes">Yes, I'd like to join an arm</option>
                <option value="No">No, just general membership</option>
                <option value="Maybe">Tell me more first</option>
              </select>
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="font-bold text-xs uppercase">Tell us a bit about yourself*</label>
              <textarea name="reasonForJoining" required rows={3} className="p-3 bg-brand-bg rounded-lg outline-none resize-none" />
            </div>

            <button 
              disabled={mutation.isPending}
              className="md:col-span-2 bg-primary text-brand-black py-4 rounded-xl font-black uppercase tracking-widest hover:scale-[1.02] transition-transform disabled:opacity-50"
            >
              {mutation.isPending ? "Submitting Application..." : "Submit Membership Application"}
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CommunityRegister;