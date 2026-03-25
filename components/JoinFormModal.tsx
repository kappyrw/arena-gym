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
    membership: 'Membership Type',
    submit: 'Join via WhatsApp',
    namePlaceholder: 'Enter your full name',
    emailPlaceholder: 'your@email.com',
    phonePlaceholder: '+250 XXX XXX XXX',
    daily: 'Daily Pass (₨1,000/day)',
    monthly: 'Monthly Membership (₨20,000/month)',
    monthlyWithTrainer: 'Monthly + Personal Trainer (₨28,000/month)',
    pricing: 'Pricing Information',
    priceDaily: '₨1,000',
    priceMonthly: '₨20,000',
    priceTrainer: '₨28,000',
  },
  fr: {
    title: 'Rejoignez The Fitness Arena Gym',
    name: 'Nom Complet',
    email: 'Adresse Email',
    phone: 'Numéro de Téléphone',
    membership: 'Type d\'Adhésion',
    submit: 'Rejoindre via WhatsApp',
    namePlaceholder: 'Entrez votre nom complet',
    emailPlaceholder: 'votre@email.com',
    phonePlaceholder: '+250 XXX XXX XXX',
    daily: 'Accès Journalier (₨1,000/jour)',
    monthly: 'Adhésion Mensuelle (₨20,000/mois)',
    monthlyWithTrainer: 'Mensuel + Entraîneur Personnel (₨28,000/mois)',
    pricing: 'Informations de Tarification',
    priceDaily: '₨1,000',
    priceMonthly: '₨20,000',
    priceTrainer: '₨28,000',
  },
};

export function JoinFormModal({ isOpen, onClose, language }: JoinFormModalProps) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', membership: 'monthly' });
  const [loading, setLoading] = useState(false);
  const t = translations[language];

  const getMembershipPrice = (type: string) => {
    switch(type) {
      case 'daily': return { label: t.daily, price: t.priceDaily };
      case 'monthly': return { label: t.monthly, price: t.priceMonthly };
      case 'trainer': return { label: t.monthlyWithTrainer, price: t.priceTrainer };
      default: return { label: t.monthly, price: t.priceMonthly };
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!formData.name || !formData.email || !formData.phone) {
      alert(language === 'en' ? 'Please fill in all fields' : 'Veuillez remplir tous les champs');
      setLoading(false);
      return;
    }

    const membershipInfo = getMembershipPrice(formData.membership);
    
    // Create WhatsApp message with pricing info
    const message = encodeURIComponent(
      `Hello! I would like to join The Fitness Arena Gym.\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n\n` +
      `Membership Type: ${membershipInfo.label}\n` +
      `Price: ${membershipInfo.price}\n\n` +
      `Location: Ruyenzi, Gihara near Facebook Bar`
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

          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">
              {t.membership}
            </label>
            <select
              name="membership"
              value={formData.membership}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-2 text-white focus:outline-none focus:border-red-600"
            >
              <option value="daily">{t.daily}</option>
              <option value="monthly">{t.monthly}</option>
              <option value="trainer">{t.monthlyWithTrainer}</option>
            </select>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded px-4 py-3">
            <p className="text-gray-300 text-sm">{t.pricing}</p>
            <p className="text-red-500 font-bold text-lg mt-2">
              {getMembershipPrice(formData.membership).price}
            </p>
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
