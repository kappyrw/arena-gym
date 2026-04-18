'use client';

import Image from 'next/image';
import { useLanguage } from '@/providers/LanguageProvider';
import { Footer } from '@/components/Footer';
import { CheckCircle } from 'lucide-react';

const translations = {
  en: {
    title: 'About The Fitness Arena Gym',
    subtitle: 'Your Premier Fitness Destination in Ruyenzi, Gihara',
    intro: 'The Fitness Arena Gym is a state-of-the-art fitness facility dedicated to transforming lives and building a healthier community. Located near Facebook Bar in Ruyenzi, Gihara, we provide professional training, modern equipment, and a supportive environment for all fitness levels.',
    mission: 'Our Mission',
    missionDesc: 'To empower individuals to achieve their fitness goals through professional guidance, state-of-the-art equipment, and a welcoming community atmosphere.',
    values: 'Our Core Values',
    value1: 'Excellence - We maintain the highest standards in training and facilities',
    value2: 'Inclusion - Everyone is welcome, regardless of fitness level',
    value3: 'Support - Our team is committed to your success',
    value4: 'Innovation - We continually update our programs and equipment',
    team: 'Our Expert Team',
    teamDesc: 'Our certified trainers and fitness professionals bring years of experience and passion to help you achieve your goals.',
    coach1: 'Coach Alex',
    coach1Role: 'Strength Training Specialist',
    coach2: 'Coach Maria',
    coach2Role: 'Aerobics & Cardio Expert',
    coach3: 'Coach James',
    coach3Role: 'Personal Training Coach',
    facilities: 'World-Class Facilities',
    facilitiesDesc: 'We offer modern equipment, spacious workout areas, and comfortable amenities to enhance your fitness experience.',
  },
  fr: {
    title: 'À Propos de The Fitness Arena Gym',
    subtitle: 'Votre Destination Fitness de Premier Plan à Ruyenzi, Gihara',
    intro: 'The Fitness Arena Gym est un établissement de fitness ultramoderne dédié à transformer les vies et à construire une communauté plus saine. Situé près du Bar Facebook à Ruyenzi, Gihara, nous offrons une formation professionnelle, un équipement moderne et un environnement accueillant pour tous les niveaux de fitness.',
    mission: 'Notre Mission',
    missionDesc: 'Autonomiser les individus à atteindre leurs objectifs de fitness grâce à une orientation professionnelle, un équipement ultramoderne et une atmosphère communautaire accueillante.',
    values: 'Nos Valeurs Fondamentales',
    value1: 'Excellence - Nous maintenons les normes les plus élevées en matière de formation et d\'installations',
    value2: 'Inclusion - Tout le monde est bienvenu, quel que soit le niveau de fitness',
    value3: 'Soutien - Notre équipe est engagée à votre succès',
    value4: 'Innovation - Nous mettons continuellement à jour nos programmes et équipements',
    team: 'Notre Équipe Expert',
    teamDesc: 'Nos entraîneurs certifiés et professionnels du fitness apportent des années d\'expérience et de passion pour vous aider à atteindre vos objectifs.',
    coach1: 'Coach Alex',
    coach1Role: 'Spécialiste du Renforcement Musculaire',
    coach2: 'Coach Maria',
    coach2Role: 'Expert en Aérobic et Cardio',
    coach3: 'Coach James',
    coach3Role: 'Coach d\'Entraînement Personnel',
    facilities: 'Installations de Classe Mondiale',
    facilitiesDesc: 'Nous proposons des équipements modernes, des espaces d\'entraînement spacieux et des équipements confortables pour améliorer votre expérience de fitness.',
  },
};

export default function About() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="bg-gray-900 py-16 md:py-24 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h1>
          <p className="text-xl text-gray-300">{t.subtitle}</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-300 leading-relaxed mb-8">{t.intro}</p>
          <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80"
              alt="Fitness facility"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gray-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.mission}</h2>
              <p className="text-gray-300 text-lg">{t.missionDesc}</p>
            </div>
            {/* <div className="relative h-80 md:h-96 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1540224881198-08db4a5f6b10?w=500&q=80"
                alt="Training"
                fill
                className="object-cover"
              />
            </div> */}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{t.values}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[t.value1, t.value2, t.value3, t.value4].map((value, i) => (
              <div key={i} className="flex items-start space-x-4 bg-gray-900 p-6 rounded-lg">
                <CheckCircle size={24} className="text-red-600 flex-shrink-0 mt-1" />
                <p className="text-gray-300">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.team}</h2>
          <p className="text-gray-300 text-lg mb-12">{t.teamDesc}</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: t.coach1,
                role: t.coach1Role,
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
              },
              {
                name: t.coach2,
                role: t.coach2Role,
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
              },
              {
                name: t.coach3,
                role: t.coach3Role,
                image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
              },
            ].map((coach, i) => (
              <div key={i} className="bg-black rounded-lg overflow-hidden border border-gray-800 hover:border-red-600 transition">
                <div className="relative h-64 w-full">
                  <Image
                    src={coach.image}
                    alt={coach.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-1">{coach.name}</h3>
                  <p className="text-red-600 text-sm font-semibold">{coach.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.facilities}</h2>
          <p className="text-gray-300 text-lg mb-8">{t.facilitiesDesc}</p>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              'Cardio Equipment',
              'Strength Training Area',
              'Aerobics Studio',
              'Changing Rooms',
            ].map((facility, i) => (
              <div key={i} className="bg-gray-900 p-6 rounded-lg border-l-4 border-red-600">
                <h3 className="text-xl font-bold mb-2">{facility}</h3>
                <p className="text-gray-400">State-of-the-art equipment and professional setup</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
