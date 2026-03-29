'use client';

import { useLanguage } from '@/providers/LanguageProvider';
import { Footer } from '@/components/Footer';
import { CheckCircle, X } from 'lucide-react';

const translations = {
  en: {
    title: 'Membership Plans',
    subtitle: 'Choose the perfect plan for your fitness journey',
    month: '/month',
    included: 'Included:',
    notIncluded: 'Not Included:',
    selectPlan: 'Select This Plan',
    comparison: 'Plan Comparison',
    gymAccess: 'Gym Access',
    basicClasses: 'Basic Classes',
    unlimitedClasses: 'Unlimited Classes',
    trainerConsult: 'Personal Trainer Consultation',
    nutritionPlan: 'Nutrition Plan',
    prioritySupport: 'Priority Support',
    fitPlan: {
      name: 'Fit Plan',
      price: '₨1,000',
      desc: 'Daily Access',
    },
    fitPlus: {
      name: 'Fit Plus',
      price: '₨20,000',
      desc: 'Most Popular',
      highlight: true,
    },
    elite: {
      name: 'Elite',
      price: '₨28,000',
      desc: 'Complete Package',
    },
  },
  fr: {
    title: 'Plans d\'Adhésion',
    subtitle: 'Choisissez le plan parfait pour votre parcours de fitness',
    month: '/mois',
    included: 'Inclus:',
    notIncluded: 'Non Inclus:',
    selectPlan: 'Choisir Ce Plan',
    comparison: 'Comparaison des Plans',
    gymAccess: 'Accès au Gym',
    basicClasses: 'Cours de Base',
    unlimitedClasses: 'Cours Illimités',
    trainerConsult: 'Consultation Entraîneur Personnel',
    nutritionPlan: 'Plan Nutritionnel',
    prioritySupport: 'Support Prioritaire',
    fitPlan: {
      name: 'Plan Fit',
      price: '₨1,000',
      desc: 'Accès Quotidien',
    },
    fitPlus: {
      name: 'Fit Plus',
      price: '₨20,000',
      desc: 'Le Plus Populaire',
      highlight: true,
    },
    elite: {
      name: 'Elite',
      price: '₨28,000',
      desc: 'Package Complet',
    },
  },
};

export default function Membership() {
  const { language } = useLanguage();
  const t = translations[language];

  const plans = [
    {
      name: t.fitPlan.name,
      price: t.fitPlan.price,
      desc: t.fitPlan.desc,
      highlight: false,
      features: [
        { text: t.gymAccess, included: true },
        { text: t.basicClasses, included: true },
        { text: t.unlimitedClasses, included: false },
        { text: t.trainerConsult, included: false },
        { text: t.nutritionPlan, included: false },
        { text: t.prioritySupport, included: false },
      ],
    },
    {
      name: t.fitPlus.name,
      price: t.fitPlus.price,
      desc: t.fitPlus.desc,
      highlight: true,
      features: [
        { text: t.gymAccess, included: true },
        { text: t.basicClasses, included: true },
        { text: t.unlimitedClasses, included: true },
        { text: t.trainerConsult, included: true },
        { text: t.nutritionPlan, included: false },
        { text: t.prioritySupport, included: false },
      ],
    },
    {
      name: t.elite.name,
      price: t.elite.price,
      desc: t.elite.desc,
      highlight: false,
      features: [
        { text: t.gymAccess, included: true },
        { text: t.basicClasses, included: true },
        { text: t.unlimitedClasses, included: true },
        { text: t.trainerConsult, included: true },
        { text: t.nutritionPlan, included: true },
        { text: t.prioritySupport, included: true },
      ],
    },
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="bg-gray-900 py-16 md:py-24 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h1>
          <p className="text-xl text-gray-300">{t.subtitle}</p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`rounded-lg p-8 transition transform hover:scale-105 ${
                  plan.highlight
                    ? 'border-2 border-red-600 bg-red-600/10 relative'
                    : 'border border-gray-800 bg-gray-900'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                    {language === 'en' ? 'Most Popular' : 'Le Plus Populaire'}
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-6">{plan.desc}</p>

                <div className="mb-8">
                  <span className="text-5xl font-bold text-red-600">{plan.price}</span>
                  <span className="text-gray-400">
                    {plan.name === t.fitPlan.name ? '/day' : (plan.name === t.fitPlus.name || plan.name === t.elite.name ? '/month' : '')}
                    {language === 'fr' && plan.name === t.fitPlan.name && '/jour'}
                    {language === 'fr' && (plan.name === t.fitPlus.name || plan.name === t.elite.name) && '/mois'}
                  </span>
                </div>

                <div className="space-y-4 mb-8 pb-8 border-b border-gray-700">
                  {plan.features.map((feature, j) => (
                    <div key={j} className="flex items-start space-x-3">
                      {feature.included ? (
                        <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                      ) : (
                        <X size={20} className="text-gray-600 flex-shrink-0 mt-0.5" />
                      )}
                      <span className={feature.included ? 'text-white' : 'text-gray-500'}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  className={`w-full font-bold py-3 rounded-lg transition ${
                    plan.highlight
                      ? 'bg-red-600 hover:bg-red-700 text-white'
                      : 'border border-gray-700 hover:border-red-600 text-white'
                  }`}
                >
                  {t.selectPlan}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-gray-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{t.comparison}</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-4 px-6 font-bold">Features</th>
                  <th className="text-center py-4 px-6 font-bold">Fit Plan</th>
                  <th className="text-center py-4 px-6 font-bold text-red-600">Fit Plus</th>
                  <th className="text-center py-4 px-6 font-bold">Elite</th>
                </tr>
              </thead>
              <tbody>
                {plans[0].features.map((feature, i) => (
                  <tr key={i} className="border-b border-gray-800">
                    <td className="py-4 px-6 text-gray-300">{feature.text}</td>
                    <td className="py-4 px-6 text-center">
                      {plans[0].features[i].included ? (
                        <CheckCircle size={20} className="text-green-500 mx-auto" />
                      ) : (
                        <X size={20} className="text-gray-600 mx-auto" />
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {plans[1].features[i].included ? (
                        <CheckCircle size={20} className="text-green-500 mx-auto" />
                      ) : (
                        <X size={20} className="text-gray-600 mx-auto" />
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {plans[2].features[i].included ? (
                        <CheckCircle size={20} className="text-green-500 mx-auto" />
                      ) : (
                        <X size={20} className="text-gray-600 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-600 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === 'en' ? 'Ready to Join?' : 'Prêt à Rejoindre?'}
          </h2>
          <p className="text-lg text-white/90 mb-8">
            {language === 'en'
              ? 'Select your plan and start your fitness transformation today!'
              : 'Sélectionnez votre plan et commencez votre transformation fitness dès aujourd\'hui!'}
          </p>
          <button className="bg-white hover:bg-gray-100 text-red-600 font-bold py-3 px-8 rounded-lg transition">
            {language === 'en' ? 'Get Started' : 'Commencer'}
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
