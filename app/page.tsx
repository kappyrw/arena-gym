'use client';

import { useState } from 'react';
import Image from 'next/image';
import { TypingAnimation } from '@/components/TypingAnimation';
import { JoinFormModal } from '@/components/JoinFormModal';
import { SelectPlanModal } from '@/components/SelectPlanModal';
import { useLanguage } from '@/providers/LanguageProvider';
import { Star, MapPin, Clock, Phone, Facebook, Instagram, Twitter, Linkedin, Youtube, Award } from 'lucide-react';

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
    athleteOfWeek: {
      title: 'Sportif Person of the Week',
      subtitle: 'Celebrating our outstanding athletes who embody dedication and transformation',
      maleBadge: 'Male Champion',
      femaleBadge: 'Female Champion',
      maleAthlete: {
        name: 'Alex Kahindi',
        achievement: 'Transformed his physique with consistent dedication to strength training. Achieved 50+ lb muscle gain in 6 months through disciplined workout regimen and nutrition.',
      },
      femaleAthlete: {
        name: 'Diane Ishimwe',
        achievement: 'Leading our aerobics program with incredible energy and passion. Completed 100 consecutive workout classes and inspired countless community members on their fitness journey.',
      },
    },
    pricing: {
      title: 'Our Membership Plans',
      fit: 'Fit Plan',
      fitPrice: '₨1,000',
      fitPriceLabel: '/day',
      fitFeatures: 'Daily gym access with basic equipment',
      fitPlus: 'Fit Plus',
      fitPlusPrice: '₨20,000',
      fitPlusPriceLabel: '/month',
      fitPlusFeatures: 'Unlimited access + All classes + Personal trainer',
      elite: 'Elite',
      elitePrice: '₨28,000',
      elitePriceLabel: '/month',
      eliteFeatures: 'Premium membership + Nutrition plan + Priority support',
      selectPlan: 'Select Plan',
    },
    testimonials: {
      title: 'Member Testimonials',
      reviews: [
        { name: 'Uwimana', text: 'The Fitness Arena has completely transformed my fitness journey. Amazing trainers and supportive community! I feel stronger every week.' },
        { name: 'Jean', text: 'Best gym in Gihara! Professional staff and fantastic equipment. Highly recommended to anyone serious about fitness!' },
        { name: 'Marie', text: 'I have never felt healthier. The aerobics classes are incredible and fun! The instructors make every session enjoyable.' },
        { name: 'Patrick', text: 'Outstanding personal training sessions. My strength has doubled in 4 months! The trainers really know how to push you.' },
        { name: 'Rita', text: 'The nutritionists here really care about your goals. Fantastic facility with world-class service and attention to detail.' },
        { name: 'Joseph', text: 'Perfect combination of modern equipment and expert guidance. Very satisfied with my membership and progress!' },
        { name: 'Amara', text: 'Best decision I made was joining this gym. Family-friendly atmosphere where everyone feels welcome and motivated.' },
        { name: 'David', text: 'Professional trainers who understand your body. Great results guaranteed! Exceeded all my fitness expectations.' },
        { name: 'Sylvia', text: 'The facility is clean, modern, and well-maintained. Staff is always willing to help and explain proper techniques.' },
        { name: 'Thomas', text: 'Joined 6 months ago and never looked back! The community here is supportive and motivating. Highly recommend!' },
        { name: 'Gloria', text: 'Excellent gym with top-notch equipment and certified professionals. The best value for money in the area!' },
        { name: 'Vincent', text: 'My fitness goals became reality at The Fitness Arena. Great programs, amazing coaches, and fantastic energy!' },
      ],
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
    athleteOfWeek: {
      title: 'Champion Sportif de la Semaine',
      subtitle: 'Célébrant nos athlètes exceptionnels qui incarnent la dédicace et la transformation',
      maleBadge: 'Champion Masculin',
      femaleBadge: 'Champion Féminin',
      maleAthlete: {
        name: 'Alex Kahindi',
        achievement: 'A transformé sa silhouette avec une dédicace constante à l\'entraînement de force. A atteint un gain musculaire de plus de 50 lb en 6 mois grâce à un régime d\'entraînement discipliné.',
      },
      femaleAthlete: {
        name: 'Diane Ishimwe',
        achievement: 'Dirige notre programme d\'aérobic avec une énergie et une passion incroyables. A complété 100 cours d\'entraînement consécutifs et inspiré d\'innombrables membres de la communauté.',
      },
    },
    pricing: {
      title: 'Nos Plans d\'Adhésion',
      fit: 'Plan Fit',
      fitPrice: '₨1,000',
      fitPriceLabel: '/jour',
      fitFeatures: 'Accès quotidien au gym avec équipement de base',
      fitPlus: 'Fit Plus',
      fitPlusPrice: '₨20,000',
      fitPlusPriceLabel: '/mois',
      fitPlusFeatures: 'Accès illimité + Tous les cours + Entraîneur personnel',
      elite: 'Elite',
      elitePrice: '₨28,000',
      elitePriceLabel: '/mois',
      eliteFeatures: 'Adhésion premium + Plan nutritionnel + Support prioritaire',
      selectPlan: 'Choisir le Plan',
    },
    testimonials: {
      title: 'Témoignages des Membres',
      reviews: [
        { name: 'Uwimana', text: 'The Fitness Arena a complètement transformé mon parcours fitness. Entraîneurs incroyables et communauté solidaire! Je me sens plus forte chaque semaine.' },
        { name: 'Jean', text: 'Meilleur gym à Gihara! Personnel professionnel et équipements fantastiques. Hautement recommandé à tous les amateurs de fitness!' },
        { name: 'Marie', text: 'Je ne me suis jamais sentie aussi en forme. Les cours d\'aérobic sont incroyables et amusants! Les instructeurs rendent chaque séance inoubliable.' },
        { name: 'Patrick', text: 'Sessions d\'entraînement personnel exceptionnelles. Ma force a doublé en 4 mois! Les entraîneurs savent vraiment comment vous motiver.' },
        { name: 'Rita', text: 'Les nutritionnistes ici se soucient vraiment de vos objectifs. Établissement fantastique avec un service de classe mondiale!' },
        { name: 'Joseph', text: 'Parfaite combinaison d\'équipements modernes et de conseils d\'experts. Très satisfait de mon adhésion et de mes progrès!' },
        { name: 'Amara', text: 'Meilleure décision que j\'ai prise était de rejoindre ce gym. Atmosphère conviviale où tout le monde se sent le bienvenu.' },
        { name: 'David', text: 'Entraîneurs professionnels qui comprennent votre corps. Résultats garantis! Dépassé toutes mes attentes en fitness.' },
        { name: 'Sylvia', text: 'L\'établissement est propre, moderne et bien entretenu. Le personnel est toujours disposé à aider et expliquer les bonnes techniques.' },
        { name: 'Thomas', text: 'Je me suis inscrit il y a 6 mois et je n\'y reviendrais pas! La communauté ici est solidaire et motivante. Très recommandé!' },
        { name: 'Gloria', text: 'Excellent gym avec des équipements de premier ordre et des professionnels certifiés. Le meilleur rapport qualité-prix de la région!' },
        { name: 'Vincent', text: 'Mes objectifs de fitness sont devenus réalité à The Fitness Arena. Excellents programmes, entraîneurs incroyables, énergie fantastique!' },
      ],
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
  const [selectedPlan, setSelectedPlan] = useState<{ name: string; price: string; priceLabel: string; features: string } | null>(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const { language } = useLanguage();
  const t = translations[language];

  const handleNextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % t.testimonials.reviews.length);
  };

  const handlePrevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + t.testimonials.reviews.length) % t.testimonials.reviews.length);
  };

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center pt-20"
        style={{
          backgroundImage: 'url(/hero1-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="max-w-2xl">
            <TypingAnimation text="THE FITNESS ARENA GYM" language={language} />
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
                src="/ae.png"
                alt="Aerobics class with women"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sportif Person of the Week Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.athleteOfWeek.title}</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">{t.athleteOfWeek.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Male Athlete Card */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden border border-red-600/30 hover:border-red-600/60 transition transform hover:scale-105">
              <div className="relative h-80 bg-gray-700 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                {/* Placeholder for athlete image - replace with actual image path */}
                <Image
                  src="/hero-bg.jpg"
                  alt={t.athleteOfWeek.maleAthlete.name}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute top-4 right-4 bg-red-600 px-4 py-2 rounded-full flex items-center gap-2">
                  <Award size={16} />
                  <span className="text-sm font-bold">{t.athleteOfWeek.maleBadge}</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold mb-2 text-red-600">{t.athleteOfWeek.maleAthlete.name}</h3>
                <div className="w-12 h-1 bg-red-600 mb-6"></div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {t.athleteOfWeek.maleAthlete.achievement}
                </p>
                <div className="flex gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="fill-red-600 text-red-600" />
                  ))}
                </div>
              </div>
            </div>

            {/* Female Athlete Card */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden border border-red-600/30 hover:border-red-600/60 transition transform hover:scale-105">
              <div className="relative h-80 bg-gray-700 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                {/* Placeholder for athlete image - replace with actual image path */}
                <Image
                  src="/hero-bg.jpg"
                  alt={t.athleteOfWeek.femaleAthlete.name}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute top-4 right-4 bg-red-600 px-4 py-2 rounded-full flex items-center gap-2">
                  <Award size={16} />
                  <span className="text-sm font-bold">{t.athleteOfWeek.femaleBadge}</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold mb-2 text-red-600">{t.athleteOfWeek.femaleAthlete.name}</h3>
                <div className="w-12 h-1 bg-red-600 mb-6"></div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {t.athleteOfWeek.femaleAthlete.achievement}
                </p>
                <div className="flex gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="fill-red-600 text-red-600" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">{t.pricing.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: t.pricing.fit, price: t.pricing.fitPrice, priceLabel: t.pricing.fitPriceLabel, features: t.pricing.fitFeatures },
              { name: t.pricing.fitPlus, price: t.pricing.fitPlusPrice, priceLabel: t.pricing.fitPlusPriceLabel, features: t.pricing.fitPlusFeatures, highlighted: true },
              { name: t.pricing.elite, price: t.pricing.elitePrice, priceLabel: t.pricing.elitePriceLabel, features: t.pricing.eliteFeatures },
            ].map((plan, i) => (
              <div
                key={i}
                className={`p-8 rounded-lg border transition transform hover:scale-105 ${
                  plan.highlighted
                    ? 'border-red-600 bg-red-600/10 relative'
                    : 'border-gray-800 bg-black'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                    {language === 'en' ? 'Most Popular' : 'Plus Populaire'}
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-4xl font-bold text-red-600 mb-1">
                  {plan.price}
                  <span className="text-sm text-gray-400 ml-1">{plan.priceLabel}</span>
                </p>
                <p className="text-gray-400 mb-6">{plan.features}</p>
                <button 
                  onClick={() => setSelectedPlan({ name: plan.name, price: plan.price, priceLabel: plan.priceLabel, features: plan.features })}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded transition"
                >
                  {t.pricing.selectPlan}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section with Carousel */}
      <section className="bg-black py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">{t.testimonials.title}</h2>
          
          {/* Carousel with Navigation */}
          <div className="relative">
            <style>{`
              @keyframes fadeInScale {
                from {
                  opacity: 0;
                  transform: scale(0.95);
                }
                to {
                  opacity: 1;
                  transform: scale(1);
                }
              }
              .testimonial-card {
                animation: fadeInScale 0.5s ease-in-out;
              }
              @keyframes shimmer {
                0%, 100% {
                  border-color: rgb(220, 38, 38, 0.5);
                }
                50% {
                  border-color: rgb(220, 38, 38, 1);
                }
              }
              .testimonial-card:hover {
                animation: shimmer 1.5s ease-in-out infinite;
              }
            `}</style>

            {/* Main Testimonial Display */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:p-12 rounded-2xl border-2 border-red-600/50 testimonial-card min-h-80">
              <div className="flex flex-col h-full">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={24} className="fill-red-600 text-red-600" />
                  ))}
                </div>
                <p className="text-gray-100 mb-8 flex-grow text-lg leading-relaxed">
                  "{t.testimonials.reviews[testimonialIndex].text}"
                </p>
                <div className="border-t border-red-600/30 pt-6">
                  <p className="font-bold text-red-500 text-xl">— {t.testimonials.reviews[testimonialIndex].name}</p>
                  <p className="text-gray-400 text-sm mt-2">
                    {testimonialIndex + 1} / {t.testimonials.reviews.length}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center gap-6 mt-10">
              <button
                onClick={handlePrevTestimonial}
                className="group relative bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-110 active:scale-95 flex items-center gap-2 shadow-lg hover:shadow-red-600/50"
                aria-label="Previous testimonial"
              >
                <span>←</span>
                <span className="hidden md:inline">{language === 'en' ? 'Back' : 'Retour'}</span>
              </button>

              {/* Dots Indicator */}
              <div className="flex gap-2 items-center">
                {t.testimonials.reviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setTestimonialIndex(i)}
                    className={`h-3 rounded-full transition-all ${
                      i === testimonialIndex
                        ? 'bg-red-600 w-8'
                        : 'bg-gray-600 hover:bg-gray-500 w-3'
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNextTestimonial}
                className="group relative bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-110 active:scale-95 flex items-center gap-2 shadow-lg hover:shadow-red-600/50"
                aria-label="Next testimonial"
              >
                <span className="hidden md:inline">{language === 'en' ? 'Next' : 'Suivant'}</span>
                <span>→</span>
              </button>
            </div>

            {/* Mobile: Quick Navigation */}
            <div className="md:hidden mt-8 grid grid-cols-2 gap-4">
              <button
                onClick={handlePrevTestimonial}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transition transform hover:scale-105 active:scale-95"
              >
                {language === 'en' ? 'Back' : 'Retour'}
              </button>
              <button
                onClick={handleNextTestimonial}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transition transform hover:scale-105 active:scale-95"
              >
                {language === 'en' ? 'Next' : 'Suivant'}
              </button>
            </div>
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
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Social Media Links */}
          <div className="flex justify-center gap-6 mb-8">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600 transition transform hover:scale-110" aria-label="Facebook">
              <Facebook size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600 transition transform hover:scale-110" aria-label="Instagram">
              <Instagram size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600 transition transform hover:scale-110" aria-label="Twitter">
              <Twitter size={24} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600 transition transform hover:scale-110" aria-label="YouTube">
              <Youtube size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600 transition transform hover:scale-110" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-400 border-t border-gray-800 pt-8">
            <p>&copy; 2024 The Fitness Arena Gym. {language === 'en' ? 'All rights reserved.' : 'Tous droits réservés.'}</p>
          </div>
        </div>
      </footer>

      {/* Join Modal */}
      <JoinFormModal isOpen={joinModalOpen} onClose={() => setJoinModalOpen(false)} language={language} />

      {/* Select Plan Modal */}
      {selectedPlan && (
        <SelectPlanModal
          isOpen={!!selectedPlan}
          onClose={() => setSelectedPlan(null)}
          language={language}
          planName={selectedPlan.name}
          planPrice={selectedPlan.price}
          planPriceLabel={selectedPlan.priceLabel}
          planFeatures={selectedPlan.features}
        />
      )}
    </div>
  );
}
