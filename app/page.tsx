'use client';

import { useState } from 'react';
import Image from 'next/image';
import { TypingAnimation } from '@/components/TypingAnimation';
import { JoinFormModal } from '@/components/JoinFormModal';
import { useLanguage } from '@/providers/LanguageProvider';
import { Star, MapPin, Clock, Phone } from 'lucide-react';

const translations = {
  en: {
    heroSubtitle: 'Transform your body and mind at our state-of-the-art facility in Ruyenzi, Gihara',
    joinNow: 'Join Now',
    stats: {
      members: 'Active Members',
      classes: 'Weekly Classes',
      trainers: 'Expert Trainers',
    },
    services: {
      title: 'Our Programs',
      cardio: 'Cardio Strength',
      cardioDesc: 'High-intensity cardio workouts to build endurance and strength.',
      fatloss: 'Fat Loss',
      fatlossDesc: 'Customized programs designed to help you reach your weight goals.',
      muscle: 'Muscle Gain',
      muscleDesc: 'Progressive training focused on building lean muscle mass.',
      aerobics: 'Aerobics Classes',
      aerobicsDesc: 'Fun, energetic aerobics sessions for all fitness levels.',
    },
    help: {
      title: 'How We Can Help You',
      point1: 'Professional guidance from certified trainers',
      point2: 'State-of-the-art equipment and facilities',
      point3: 'Personalized workout plans tailored to your goals',
      point4: 'Supportive community and group classes',
    },
    pricing: {
      title: 'Our Membership Plans',
      fit: 'Fit Plan',
      fitPrice: '₨5,000',
      fitFeatures: 'Gym access, Basic classes',
      fitPlus: 'Fit Plus',
      fitPlusPrice: '₨7,500',
      fitPlusFeatures: 'All Fit features + Personal trainer consultation',
      elite: 'Elite',
      elitePrice: '₨12,000',
      eliteFeatures: 'All features + Priority support + Nutrition plan',
      selectPlan: 'Select Plan',
    },
    testimonials: {
      title: 'Member Testimonials',
      grace: 'Grace',
      graceTesti: 'The Fitness Arena has completely transformed my fitness journey. Amazing trainers!',
      jean: 'Jean',
      jeanTesti: 'Best gym in Gihara! Professional staff and fantastic equipment.',
      marie: 'Marie',
      marieTesti: 'I have never felt healthier. The aerobics classes are incredible!',
    },
    contact: {
      title: 'Contact Information',
      location: 'Ruyenzi, Gihara near Facebook Bar',
      phone: '+250 795 160 921',
      hours: 'Mon - Fri: 6 AM - 10 PM',
    },
  },
  fr: {
    heroSubtitle: 'Transformez votre corps et votre esprit dans notre établissement de pointe à Ruyenzi, Gihara',
    joinNow: 'Rejoignez-Nous',
    stats: {
      members: 'Membres Actifs',
      classes: 'Cours par Semaine',
      trainers: 'Entraîneurs Experts',
    },
    services: {
      title: 'Nos Programmes',
      cardio: 'Cardio Renforcement',
      cardioDesc: 'Entraînements cardio intensifs pour renforcer votre endurance.',
      fatloss: 'Perte de Poids',
      fatlossDesc: 'Programmes personnalisés pour atteindre vos objectifs.',
      muscle: 'Développement Musculaire',
      muscleDesc: 'Entraînement progressif pour développer la masse musculaire.',
      aerobics: 'Cours d\'Aérobic',
      aerobicsDesc: 'Séances d\'aérobic amusantes pour tous les niveaux.',
    },
    help: {
      title: 'Comment Nous Pouvons Vous Aider',
      point1: 'Orientation professionnelle d\'entraîneurs certifiés',
      point2: 'Équipements et installations modernes',
      point3: 'Plans d\'entraînement personnalisés',
      point4: 'Communauté solidaire et cours collectifs',
    },
    pricing: {
      title: 'Nos Plans d\'Adhésion',
      fit: 'Plan Fit',
      fitPrice: '₨5,000',
      fitFeatures: 'Accès au gym, cours de base',
      fitPlus: 'Fit Plus',
      fitPlusPrice: '₨7,500',
      fitPlusFeatures: 'Toutes les fonctionnalités Fit + Consultation d\'entraîneur personnel',
      elite: 'Elite',
      elitePrice: '₨12,000',
      eliteFeatures: 'Toutes les fonctionnalités + Support prioritaire + Plan nutritionnel',
      selectPlan: 'Choisir le Plan',
    },
    testimonials: {
      title: 'Témoignages des Membres',
      grace: 'Grace',
      graceTesti: 'The Fitness Arena a complètement transformé mon parcours fitness. Entraîneurs incroyables!',
      jean: 'Jean',
      jeanTesti: 'Meilleur gym à Gihara! Personnel professionnel et équipements fantastiques.',
      marie: 'Marie',
      marieTesti: 'Je ne me suis jamais sentie aussi en forme. Les cours d\'aérobic sont incroyables!',
    },
    contact: {
      title: 'Informations de Contact',
      location: 'Ruyenzi, Gihara près du Bar Facebook',
      phone: '+250 795 160 921',
      hours: 'Lun - Ven: 6 AM - 10 PM',
    },
  },
};

