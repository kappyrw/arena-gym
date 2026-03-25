'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

interface JoinFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: 'en' | 'fr';
}

const translations = {
  en: {
    title: 'Join The Fitness Arena Gym',
    name: 'Full Name',
    email: 'Email Address',
    phone: 'Phone Number',
    submit: 'Join via WhatsApp',
    namePlaceholder: 'Enter your full name',
    emailPlaceholder: 'your@email.com',
    phonePlaceholder: '+250 XXX XXX XXX',
  },
  fr: {
    title: 'Rejoignez The Fitness Arena Gym',
    name: 'Nom Complet',
    email: 'Adresse Email',
    phone: 'Numéro de Téléphone',
    submit: 'Rejoindre via WhatsApp',
    namePlaceholder: 'Entrez votre nom complet',
    emailPlaceholder: 'votre@email.com',
    phonePlaceholder: '+250 XXX XXX XXX',
  },
};

export function JoinFormModal({ isOpen, onClose, language }: JoinFormModalProps) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [loading, setLoading] = useState(false);
  const t = translations[language];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!formData.name || !formData.email || !formData.phone) {
      alert('Please fill in all fields');
      setLoading(false);
      return;
    }

    // Create WhatsApp message
    const message = encodeURIComponent(
      `Hello! I would like to join The Fitness Arena Gym.\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}`
    );
    
    // Redirect to WhatsApp
    window.location.href = `https://wa.me/250795160921?text=${message}`;
    
    setTimeout(() => {
      setLoading(false);
      onClose();
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-lg max-w-md w-full p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold text-white mb-6">{t.title}</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">
              {t.name}
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t.namePlaceholder}
              className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-red-600"
            />
          </div>

          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">
              {t.email}
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t.emailPlaceholder}
              className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-red-600"
            />
          </div>

          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">
              {t.phone}
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder={t.phonePlaceholder}
              className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-red-600"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-800 text-white font-bold py-3 rounded transition"
          >
            {loading ? 'Connecting...' : t.submit}
          </button>
        </form>
      </div>
    </div>
  );
}
