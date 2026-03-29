'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

interface SelectPlanModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: 'en' | 'fr';
  planName: string;
  planPrice: string;
  planPriceLabel: string;
  planFeatures: string;
}

const translations = {
  en: {
    title: 'Join Selected Plan',
    name: 'Full Name',
    email: 'Email Address',
    phone: 'Phone Number',
    namePlaceholder: 'Enter your full name',
    emailPlaceholder: 'your@email.com',
    phonePlaceholder: '+250 XXX XXX XXX',
    planDetails: 'Plan Details',
    joinViaWhatsapp: 'Join via WhatsApp',
    selectPlan: 'Select Plan',
  },
  fr: {
    title: 'Rejoindre le Plan Sélectionné',
    name: 'Nom Complet',
    email: 'Adresse Email',
    phone: 'Numéro de Téléphone',
    namePlaceholder: 'Entrez votre nom complet',
    emailPlaceholder: 'votre@email.com',
    phonePlaceholder: '+250 XXX XXX XXX',
    planDetails: 'Détails du Plan',
    joinViaWhatsapp: 'Rejoindre via WhatsApp',
    selectPlan: 'Choisir le Plan',
  },
};

export function SelectPlanModal({
  isOpen,
  onClose,
  language,
  planName,
  planPrice,
  planPriceLabel,
  planFeatures,
}: SelectPlanModalProps) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [loading, setLoading] = useState(false);
  const t = translations[language];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!formData.name || !formData.email || !formData.phone) {
      alert(language === 'en' ? 'Please fill in all fields' : 'Veuillez remplir tous les champs');
      setLoading(false);
      return;
    }

    const message = encodeURIComponent(
      `Hello! I would like to join The Fitness Arena Gym.\n\n` +
      `${language === 'en' ? 'Plan' : 'Plan'}: ${planName}\n` +
      `${language === 'en' ? 'Price' : 'Prix'}: ${planPrice}${planPriceLabel}\n` +
      `${language === 'en' ? 'Features' : 'Fonctionnalités'}: ${planFeatures}\n\n` +
      `${language === 'en' ? 'Name' : 'Nom'}: ${formData.name}\n` +
      `${language === 'en' ? 'Email' : 'Email'}: ${formData.email}\n` +
      `${language === 'en' ? 'Phone' : 'Téléphone'}: ${formData.phone}\n\n` +
      `${language === 'en' ? 'Location' : 'Localisation'}: Ruyenzi, Gihara near Facebook Bar`
    );

    window.location.href = `https://wa.me/250795160921?text=${message}`;

    setTimeout(() => {
      setLoading(false);
      onClose();
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-lg max-w-md w-full p-6 border border-gray-800">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">{t.title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition"
          >
            <X size={24} />
          </button>
        </div>

        <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 mb-6">
          <h3 className="text-red-600 font-bold text-lg mb-2">{t.planDetails}</h3>
          <p className="text-white text-xl font-bold mb-2">{planName}</p>
          <p className="text-red-500 font-bold text-2xl mb-3">
            {planPrice}<span className="text-sm text-gray-300">{planPriceLabel}</span>
          </p>
          <p className="text-gray-300 text-sm">{planFeatures}</p>
        </div>

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
            {loading ? 'Connecting...' : t.joinViaWhatsapp}
          </button>
        </form>
      </div>
    </div>
  );
}
