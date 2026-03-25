'use client';

import { useState } from 'react';
import { useLanguage } from '@/providers/LanguageProvider';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const translations = {
  en: {
    title: 'Contact Us',
    subtitle: 'Get in Touch With The Fitness Arena Gym',
    getInTouch: 'Get In Touch',
    name: 'Your Name',
    email: 'Your Email',
    message: 'Your Message',
    send: 'Send Message',
    location: 'Location',
    locationAddr: 'Ruyenzi, Gihara near Facebook Bar',
    phone: 'Phone',
    phoneNum: '+250 795 160 921',
    hours: 'Hours',
    hoursTime: 'Mon - Fri: 6 AM - 10 PM',
    email2: 'Email',
    emailAddr: 'fitness.arena@gmail.com',
    follow: 'Follow Us',
    orJoin: 'Or Join Us on WhatsApp',
    whatsapp: 'Contact via WhatsApp',
    messageSent: 'Message sent successfully!',
  },
  fr: {
    title: 'Nous Contacter',
    subtitle: 'Entrez en Contact avec The Fitness Arena Gym',
    getInTouch: 'Entrez en Contact',
    name: 'Votre Nom',
    email: 'Votre Email',
    message: 'Votre Message',
    send: 'Envoyer',
    location: 'Localisation',
    locationAddr: 'Ruyenzi, Gihara près du Bar Facebook',
    phone: 'Téléphone',
    phoneNum: '+250 795 160 921',
    hours: 'Heures',
    hoursTime: 'Lun - Ven: 6 AM - 10 PM',
    email2: 'Email',
    emailAddr: 'fitness.arena@gmail.com',
    follow: 'Suivez-Nous',
    orJoin: 'Ou Rejoignez-Nous sur WhatsApp',
    whatsapp: 'Contacter via WhatsApp',
    messageSent: 'Message envoyé avec succès!',
  },
};

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language];
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="bg-gray-900 py-16 md:py-24 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h1>
          <p className="text-xl text-gray-300">{t.subtitle}</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">{t.getInTouch}</h2>
              {submitted && (
                <div className="bg-green-600 text-white p-4 rounded-lg mb-6">
                  {t.messageSent}
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">{t.name}</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-red-600 outline-none transition"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{t.email}</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-red-600 outline-none transition"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{t.message}</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-red-600 outline-none transition"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition"
                >
                  {t.send}
                </button>
              </form>

              <div className="mt-8 pt-8 border-t border-gray-800">
                <p className="text-gray-400 mb-4">{t.orJoin}</p>
                <a
                  href="https://wa.me/250795160921"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition"
                >
                  {t.whatsapp}
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Location */}
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <div className="flex items-start space-x-4">
                  <MapPin size={32} className="text-red-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">{t.location}</h3>
                    <p className="text-gray-400">{t.locationAddr}</p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <div className="flex items-start space-x-4">
                  <Phone size={32} className="text-red-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">{t.phone}</h3>
                    <a href="tel:+250795160921" className="text-gray-400 hover:text-red-600">
                      {t.phoneNum}
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <div className="flex items-start space-x-4">
                  <Clock size={32} className="text-red-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">{t.hours}</h3>
                    <p className="text-gray-400">{t.hoursTime}</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <div className="flex items-start space-x-4">
                  <Mail size={32} className="text-red-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">{t.email2}</h3>
                    <a href="mailto:fitness.arena@gmail.com" className="text-gray-400 hover:text-red-600">
                      {t.emailAddr}
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-red-600/10 border border-red-600 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">{t.follow}</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-red-600 rounded-full hover:bg-red-700 flex items-center justify-center">
                    f
                  </a>
                  <a href="#" className="w-10 h-10 bg-red-600 rounded-full hover:bg-red-700 flex items-center justify-center">
                    t
                  </a>
                  <a href="#" className="w-10 h-10 bg-red-600 rounded-full hover:bg-red-700 flex items-center justify-center">
                    i
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="bg-gray-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {language === 'en' ? 'Find Us Here' : 'Trouvez-Nous Ici'}
          </h2>
          <div className="h-96 bg-gray-800 rounded-lg flex items-center justify-center text-gray-500">
            {language === 'en' ? 'Map coming soon' : 'Carte à venir'}
          </div>
        </div>
      </section>
    </div>
  );
}
