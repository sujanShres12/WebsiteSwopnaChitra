'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Send, Clock, Globe } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for reaching out! Our team will get back to you shortly.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="contact-page pt-5">
      <section className="bg-midnight pt-5 mt-5">
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="display-3 fw-bold mb-3">Get In Touch</h1>
            <p className="lead text-white-50 mx-auto" style={{ maxWidth: '800px' }}>
              Have a project in mind? Let&apos;s discuss how we can bring your creative vision to life.
            </p>
            <div className="mx-auto bg-gold mt-4" style={{ height: '3px', width: '100px' }}></div>
          </div>

          <div className="row g-5 mt-4">
            {/* Contact Info */}
            <div className="col-lg-5">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="card h-100 p-4 p-lg-5 border-0 bg-dark bg-opacity-25"
              >
                <h2 className="h3 text-gold mb-5">Contact Information</h2>
                
                <div className="d-flex align-items-start gap-4 mb-5">
                  <div className="bg-gold p-3 rounded-circle text-midnight d-flex align-items-center justify-content-center" style={{ width: '56px', height: '56px' }}>
                    <MapPin size={24} color="#0A1128" />
                  </div>
                  <div>
                    <h3 className="h5 mb-1">Our Studio</h3>
                    <p className="text-white-50 mb-0">123 Cinematic Plaza, Film City Road, Mumbai, India - 400063</p>
                  </div>
                </div>

                <div className="d-flex align-items-start gap-4 mb-5">
                  <div className="bg-gold p-3 rounded-circle text-midnight d-flex align-items-center justify-content-center" style={{ width: '56px', height: '56px' }}>
                    <Phone size={24} color="#0A1128" />
                  </div>
                  <div>
                    <h3 className="h5 mb-1">Call Us</h3>
                    <p className="text-white-50 mb-0">+91 98765 43210</p>
                    <p className="text-white-50 mb-0">+91 12345 67890</p>
                  </div>
                </div>

                <div className="d-flex align-items-start gap-4 mb-5">
                  <div className="bg-gold p-3 rounded-circle text-midnight d-flex align-items-center justify-content-center" style={{ width: '56px', height: '56px' }}>
                    <Mail size={24} color="#0A1128" />
                  </div>
                  <div>
                    <h3 className="h5 mb-1">Email Us</h3>
                    <p className="text-white-50 mb-0">hello@swopnachitra.com</p>
                    <p className="text-white-50 mb-0">projects@swopnachitra.com</p>
                  </div>
                </div>

                <div className="d-flex align-items-start gap-4">
                  <div className="bg-gold p-3 rounded-circle text-midnight d-flex align-items-center justify-content-center" style={{ width: '56px', height: '56px' }}>
                    <Clock size={24} color="#0A1128" />
                  </div>
                  <div>
                    <h3 className="h5 mb-1">Business Hours</h3>
                    <p className="text-white-50 mb-0">Mon - Sat: 10:00 AM - 7:00 PM</p>
                    <p className="text-white-50 mb-0">Sunday: Closed</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-7">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="card h-100 p-4 p-lg-5 border-0 bg-dark bg-opacity-25"
              >
                <h2 className="h3 text-gold mb-5">Send Us a Message</h2>
                <form onSubmit={handleSubmit}>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="form-group mb-4">
                        <label className="form-label text-white-50 small fw-bold text-uppercase mb-2">Your Name</label>
                        <input 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="form-control bg-transparent border-gold text-white p-3" 
                          placeholder="John Doe" 
                          required 
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group mb-4">
                        <label className="form-label text-white-50 small fw-bold text-uppercase mb-2">Your Email</label>
                        <input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="form-control bg-transparent border-gold text-white p-3" 
                          placeholder="john@example.com" 
                          required 
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group mb-4">
                        <label className="form-label text-white-50 small fw-bold text-uppercase mb-2">Subject</label>
                        <input 
                          type="text" 
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="form-control bg-transparent border-gold text-white p-3" 
                          placeholder="Project Inquiry" 
                          required 
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group mb-5">
                        <label className="form-label text-white-50 small fw-bold text-uppercase mb-2">Your Message</label>
                        <textarea 
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          className="form-control bg-transparent border-gold text-white p-3" 
                          rows={5} 
                          placeholder="Tell us about your project..." 
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-gold btn-lg w-100 py-3 d-flex align-items-center justify-content-center gap-2">
                        Send Message <Send size={20} />
                      </button>
                    </div>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-midnight py-5">
        <div className="container">
          <div className="rounded-4 overflow-hidden border border-gold border-opacity-25" style={{ height: '400px' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.123456789012!2d72.85!3d19.16!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA5JzM2LjAiTiA3MsKwNTEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <style jsx>{`
        .form-control:focus {
          background-color: rgba(255, 215, 0, 0.05) !important;
          border-color: var(--gold) !important;
          box-shadow: 0 0 0 0.25rem rgba(255, 215, 0, 0.25);
          color: white !important;
        }
        .form-control::placeholder {
          color: rgba(255, 255, 255, 0.3);
        }
        .text-midnight {
          color: #0A1128;
        }
      `}</style>
    </div>
  );
}
