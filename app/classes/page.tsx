'use client';

import { useLanguage } from '@/providers/LanguageProvider';
import { Clock, Users, Zap } from 'lucide-react';

const translations = {
  en: {
    title: 'Our Classes',
    subtitle: 'Find the perfect class for your fitness goals',
    aerobics: 'Aerobics',
    aerobicsDesc: 'High-energy cardio sessions designed to boost your cardiovascular health and build endurance. Perfect for all fitness levels with fun, energetic music.',
    aerobicsSchedule: 'Mon, Wed, Fri - 6:00 AM & 7:00 PM',
    strength: 'Strength Training',
    strengthDesc: 'Build lean muscle and increase your strength with our comprehensive programs. Expert guidance on proper form and progressive training techniques.',
    strengthSchedule: 'Tue, Thu, Sat - 6:30 AM & 6:30 PM',
    yoga: 'Yoga & Flexibility',
    yogaDesc: 'Improve flexibility, balance, and mental wellness through guided yoga sessions. Perfect for recovery and improving overall mobility.',
    yogaSchedule: 'Mon, Wed, Fri - 5:30 AM & 5:30 PM',
    weightLoss: 'Weight Loss Program',
    weightLossDesc: 'Personalized weight loss programs combining cardio, strength training, and nutrition guidance for sustainable results.',
    weightLossSchedule: 'Daily - Custom Schedule',
    instructor: 'Instructor Led',
    duration: 'Duration',
    capacity: 'Capacity',
    minutes: 'minutes',
    people: 'people',
    allLevels: 'All Fitness Levels',
  },
  fr: {
    title: 'Nos Cours',
    subtitle: 'Trouvez le cours parfait pour vos objectifs de fitness',
    aerobics: 'Aérobic',
    aerobicsDesc: 'Des séances cardio haute énergie conçues pour améliorer votre santé cardiovasculaire et augmenter votre endurance. Parfait pour tous les niveaux avec une musique amusante et énergique.',
    aerobicsSchedule: 'Lun, Mer, Ven - 6:00 AM & 7:00 PM',
    strength: 'Entraînement de Force',
    strengthDesc: 'Développez les muscles maigres et augmentez votre force avec nos programmes complets. Guidance experte sur la bonne forme et les techniques d\'entraînement progressif.',
    strengthSchedule: 'Mar, Jeu, Sam - 6:30 AM & 6:30 PM',
    yoga: 'Yoga et Flexibilité',
    yogaDesc: 'Améliorez la flexibilité, l\'équilibre et le bien-être mental grâce aux séances de yoga guidées. Parfait pour la récupération et l\'amélioration de la mobilité générale.',
    yogaSchedule: 'Lun, Mer, Ven - 5:30 AM & 5:30 PM',
    weightLoss: 'Programme de Perte de Poids',
    weightLossDesc: 'Programmes de perte de poids personnalisés combinant cardio, entraînement de force et conseils nutritionnels pour des résultats durables.',
    weightLossSchedule: 'Quotidien - Horaire Personnalisé',
    instructor: 'Dirigé par un Instructeur',
    duration: 'Durée',
    capacity: 'Capacité',
    minutes: 'minutes',
    people: 'personnes',
    allLevels: 'Tous les Niveaux de Fitness',
  },
};

export default function Classes() {
  const { language } = useLanguage();
  const t = translations[language];

  const classes = [
    {
      name: t.aerobics,
      desc: t.aerobicsDesc,
      schedule: t.aerobicsSchedule,
      duration: 60,
      capacity: 25,
      icon: '🏃‍♀️',
      color: 'from-orange-600 to-red-600',
    },
    {
      name: t.strength,
      desc: t.strengthDesc,
      schedule: t.strengthSchedule,
      duration: 75,
      capacity: 20,
      icon: '💪',
      color: 'from-red-600 to-pink-600',
    },
    {
      name: t.yoga,
      desc: t.yogaDesc,
      schedule: t.yogaSchedule,
      duration: 90,
      capacity: 30,
      icon: '🧘‍♀️',
      color: 'from-purple-600 to-blue-600',
    },
    {
      name: t.weightLoss,
      desc: t.weightLossDesc,
      schedule: t.weightLossSchedule,
      duration: 'Custom',
      capacity: 15,
      icon: '⚡',
      color: 'from-green-600 to-teal-600',
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

      {/* Classes Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {classes.map((classItem, i) => (
              <div
                key={i}
                className={`bg-gradient-to-br ${classItem.color} p-8 rounded-lg hover:shadow-2xl transition transform hover:scale-105`}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-5xl">{classItem.icon}</span>
                  <span className="text-white/80 text-sm font-bold">{t.allLevels}</span>
                </div>
                
                <h3 className="text-3xl font-bold mb-3 text-white">{classItem.name}</h3>
                <p className="text-white/90 mb-6">{classItem.desc}</p>

                <div className="space-y-3 mb-6 border-t border-white/20 pt-6">
                  <div className="flex items-center space-x-2">
                    <Clock size={18} />
                    <span className="text-sm">{t.duration}: {classItem.duration} {typeof classItem.duration === 'number' ? t.minutes : ''}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users size={18} />
                    <span className="text-sm">{t.capacity}: {classItem.capacity} {t.people}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Zap size={18} />
                    <span className="text-sm">{classItem.schedule}</span>
                  </div>
                </div>

                <button className="w-full bg-white text-gray-900 font-bold py-3 rounded-lg hover:bg-gray-100 transition">
                  {language === 'en' ? 'Enroll Now' : 'S\'inscrire Maintenant'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-600 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === 'en' ? 'Ready to Transform Your Body?' : 'Prêt à Transformer Votre Corps?'}
          </h2>
          <p className="text-lg text-white/90 mb-8">
            {language === 'en'
              ? 'Join our classes and start your fitness journey today!'
              : 'Rejoignez nos cours et commencez votre parcours de fitness dès aujourd\'hui!'}
          </p>
          <button className="bg-white hover:bg-gray-100 text-red-600 font-bold py-3 px-8 rounded-lg transition">
            {language === 'en' ? 'Join Now' : 'Rejoignez-Nous'}
          </button>
        </div>
      </section>
    </div>
  );
}
