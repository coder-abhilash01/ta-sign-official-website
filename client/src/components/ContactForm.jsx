import React, { useState } from 'react'
import emailjs from "@emailjs/browser";
import {
    ArrowRight,
    Mail,
    Phone,
    User,
    FileSignature,
    LoaderCircle,
    
} from "lucide-react";

import { toast } from 'sonner';
import { services } from '@/data/contact';



const ContactForm = () => {

    const [selectedService, setSelectedService] = useState("");
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const handleFormChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    
    }

    const handleQueryForm = async (e) => {
        e.preventDefault();

        if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !selectedService.trim() || !formData.message.trim()) {
            toast.error("Please fill in all the fields before submitting.");
            return;
        }

        try {
            setLoading(true);

            const templateParams = {
                ...formData,
                service: selectedService,
                time: new Date().toLocaleString(),
            };

            const res = await emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, templateParams, import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

            toast.success("Your query has been sent successfully!");
            
            setFormData({
                name: "",
                email: "",
                phone: "",
                message: "",
            });
            setSelectedService("");

        } catch (error) {
            console.error("Error sending email:", error);
            toast.error("An error occurred while sending your query. Please try again later.");
        } finally {
            setLoading(false);
        }
    } 
    return (
        <form
            onSubmit={handleQueryForm}
            className="flex flex-col gap-3">

            {/* NAME */}

            <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                    Full Name
                </label>

                <div className="relative">
                    <User
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleFormChange}
                        placeholder="Enter your name"
                        className="w-full h-12 rounded-2xl border border-gray-200 
                  bg-gray-50 pl-12 pr-4 outline-none
                  focus:border-black transition"
                    />
                </div>
            </div>

            {/* EMAIL */}

            <div>

                <label className="text-sm font-medium text-gray-700 mb-1 block">
                    Email Address
                </label>

                <div className="relative">
                    <Mail
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        required
                        onChange={handleFormChange}
                        placeholder="Enter your email"
                        className="w-full h-12 rounded-2xl border border-gray-200 
                  bg-gray-50 pl-12 pr-4 outline-none
                  focus:border-black transition"
                    />
                </div>
            </div>

            {/* PHONE */}

            <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                    Phone Number
                </label>

                <div className="relative">
                    <Phone
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                        type="tel"
                        value={formData.phone}
                        name="phone"
                        required
                        onChange={handleFormChange}
                        placeholder="Enter your phone number"
                        className="w-full h-12 rounded-2xl border border-gray-200 
                  bg-gray-50 pl-12 pr-4 outline-none
                  focus:border-black transition"
                    />
                </div>
            </div>

            {/* SERVICE */}

            <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                    Select Service
                </label>

                <div className="relative">

                    <FileSignature
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 z-10"
                    />

                    <select
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="w-full h-12 rounded-2xl border border-gray-200 
                  bg-gray-50 pl-12 pr-4 outline-none
                  focus:border-black transition appearance-none"
                    >
                        <option value="">
                            Choose a service
                        </option>

                        {services.map((service, index) => (
                            <option key={index} value={service}>
                                {service}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* MESSAGE */}

            <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                    Your Query
                </label>

                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    placeholder="Describe your requirement..."
                    className="w-full min-h-[120px] rounded-2xl border border-gray-200 
                bg-gray-50 p-5 outline-none resize-none
                focus:border-black transition"
                />
            </div>

            {/* BUTTON */}

            <button
                type="submit"
                disabled={loading}
                className="group h-12 rounded-full  bg-gradient-to-r from-[#192f72] to-[#01012a] text-white
              flex items-center justify-center gap-2
              hover:bg-neutral-800 transition-all duration-300 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {loading ? (
                    <span className="flex items-center gap-2">
                        <LoaderCircle className='animate-spin' size={18} />
                        Sending Query...
                    </span>
                ) : (
                    "Submit Query"
                )}

               { !loading && (
                    <ArrowRight
                        size={18}
                        className="group-hover:translate-x-1 transition"
                    />
                )}
            </button>

        </form>
    )
}

export default ContactForm