export default function Home() {
  const [joinModalOpen, setJoinModalOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center pt-20"
        style={{
          backgroundImage: 'url(/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="max-w-2xl">
            <TypingAnimation text="THE FITNESS ARENA GYM" />
            <p className="text-gray-200 text-lg md:text-xl max-w-lg mt-6 mb-8">
              {t.heroSubtitle}
            </p>
            <button 
              onClick={() => setJoinModalOpen(true)}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 text-lg transition transform hover:scale-105"
            >
              {t.joinNow}
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-4 md:gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-red-600">250+</div>
              <p className="text-gray-300 mt-2">{t.stats.members}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-red-600">12</div>
              <p className="text-gray-300 mt-2">{t.stats.classes}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-red-600">8</div>
              <p className="text-gray-300 mt-2">{t.stats.trainers}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">{t.services.title}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg border-l-4 border-red-600">
              <h3 className="text-2xl font-bold mb-3">{t.services.cardio}</h3>
              <p className="text-gray-400">{t.services.cardioDesc}</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border-l-4 border-red-600">
              <h3 className="text-2xl font-bold mb-3">{t.services.fatloss}</h3>
              <p className="text-gray-400">{t.services.fatlossDesc}</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border-l-4 border-red-600">
              <h3 className="text-2xl font-bold mb-3">{t.services.muscle}</h3>
              <p className="text-gray-400">{t.services.muscleDesc}</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border-l-4 border-red-600">
              <h3 className="text-2xl font-bold mb-3">{t.services.aerobics}</h3>
              <p className="text-gray-400">{t.services.aerobicsDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="bg-gray-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">{t.help.title}</h2>
              <ul className="space-y-4">
                {[t.help.point1, t.help.point2, t.help.point3, t.help.point4].map((point, i) => (
                  <li key={i} className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-red-600 rounded-full flex-shrink-0 mt-1"></div>
                    <span className="text-gray-200">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-96 md:h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80"
                alt="Aerobics class with women"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">{t.pricing.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: t.pricing.fit, price: t.pricing.fitPrice, features: t.pricing.fitFeatures },
              { name: t.pricing.fitPlus, price: t.pricing.fitPlusPrice, features: t.pricing.fitPlusFeatures, highlighted: true },
              { name: t.pricing.elite, price: t.pricing.elitePrice, features: t.pricing.eliteFeatures },
            ].map((plan, i) => (
              <div
                key={i}
                className={`p-8 rounded-lg border transition transform hover:scale-105 ${
                  plan.highlighted
                    ? 'border-red-600 bg-red-600/10 relative'
                    : 'border-gray-800 bg-gray-900'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                    {language === 'en' ? 'Most Popular' : 'Plus Populaire'}
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-4xl font-bold text-red-600 mb-4">{plan.price}</p>
                <p className="text-gray-400 mb-6">{plan.features}</p>
                <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded transition">
                  {t.pricing.selectPlan}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">{t.testimonials.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: t.testimonials.grace, text: t.testimonials.graceTesti },
              { name: t.testimonials.jean, text: t.testimonials.jeanTesti },
              { name: t.testimonials.marie, text: t.testimonials.marieTesti },
            ].map((testi, i) => (
              <div key={i} className="bg-black p-8 rounded-lg border border-gray-800">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} className="fill-red-600 text-red-600" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">{testi.text}</p>
                <p className="font-bold text-red-600">— {testi.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">{t.contact.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4">
              <MapPin size={32} className="flex-shrink-0" />
              <div>
                <p className="font-bold mb-1">{language === 'en' ? 'Location' : 'Localisation'}</p>
                <p>{t.contact.location}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Phone size={32} className="flex-shrink-0" />
              <div>
                <p className="font-bold mb-1">{language === 'en' ? 'Phone' : 'Téléphone'}</p>
                <p>{t.contact.phone}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Clock size={32} className="flex-shrink-0" />
              <div>
                <p className="font-bold mb-1">{language === 'en' ? 'Hours' : 'Heures'}</p>
                <p>{t.contact.hours}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          <p>&copy; 2024 The Fitness Arena Gym. {language === 'en' ? 'All rights reserved.' : 'Tous droits réservés.'}</p>
        </div>
      </footer>

      {/* Join Modal */}
      <JoinFormModal isOpen={joinModalOpen} onClose={() => setJoinModalOpen(false)} language={language} />
    </div>
  );
}
