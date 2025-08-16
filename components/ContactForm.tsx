
"use client";
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { usePost } from '@/app/hooks/usePost';
import axios from 'axios';
import { useReCaptcha } from "next-recaptcha-v3";

export default function ContactForm() {

  const [fromName, setFromName] = useState('');
  const [fromEmail, setFromEmail] = useState('');
  const [message, setMessage] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const [status, setStatus] = useState<'success' | 'error' | 'loading' | 'submit'>('submit');
  const { postRequest } = usePost();
  const { executeRecaptcha } = useReCaptcha();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <section className="content-container contact-block__section">
        <h2>
          General Inquiries      </h2>

        <p>
          For General Inquiries or comments, please contact us using the form below.      </p>

        <div className="">
          <form
            onSubmit={handleSubmit(() => {

              const sendForm = async () => {
                const token = await executeRecaptcha("form_submit");
                setStatus('loading');
                try {
                  const formData = {
                    to: "reymer_n@outlook.com", // Change to your recipient
                    from: "reymer_n@outlook.com", // Change to your verified sender
                    subject: `Contact from Poftfolio Site`,
                    text: message,
                    token: token,
                    html: `
                                            New contact form filled out from ${fromName}.
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
            className=""
          >
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="name" className="formlabel">
                  Name <span className="forminator-required">*</span>
                </label>
                <input
                  {...register('name', { required: true })}
                  aria-invalid={errors.name ? 'true' : 'false'}
                  placeholder=""
                  name="name"
                  className="contact-input"
                  value={fromName}
                  onChange={(e) => setFromName(e.target.value)}
                />
                {errors.name?.type === 'required' && (
                  <p
                    role="alert"
                    className=""
                  >
                    A name is required
                  </p>
                )}
              </div>
              <div className="col-md-6">
                <label htmlFor="email"  className="formlabel">
                  Email <span className="forminator-required">*</span>
                </label>
                <input
                  {...register('email', {
                    required: true,
                    pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                  })}
                  aria-invalid={errors.email ? 'true' : 'false'}
                  placeholder=""
                  name="email"
                  className="contact-input"
                  value={fromEmail}
                  onChange={(e) => setFromEmail(e.target.value)}
                />
                <br />
                {errors.email?.type === 'required' && (
                  <p
                    role="alert"
                    className=""
                  >
                    A email address is required
                  </p>
                )}
                {errors.email?.type === 'pattern' && (
                  <p
                    role="alert"
                    className=""
                  >
                    A valid email address is required
                  </p>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">

                <label htmlFor="message" className="formlabel formlabel-nonbold">
                  Question or comment: <span className="forminator-required">*</span>
                </label>
                <textarea
                  {...register('message', { required: true })}
                  aria-invalid={errors.message ? 'true' : 'false'}
                  placeholder=""
                  cols={60} rows={5}
                  name="message"
                  className="contact-input"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                {errors.message?.type === 'required' && (
                  <p
                    role="alert"
                    className="text-white text-center font-bold mb-6 bg-rose-600"
                  >
                    A message is required
                  </p>
                )}
              </div>
            </div>
            <br />
            <br />
            <input
              type="submit"
              className="contact-submit-button"
              style={{ cursor: 'pointer' }}
              value={status}
            />

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

      </section>
    </>

  );
}
