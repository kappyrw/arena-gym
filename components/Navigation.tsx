'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/providers/LanguageProvider';

const translations = {
  en: {
    home: 'Home',
    about: 'About Us',
    classes: 'Classes',
    membership: 'Membership',
    gallery: 'Gallery',
    contact: 'Contact',
  },
  fr: {
    home: 'Accueil',
    about: 'À Propos',
    classes: 'Cours',
    membership: 'Adhésion',
    gallery: 'Galerie',
    contact: 'Contact',
  },
};

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  const navItems = [
    { label: t.home, href: '/' },
    { label: t.about, href: '/about' },
    { label: t.classes, href: '/classes' },
    { label: t.membership, href: '/membership' },
    { label: t.gallery, href: '/gallery' },
    { label: t.contact, href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/95 border-b border-gray-800 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-red-600 font-bold text-2xl">🏋️</div>
            <span className="text-white font-bold text-xl hidden sm:inline">FITNESS</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-red-600 transition font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Language Switcher + Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
              className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded font-bold text-sm"
            >
              {language === 'en' ? 'FR' : 'EN'}
            </button>
            
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-800 py-4 space-y-3">
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-gray-300 hover:text-red-600 transition font-medium px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
