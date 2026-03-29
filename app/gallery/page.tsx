'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/providers/LanguageProvider';
import { Footer } from '@/components/Footer';
import { FolderOpen } from 'lucide-react';

const translations = {
  en: {
    title: 'Gym Gallery',
    subtitle: 'Showcase of our state-of-the-art facilities and members in action',
    viewMore: 'View More Photos on Google Drive',
    viewMoreDesc: 'Click below to see our complete photo collection on Google Drive',
  },
  fr: {
    title: 'Galerie du Gym',
    subtitle: 'Showcase de nos installations modernes et des membres en action',
    viewMore: 'Voir Plus de Photos sur Google Drive',
    viewMoreDesc: 'Cliquez ci-dessous pour voir notre collection complète de photos sur Google Drive',
  },
};

interface GalleryImage {
  id: string;
  url: string;
  title: string;
  date: string;
}

export default function Gallery() {
  const { language } = useLanguage();
  const t = translations[language];

  // Replace this with your Google Drive folder share link
  const GOOGLE_DRIVE_LINK = 'https://drive.google.com/drive/folders/YOUR_FOLDER_ID?usp=sharing';

  const [images] = useState<GalleryImage[]>([
    {
      id: '1',
      url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80',
      title: 'Girls Aerobics Class',
      date: '2024-03-20',
    },
    {
      id: '2',
      url: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80',
      title: 'Fit Girl Cardio Workout',
      date: '2024-03-18',
    },
    {
      id: '3',
      url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      title: 'Athletic Girl Training',
      date: '2024-03-15',
    },
    {
      id: '4',
      url: 'https://images.unsplash.com/photo-1520821762914-ba581eea763f?w=400&q=80',
      title: 'Fit Boy Strength Training',
      date: '2024-03-12',
    },
    {
      id: '5',
      url: 'https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=400&q=80',
      title: 'Girls Weight Training',
      date: '2024-03-10',
    },
    {
      id: '6',
      url: 'https://images.unsplash.com/photo-1539571696357-5a69c006ae30?w=400&q=80',
      title: 'Fit Girl Crossfit',
      date: '2024-03-08',
    },
    {
      id: '7',
      url: 'https://images.unsplash.com/photo-1570829460005-c840387bb1da?w=400&q=80',
      title: 'Fit Boy Gym Session',
      date: '2024-03-05',
    },
    {
      id: '8',
      url: 'https://images.unsplash.com/photo-1524594091920-03da2b60bd70?w=400&q=80',
      title: 'Girls Group Fitness',
      date: '2024-03-01',
    },
    {
      id: '9',
      url: 'https://images.unsplash.com/photo-1552158473-8ee045131109?w=400&q=80',
      title: 'Athletic Girl Flexibility',
      date: '2024-02-28',
    },
  ]);

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">{t.title}</h1>
          <p className="text-gray-400 text-lg mb-8">{t.subtitle}</p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {images.map((image) => (
            <div key={image.id} className="group relative overflow-hidden rounded-lg">
              <div className="relative h-64 w-full bg-gray-800">
                <Image
                  src={image.url}
                  alt={image.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-300"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 translate-y-full group-hover:translate-y-0 transition duration-300">
                <p className="text-white font-semibold">{image.title}</p>
                <p className="text-gray-300 text-sm">{image.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Google Drive Section */}
        <div className="bg-gray-900 border-2 border-red-600 rounded-lg p-8 md:p-12 text-center">
          <FolderOpen size={48} className="mx-auto mb-4 text-red-600" />
          <h2 className="text-3xl font-bold mb-4">{t.viewMore}</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">{t.viewMoreDesc}</p>
          <a
            href={GOOGLE_DRIVE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg transition transform hover:scale-105"
          >
            <FolderOpen size={24} />
            {t.viewMore}
          </a>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
