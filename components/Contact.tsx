"use client";
import { useState } from "react";

import { urlFor } from '@/sanity/lib/image';
export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);

        // You could send this data to an API here:
        // fetch("/api/contact", { method: "POST", body: JSON.stringify(formData) });

        // Reset form
        setFormData({ name: "", email: "", subject: "", message: "" });
    }
    return (
        <>


            <div id="contact" className="container mt-20 mb-20 mx-auto max-w-4xl p-8">
                <h2
                    className="section-title"
                    data-aos="fade-up" data-aos-once="true" data-aos-duration="1500"
                >
                    Get in touch
                </h2>
                <div className="row">
                    <div className="col-md-12" data-aos="fade-up" data-aos-once="true" data-aos-duration="1500">
                        <h2 className="text-lg font-bold mb-6">SEND ME A MESSAGE</h2>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name */}
                            <div>
                                <label htmlFor="name" className="block font-semibold mb-2">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-50"
                                    placeholder="Your name"
                                    required
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block font-semibold mb-2">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-50"
                                    placeholder="Your email"
                                    required
                                />
                            </div>

                            {/* Subject */}
                            <div>
                                <label htmlFor="subject" className="block font-semibold mb-2">
                                    Subject
                                </label>
                                <input
                                    id="subject"
                                    type="text"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-50"
                                    placeholder="Subject"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="message" className="block font-semibold mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-50"
                                    placeholder="Your message"
                                    required
                                />
                            </div>

                            {/* Button */}
                            <button
                                type="submit"
                                className="w-full bg-green-500 text-white font-semibold px-6 py-3 rounded-md hover:bg-green-600 transition"
                            >
                                SEND MESSAGE
                            </button>
                        </form>
                        {/* /.contact-form */}
                    </div>
                    {/* /.col-md-6 */}
                </div>
                {/* /.row */}
            </div>

        </>
    );
};



