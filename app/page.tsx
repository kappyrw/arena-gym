'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, ChevronRight, Globe } from 'lucide-react'

type Language = 'en' | 'rw'

const translations = {
  en: {
    home: 'Home',
    aboutUs: 'About Us',
    classes: 'Classes',
    membership: 'Membership',
    contact: 'Contact Us',
    heroTitle: 'TRANSFORM YOUR BODY AT THE FITNESS ARENA GYM',
    heroSubtitle: 'Join our state-of-the-art fitness facility located in Ruyenzi, Gihara. Experience expert training, modern equipment, and a welcoming community for all fitness levels.',
    joinNow: 'Join Now',
    membersActive: '500+',
    membersLabel: 'Active Members',
    classesOffered: '20+',
    classesLabel: 'Classes Daily',
    yearsExperience: '10+',
    yearsLabel: 'Years Experience',
    trainers: '15+',
    trainersLabel: 'Expert Trainers',
    exploreClasses: 'Explore Our Classes',
    aerobics: 'Aerobics',
    aerobicsDesc: 'High-energy cardio sessions designed for all fitness levels. Build endurance and boost your cardiovascular health through dynamic movements.',
    strength: 'Strength Training',
    strengthDesc: 'Build muscle and increase your strength with our comprehensive strength programs. Access modern equipment and expert guidance.',
    yoga: 'Yoga & Flexibility',
    yogaDesc: 'Improve flexibility, balance, and mental wellness through guided yoga sessions. Perfect for all ages and experience levels.',
    weightLoss: 'Weight Loss Program',
    weightLossDesc: 'Personalized weight loss programs combining cardio, strength training, and nutrition guidance for lasting results.',
    aboutGym: 'About The Fitness Arena Gym',
    aboutDesc1: 'Premier fitness facility in Ruyenzi, Gihara near Facebook Bar',
    aboutDesc2: 'Expert trainers committed to your fitness journey and personal goals',
    aboutDesc3: 'State-of-the-art equipment and modern facilities for all members',
    aboutDesc4: 'Inclusive community welcoming everyone from beginners to athletes',
    contactUs: 'Contact Us',
    ourPackages: 'Our Membership Packages',
    basic: 'Basic',
    basicPrice: '₹500',
    basicDesc: 'Essential gym access with basic equipment',
    standard: 'Standard',
    standardPrice: '₹1,000',
    standardDesc: 'Full gym access + 4 classes per week',
    premium: 'Premium',
    premiumPrice: '₹1,500',
    premiumDesc: 'Unlimited classes + personal trainer consultation',
    selectPlan: 'Select Plan',
    testimonials: 'MEMBER STORIES',
    testimonial1: 'The Fitness Arena Gym transformed my fitness journey. The trainers are incredibly supportive and the facilities are top-notch!',
    testimonial1Author: 'Grace M.',
    testimonial1Role: 'Member',
    testimonial2: 'I love the aerobics classes here! The instructors make it fun and engaging. Highly recommended!',
    testimonial2Author: 'Jean P.',
    testimonial2Role: 'Member',
    testimonial3: 'Finally found a gym that feels welcoming and professional. Great atmosphere and excellent training!',
    testimonial3Author: 'Marie K.',
    testimonial3Role: 'Member',
    newsletter: 'Get Fitness Tips',
    newsletterDesc: 'Subscribe to receive our weekly fitness tips, workout routines, and health advice delivered to your inbox.',
    email: 'Enter your email address',
    subscribe: 'Subscribe',
    getInTouch: 'Get In Touch',
    yourName: 'Your Name',
    yourEmail: 'Your Email',
    yourMessage: 'Your Message',
    sendMessage: 'Send Message',
    location: 'Location',
    locationDetail: 'Ruyenzi, Gihara near Facebook Bar',
    phone: 'Phone',
    hours: 'Hours',
    hoursDetail: 'Mon - Sun: 6:00 AM - 10:00 PM',
    followUs: 'Follow Us',
  },
  rw: {
    home: 'Nyumba',
    aboutUs: 'Kubyigwize',
    classes: 'Amasomo',
    membership: 'Ubugize',
    contact: 'Kurikiza',
    heroTitle: 'SHINUZA UMUBIRI WAWE MU GYM YA FITNESS ARENA',
    heroSubtitle: 'Jyongereza inyumba yacyubahiro yimurikire ibikoresho byerekire fitness. Muri Ruyenzi, Gihara hafi ya Facebook Bar. Nizeranye n\'abakoreshakazi babigize neza n\'amagumire akomeye.',
    joinNow: 'Jyongereza',
    membersActive: '500+',
    membersLabel: 'Abagize Bakuri',
    classesOffered: '20+',
    classesLabel: 'Amasomo Buri Munsi',
    yearsExperience: '10+',
    yearsLabel: 'Imyaka ye Gahunda',
    trainers: '15+',
    trainersLabel: 'Abakoze Barwaye',
    exploreClasses: 'Reba Amasomo Yacu',
    aerobics: 'Aerobics',
    aerobicsDesc: 'Amasomo atahura iterambere rya moteri. Yigutsa ubwiyunge n\'umushinga wa imitsi.',
    strength: 'Umushinga w\'Imbaraga',
    strengthDesc: 'Kuguma imbaraga n\'imiti mu nzira nziza hamwe n\'ibikoresho byerekire fitness.',
    yoga: 'Yoga n\'Ubuzima',
    yogaDesc: 'Yigutsa imbukiranya, impungutse n\'ubwenge mu nzira nziza ya yoga. Hose barashobora.',
    weightLoss: 'Umushinga w\'Imbano',
    weightLossDesc: 'Umushinga w\'imbano uhariye hamwe n\'abakoze barwaye kugira neza.',
    aboutGym: 'Kubyigwize Gym ya Fitness Arena',
    aboutDesc1: 'Inyumba ya fitness nzira ya mbere muri Ruyenzi, Gihara',
    aboutDesc2: 'Abakoze barwaye bukungu bukungu bwacu',
    aboutDesc3: 'Ibikoresho byerekire fitness byerekire neza',
    aboutDesc4: 'Inzira nziza igereranya hose',
    contactUs: 'Kurikiza',
    ourPackages: 'Ibibazo Byerekire Ubugize',
    basic: 'Ibanze',
    basicPrice: '₹500',
    basicDesc: 'Kubika mu gym hamwe n\'ibikoresho ibanze',
    standard: 'Ijambo',
    standardPrice: '₹1,000',
    standardDesc: 'Kubika mu gym byongeye + amasomo 4 buri cyumweru',
    premium: 'Mahaba',
    premiumPrice: '₹1,500',
    premiumDesc: 'Amasomo byongeye + mukirizo wa koze',
    selectPlan: 'Hitamo Igipande',
    testimonials: 'IBIBAZO BYA BAGIZE',
    testimonial1: 'Gym ya Fitness Arena yashinje ubuzima bwanjye. Abakoze barwaye bakungu bukungu.',
    testimonial1Author: 'Grace M.',
    testimonial1Role: 'Mugize',
    testimonial2: 'Nzambuye amasomo ya aerobics hano! Abakoze barwaye nibakungu.',
    testimonial2Author: 'Jean P.',
    testimonial2Role: 'Mugize',
    testimonial3: 'Sitwabikapo gym nzira nziza. Inzira nziza n\'abakoze barwaye bakungu.',
    testimonial3Author: 'Marie K.',
    testimonial3Role: 'Mugize',
    newsletter: 'Reba Inyamabwenge Zerekire Fitness',
    newsletterDesc: 'Jyiyandikira kugira amasomo yerekire fitness no kuberaho neza.',
    email: 'Injira email yacu',
    subscribe: 'Jyiyandikira',
    getInTouch: 'Kurikiza',
    yourName: 'Amazina Yacu',
    yourEmail: 'Email Yacu',
    yourMessage: 'Ubutumwa Bwacu',
    sendMessage: 'Ohereza Ubutumwa',
    location: 'Aho Tugira',
    locationDetail: 'Ruyenzi, Gihara hafi ya Facebook Bar',
    phone: 'Terefoni',
    hours: 'Igihe',
    hoursDetail: 'Kuwa 1 - 7: 6:00 AM - 10:00 PM',
    followUs: 'Twigerayo',
  }
}

