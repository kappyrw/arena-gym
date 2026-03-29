import { useLanguage } from '@/providers/LanguageProvider';
import { MapPin, Phone, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  const { language } = useLanguage();

  const translations = {
    en: {
      contactTitle: 'Contact Information',
      location: 'Location',
      locationDetail: 'Ruyenzi, Gihara near Facebook Bar',
      phone: 'Phone',
      phoneDetail: '+250 795 160 921',
      hours: 'Hours',
      hoursDetail: 'Mon - Fri: 6 AM - 10 PM',
      followUs: 'Follow Us',
      copyright: '© 2024 The Fitness Arena Gym. All rights reserved.',
    },
    fr: {
      contactTitle: 'Informations de Contact',
      location: 'Localisation',
      locationDetail: 'Ruyenzi, Gihara près du Bar Facebook',
      phone: 'Téléphone',
      phoneDetail: '+250 795 160 921',
      hours: 'Heures',
      hoursDetail: 'Lun - Ven: 6 AM - 10 PM',
      followUs: 'Suivez-Nous',
      copyright: '© 2024 The Fitness Arena Gym. Tous droits réservés.',
    },
  };

  const t = translations[language];

  return (
    <footer className="bg-black border-t border-gray-800">
      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">{t.contactTitle}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4">
              <MapPin size={32} className="flex-shrink-0 text-white" />
              <div>
                <p className="font-bold mb-1 text-white">{t.location}</p>
                <p className="text-white/90">{t.locationDetail}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Phone size={32} className="flex-shrink-0 text-white" />
              <div>
                <p className="font-bold mb-1 text-white">{t.phone}</p>
                <p className="text-white/90">{t.phoneDetail}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Clock size={32} className="flex-shrink-0 text-white" />
              <div>
                <p className="font-bold mb-1 text-white">{t.hours}</p>
                <p className="text-white/90">{t.hoursDetail}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Bottom */}
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">{t.copyright}</p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-red-600 transition">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
