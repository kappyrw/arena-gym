'use client';

import { useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useLanguage } from '@/providers/LanguageProvider';
import { Footer } from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';

const translations = {
  en: {
    title: 'Complete Your Enrollment',
    subtitle: 'Fill in your details to activate your membership',
    selectedPlan: 'Selected Plan',
    fullName: 'Full Name',
    email: 'Email Address',
    phone: 'Phone Number',
    age: 'Age',
    gender: 'Gender',
    address: 'Address',
    startDate: 'Start Date',
    notes: 'Additional Notes',
    male: 'Male',
    female: 'Female',
    other: 'Other',
    approvePlan: 'Approve & Proceed to WhatsApp',
    back: 'Back to Membership',
    required: 'This field is required',
    placeholders: {
      fullName: 'John Doe',
      email: 'john@example.com',
      phone: '+250781718040',
      address: 'City, Country',
      notes: 'Any additional information...',
    },
  },
  fr: {
    title: 'Complétez Votre Inscription',
    subtitle: 'Remplissez vos détails pour activer votre adhésion',
    selectedPlan: 'Plan Sélectionné',
    fullName: 'Nom Complet',
    email: 'Adresse Email',
    phone: 'Numéro de Téléphone',
    age: 'Âge',
    gender: 'Genre',
    address: 'Adresse',
    startDate: 'Date de Début',
    notes: 'Notes Supplémentaires',
    male: 'Homme',
    female: 'Femme',
    other: 'Autre',
    approvePlan: 'Approuver et Aller à WhatsApp',
    back: 'Retour à Adhésion',
    required: 'Ce champ est obligatoire',
    placeholders: {
      fullName: 'Jean Dupont',
      email: 'jean@exemple.com',
      phone: '+250781718040',
      address: 'Ville, Pays',
      notes: 'Toute information supplémentaire...',
    },
  },
};

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  age: string;
  gender: string;
  address: string;
  startDate: string;
  notes: string;
}

export default function EnrollmentForm() {
  const { language } = useLanguage();
  const router = useRouter();
  const searchParams = useSearchParams();
  const t = translations[language];
  const plan = searchParams?.get('plan') || 'Membership Plan';

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    age: '',
    gender: '',
    address: '',
    startDate: '',
    notes: '',
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData])
      setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.fullName.trim()) newErrors.fullName = t.required;
    if (!formData.email.trim()) newErrors.email = t.required;
    if (!formData.phone.trim()) newErrors.phone = t.required;
    if (!formData.age.trim()) newErrors.age = t.required;
    if (!formData.gender) newErrors.gender = t.required;
    if (!formData.address.trim()) newErrors.address = t.required;
    if (!formData.startDate) newErrors.startDate = t.required;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const message = `Hello! I would like to enroll in the ${plan} membership plan.\n\nMy Details:\nName: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nAge: ${formData.age}\nGender: ${formData.gender}\nAddress: ${formData.address}\nStart Date: ${formData.startDate}\nNotes: ${formData.notes || 'N/A'}\n\nPlease confirm my enrollment.`;

    if (typeof window !== 'undefined') {
      window.open(
        `https://wa.me/250781718040?text=${encodeURIComponent(message)}`,
        '_blank'
      );
    }
  };

  const handleBack = () => router.push('/membership');

  return (
    <div className="bg-black text-white min-h-screen pt-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition mb-8"
        >
          <ArrowLeft size={20} /> {t.back}
        </button>

        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{t.title}</h1>
          <p className="text-gray-400 text-lg">{t.subtitle}</p>
        </div>

        <div className="bg-gray-900 border border-red-600 rounded-lg p-6 mb-8">
          <p className="text-gray-400 mb-2">{t.selectedPlan}</p>
          <p className="text-2xl font-bold text-red-600">{plan}</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-gray-900 rounded-lg p-8 border border-gray-800"
        >
          {/* Full Name */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              {t.fullName}
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder={t.placeholders.fullName}
              className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-600 transition ${
                errors.fullName ? 'border-red-600' : 'border-gray-700'
              }`}
            />
            {errors.fullName && (
              <p className="text-red-600 text-sm mt-1">{errors.fullName}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              {t.email}
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t.placeholders.email}
              className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-600 transition ${
                errors.email ? 'border-red-600' : 'border-gray-700'
              }`}
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              {t.phone}
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder={t.placeholders.phone}
              className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-600 transition ${
                errors.phone ? 'border-red-600' : 'border-gray-700'
              }`}
            />
            {errors.phone && (
              <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Age and Gender */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold mb-2">
                {t.age}
              </label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="25"
                className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-600 transition ${
                  errors.age ? 'border-red-600' : 'border-gray-700'
                }`}
              />
              {errors.age && (
                <p className="text-red-600 text-sm mt-1">{errors.age}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">
                {t.gender}
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white focus:outline-none focus:border-red-600 transition ${
                  errors.gender ? 'border-red-600' : 'border-gray-700'
                }`}
              >
                <option value="">Select Gender</option>
                <option value="male">{t.male}</option>
                <option value="female">{t.female}</option>
                <option value="other">{t.other}</option>
              </select>
              {errors.gender && (
                <p className="text-red-600 text-sm mt-1">{errors.gender}</p>
              )}
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              {t.address}
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder={t.placeholders.address}
              className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-600 transition ${
                errors.address ? 'border-red-600' : 'border-gray-700'
              }`}
            />
            {errors.address && (
              <p className="text-red-600 text-sm mt-1">{errors.address}</p>
            )}
          </div>

          {/* Start Date */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              {t.startDate}
            </label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white focus:outline-none focus:border-red-600 transition ${
                errors.startDate ? 'border-red-600' : 'border-gray-700'
              }`}
            />
            {errors.startDate && (
              <p className="text-red-600 text-sm mt-1">{errors.startDate}</p>
            )}
          </div>

          {/* Notes */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              {t.notes}
            </label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder={t.placeholders.notes}
              rows={4}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-600 transition"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition mt-8"
          >
            {t.approvePlan}
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
}
