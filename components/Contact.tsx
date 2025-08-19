"use client";
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { usePost } from '@/app/hooks/usePost';
import axios from 'axios';
import { useReCaptcha } from "next-recaptcha-v3";

import { urlFor } from '@/sanity/lib/image';
export default function Contact() {
    const { postRequest } = usePost();
    const { executeRecaptcha } = useReCaptcha();
    const [statusMessage, setStatusMessage] = useState('');
    const [status, setStatus] = useState<'success' | 'error' | 'loading' | 'submit'>('submit');
    const [fromName, setFromName] = useState('');
    const [fromEmail, setFromEmail] = useState('');
    const [message, setMessage] = useState('');
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    return (
        <>


            <div id="contact" className="container mt-20 mb-20 mx-auto container p-4">
                <h2
                    className="section-title"
                    data-aos="fade-up" data-aos-once="true" data-aos-duration="1500"
                >
                    Get in touch
                </h2>
                <div className="row">
                    <div className="col-md-12" data-aos="fade-up" data-aos-once="true" data-aos-duration="1500">
                        <h2 className="text-lg font-bold mb-6">SEND ME A MESSAGE</h2>

                        <form
                            onSubmit={handleSubmit(() => {

                                const sendForm = async () => {
                                    const token = await executeRecaptcha("form_submit");
                                    setStatus('loading');
                                    try {
                                        const formData = {
                                            to: "reymer_n@outlook.com", // Change to your recipient
                                            from: "noreply@nreymer.ca", // Change to your verified sender
                                            subject: `Contact from Portfolio Site`,
                                            text: message,
                                            token: token,
                                            html: `
                                            New contact form filled out:
                                            <br/><br />
                                            From: ${fromName}
                                            <br /><br />
                                            Email:<br />
                                            ${fromEmail}
                                            <br><br>
                                            Message:
                                            ${message}
                                            <br /><br />
                                            `,
                                        };
                                        const response = await axios.post('/api/mail', formData);
                                        // postRequest('/api/mail', formData);
                                        setStatus('success');
                                        setStatusMessage(response.data.message);
                                    } catch (error) {
                                        if (axios.isAxiosError(error)) {
                                            setStatusMessage(error.response?.data.error || 'An error occurred.');
                                        } else {
                                            setStatusMessage('An error occurred. Please try again later.');
                                        }
                                    }
                                };
                                sendForm();
                            })}
                            className="space-y-6">
                            {/* Name */}
                            <div>
                                <label htmlFor="name" className="block font-semibold mb-2">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    value={fromName}
                                    onChange={(e) => setFromName(e.target.value)}
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
                                    value={fromEmail}
                                    onChange={(e) => setFromEmail(e.target.value)}
                                    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-50"
                                    placeholder="Your email"
                                    required
                                />
                            </div>

                            {/* Subject */}
                            {/* <div>
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
                            </div> */}

                            {/* Message */}
                            <div>
                                <label htmlFor="message" className="block font-semibold mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-50"
                                    placeholder="Your message"
                                    required
                                />
                            </div>

                            {/* Button */}
                            <button
                                type="submit"
                                className="w-full bg-green-500 text-white font-semibold px-6 py-3 rounded-md hover:bg-green-600 transition uppercase"

                            >
                                {status}
                            </button>
                        </form>
                        {status === 'success' &&
                            <div className="success-message" role="region" aria-label="Email Form success">
                                <div>Thank you! Your submission has been received!</div>
                            </div>
                        }

                        {status === 'error' &&
                            <div className="error-message" role="region" aria-label="Email Form failure">
                                <div>Oops! Something went wrong while submitting the form.</div>
                            </div>
                        }
                    </div>

                </div>

            </div>

        </>
    );
};