export default function Home() {
  const [language, setLanguage] = useState<Language>('en')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const t = translations[language]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <div className="bg-black text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 shadow-lg' : 'bg-black'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-red-600 rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-xs">FAG</span>
              </div>
              <span className="text-lg font-bold hidden sm:inline">FITNESS ARENA</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('home')} className="hover:text-red-600 transition">{t.home}</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-red-600 transition">{t.aboutUs}</button>
              <button onClick={() => scrollToSection('services')} className="hover:text-red-600 transition">{t.classes}</button>
              <button onClick={() => scrollToSection('pricing')} className="hover:text-red-600 transition">{t.membership}</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-red-600 transition">{t.contact}</button>
              
              {/* Language Toggle */}
              <div className="flex items-center gap-2 border-l border-gray-700 pl-8">
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 rounded transition ${language === 'en' ? 'bg-red-600 text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage('rw')}
                  className={`px-3 py-1 rounded transition ${language === 'rw' ? 'bg-red-600 text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  RW
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 hover:text-red-600">{t.home}</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 hover:text-red-600">{t.aboutUs}</button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left py-2 hover:text-red-600">{t.classes}</button>
              <button onClick={() => scrollToSection('pricing')} className="block w-full text-left py-2 hover:text-red-600">{t.membership}</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 hover:text-red-600">{t.contact}</button>
              <div className="flex gap-2 pt-4 border-t border-gray-700">
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 rounded transition ${language === 'en' ? 'bg-red-600 text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage('rw')}
                  className={`px-3 py-1 rounded transition ${language === 'rw' ? 'bg-red-600 text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  RW
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        id="home" 
        className="relative pt-24 pb-12 md:pt-32 md:pb-20 min-h-screen flex items-center"
        style={{
          backgroundImage: 'url(/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-black leading-tight text-balance text-white">
                  {t.heroTitle}
                </h1>
                <p className="text-gray-200 text-lg md:text-xl max-w-lg">
                  {t.heroSubtitle}
                </p>
              </div>
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 text-lg transition transform hover:scale-105">
                {t.joinNow}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-gray-900 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-red-600">{t.membersActive}</div>
              <p className="text-gray-400 text-sm mt-2">{t.membersLabel}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-red-600">{t.classesOffered}</div>
              <p className="text-gray-400 text-sm mt-2">{t.classesLabel}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-red-600">{t.yearsExperience}</div>
              <p className="text-gray-400 text-sm mt-2">{t.yearsLabel}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-red-600">{t.trainers}</div>
              <p className="text-gray-400 text-sm mt-2">{t.trainersLabel}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black mb-16">{t.exploreClasses}</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Aerobics */}
            <div className="bg-red-600 p-6 rounded-lg hover:shadow-2xl transition transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4">
                <span className="text-red-600 font-bold text-xl">🏃‍♀️</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{t.aerobics}</h3>
              <p className="text-red-100 text-sm">{t.aerobicsDesc}</p>
            </div>

            {/* Strength Training */}
            <div className="bg-red-600 p-6 rounded-lg hover:shadow-2xl transition transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4">
                <span className="text-red-600 font-bold text-xl">💪</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{t.strength}</h3>
              <p className="text-red-100 text-sm">{t.strengthDesc}</p>
            </div>

            {/* Yoga */}
            <div className="bg-red-600 p-6 rounded-lg hover:shadow-2xl transition transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4">
                <span className="text-red-600 font-bold text-xl">🧘‍♀️</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{t.yoga}</h3>
              <p className="text-red-100 text-sm">{t.yogaDesc}</p>
            </div>

            {/* Weight Loss */}
            <div className="bg-red-600 p-6 rounded-lg hover:shadow-2xl transition transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4">
                <span className="text-red-600 font-bold text-xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{t.weightLoss}</h3>
              <p className="text-red-100 text-sm">{t.weightLossDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Can Help Section */}
      <section id="about" className="py-16 md:py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="relative h-96 md:h-[500px] order-2 md:order-1">
              <Image
                src="https://images.unsplash.com/photo-1540224881198-08db4a5f6b10?w=600&q=80"
                alt="Fitness training"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            
            <div className="space-y-6 order-1 md:order-2">
              <div>
                <p className="text-red-600 text-sm font-bold mb-2">{t.aboutGym}</p>
                <h2 className="text-4xl md:text-5xl font-black">{t.contactUs}</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-600 flex-shrink-0 flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-gray-400">{t.aboutDesc1}</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-600 flex-shrink-0 flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-gray-400">{t.aboutDesc2}</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-600 flex-shrink-0 flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-gray-400">{t.aboutDesc3}</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-600 flex-shrink-0 flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-gray-400">{t.aboutDesc4}</p>
                </div>
              </div>

              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 transition transform hover:scale-105 w-fit">
                {t.contactUs}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black mb-12 text-center">{t.ourPackages}</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Package */}
            <div className="border border-gray-800 rounded-lg p-8 hover:border-red-600 transition">
              <h3 className="text-sm font-bold text-red-600 mb-2">{t.basic}</h3>
              <div className="mb-4">
                <span className="text-4xl font-black">{t.basicPrice}</span>
                <span className="text-gray-400 text-sm">/month</span>
              </div>
              <p className="text-gray-400 text-sm mb-6">{t.basicDesc}</p>
              <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 transition">
                {t.selectPlan}
              </button>
            </div>

            {/* Standard Package */}
            <div className="border border-gray-800 rounded-lg p-8 hover:border-red-600 transition">
              <h3 className="text-sm font-bold text-red-600 mb-2">{t.standard}</h3>
              <div className="mb-4">
                <span className="text-4xl font-black">{t.standardPrice}</span>
                <span className="text-gray-400 text-sm">/month</span>
              </div>
              <p className="text-gray-400 text-sm mb-6">{t.standardDesc}</p>
              <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 transition">
                {t.selectPlan}
              </button>
            </div>

            {/* Premium Package */}
            <div className="border border-gray-800 rounded-lg p-8 hover:border-red-600 transition">
              <h3 className="text-sm font-bold text-red-600 mb-2">{t.premium}</h3>
              <div className="mb-4">
                <span className="text-4xl font-black">{t.premiumPrice}</span>
                <span className="text-gray-400 text-sm">/month</span>
              </div>
              <p className="text-gray-400 text-sm mb-6">{t.premiumDesc}</p>
              <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 transition">
                {t.selectPlan}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black mb-12 text-center">{t.testimonials}</h2>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Testimonial 1 */}
            <div className="bg-black border border-gray-800 rounded-lg p-6">
              <div className="flex gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-400 mb-4 text-sm">
                "{t.testimonial1}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-600 rounded-full"></div>
                <div>
                  <p className="font-bold text-sm">{t.testimonial1Author}</p>
                  <p className="text-gray-500 text-xs">{t.testimonial1Role}</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-black border border-gray-800 rounded-lg p-6">
              <div className="flex gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-400 mb-4 text-sm">
                "{t.testimonial2}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-600 rounded-full"></div>
                <div>
                  <p className="font-bold text-sm">{t.testimonial2Author}</p>
                  <p className="text-gray-500 text-xs">{t.testimonial2Role}</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-black border border-gray-800 rounded-lg p-6">
              <div className="flex gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-400 mb-4 text-sm">
                "{t.testimonial3}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-600 rounded-full"></div>
                <div>
                  <p className="font-bold text-sm">{t.testimonial3Author}</p>
                  <p className="text-gray-500 text-xs">{t.testimonial3Role}</p>
                </div>
              </div>
            </div>

            {/* Red accent circles */}
            <div className="absolute -top-8 -right-4 w-8 h-8 bg-red-600 rounded-full hidden md:block"></div>
            <div className="absolute -bottom-8 -left-4 w-6 h-6 bg-red-600 rounded-full hidden md:block"></div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-20 bg-red-600">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">{t.newsletter}</h2>
          <p className="text-white/90 mb-8">{t.newsletterDesc}</p>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder={t.email}
              className="flex-1 px-4 py-3 rounded bg-white text-black placeholder-gray-500 outline-none focus:ring-2 focus:ring-black"
            />
            <button className="bg-black hover:bg-gray-900 text-white font-bold px-6 py-3 rounded transition">
              {t.subscribe}
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-black mb-8">{t.getInTouch}</h2>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder={t.yourName}
                    className="w-full bg-gray-900 border border-gray-800 rounded px-4 py-3 text-white placeholder-gray-500 focus:border-red-600 outline-none transition"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder={t.yourEmail}
                    className="w-full bg-gray-900 border border-gray-800 rounded px-4 py-3 text-white placeholder-gray-500 focus:border-red-600 outline-none transition"
                  />
                </div>
                <div>
                  <textarea
                    placeholder={t.yourMessage}
                    rows={5}
                    className="w-full bg-gray-900 border border-gray-800 rounded px-4 py-3 text-white placeholder-gray-500 focus:border-red-600 outline-none transition"
                  ></textarea>
                </div>
                <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded transition">
                  {t.sendMessage}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold mb-4">The Fitness Arena Gym</h3>
                <p className="text-gray-400">Your premier fitness destination dedicated to transforming lives and building a healthier community.</p>
              </div>

              <div>
                <h4 className="font-bold mb-2 text-red-600">{t.location}</h4>
                <p className="text-gray-400">{t.locationDetail}</p>
              </div>

              <div>
                <h4 className="font-bold mb-2 text-red-600">{t.phone}</h4>
                <p className="text-gray-400">+250 (0) 788 XXX XXX</p>
              </div>

              <div>
                <h4 className="font-bold mb-2 text-red-600">{t.hours}</h4>
                <p className="text-gray-400">{t.hoursDetail}</p>
              </div>

              <div>
                <h4 className="font-bold mb-4 text-red-600">{t.followUs}</h4>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition">f</a>
                  <a href="#" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition">in</a>
                  <a href="#" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition">IG</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          <p>&copy; 2024 The Fitness Arena Gym. All rights reserved.</p>
          <p className="text-sm mt-2">Ruyenzi, Gihara | Near Facebook Bar</p>
        </div>
      </footer>
    </div>
  )
}
