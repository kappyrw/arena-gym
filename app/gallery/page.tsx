'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/providers/LanguageProvider';
import { Footer } from '@/components/Footer';
import { FolderOpen, Play } from 'lucide-react';
import { Clock, Users, Zap, Facebook, Instagram, Twitter, Youtube, Linkedin } from 'lucide-react';

const translations = {
  en: {
    title: 'Gym Gallery',
    subtitle: 'Showcase of our state-of-the-art facilities and members in action',
    viewMorePhotos: 'More Pictures',
    viewMoreVideos: 'More Videos',
    viewMorePhotosDesc: 'Click to see our complete photo collection on Google Drive',
    viewMoreVideosDesc: 'Click to see our complete video collection on Google Drive',
    allMedia: 'All Media',
    photos: 'Photos',
    videos: 'Videos',
  },
  fr: {
    title: 'Galerie du Gym',
    subtitle: 'Showcase de nos installations modernes et des membres en action',
    viewMorePhotos: 'Plus de Photos',
    viewMoreVideos: 'Plus de Vidéos',
    viewMorePhotosDesc: 'Cliquez pour voir notre collection complète de photos sur Google Drive',
    viewMoreVideosDesc: 'Cliquez pour voir notre collection complète de vidéos sur Google Drive',
    allMedia: 'Tous les Médias',
    photos: 'Photos',
    videos: 'Vidéos',
  },
};

interface GalleryMedia {
  id: string;
  url: string;
  title: string;
  date: string;
  type: 'image' | 'video';
  thumbnail?: string;
}

export default function Gallery() {
  const { language } = useLanguage();
  const t = translations[language];
  const [filter, setFilter] = useState<'all' | 'photos' | 'videos'>('all');

  // Replace these with your Google Drive folder share links
  const GOOGLE_DRIVE_PHOTOS_LINK = 'https://drive.google.com/drive/folders/19bFYTPWGMS82dx9MwEIAIq-ExvS8Eidf?usp=sharing';
  const GOOGLE_DRIVE_VIDEOS_LINK = 'https://drive.google.com/drive/folders/16XQUhMEKCfvYsCBBrnMnCVuwI9YcHSyQ?usp=drive_link';

  const [media] = useState<GalleryMedia[]>([
    {
      id: '1',
      url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80',
      title: 'Girls Aerobics Class',
      date: '2024-03-20',
      type: 'image',
    },
    {
      id: '2',
      url: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80',
      title: 'Fit Girl Cardio Workout',
      date: '2024-03-18',
      type: 'image',
    },
    {
      id: '3',
      url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      title: 'Athletic Girl Training',
      date: '2024-03-15',
      type: 'image',
    },
    {
      id: '4',
      url: 'https://images.unsplash.com/photo-1520821762914-ba581eea763f?w=400&q=80',
      title: 'Fit Boy Strength Training',
      date: '2024-03-12',
      type: 'image',
    },
    {
      id: 'v1',
      url: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/big_buck_bunny.mp4',
      title: 'Intense CrossFit Workout',
      date: '2024-03-19',
      type: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1539571696357-5a69c006ae30?w=400&q=80',
    },
    {
      id: '5',
      url: 'https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=400&q=80',
      title: 'Girls Weight Training',
      date: '2024-03-10',
      type: 'image',
    },
    {
      id: '6',
      url: 'https://images.unsplash.com/photo-1539571696357-5a69c006ae30?w=400&q=80',
      title: 'Fit Girl Crossfit',
      date: '2024-03-08',
      type: 'image',
    },
    {
      id: 'v2',
      url: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/elemenopeq.mp4',
      title: 'Strength Training Session',
      date: '2024-03-06',
      type: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1520821762914-ba581eea763f?w=400&q=80',
    },
    {
      id: '7',
      url: 'https://images.unsplash.com/photo-1570829460005-c840387bb1da?w=400&q=80',
      title: 'Fit Boy Gym Session',
      date: '2024-03-05',
      type: 'image',
    },
    {
      id: '8',
      url: 'https://images.unsplash.com/photo-1524594091920-03da2b60bd70?w=400&q=80',
      title: 'Girls Group Fitness',
      date: '2024-03-01',
      type: 'image',
    },
    {
      id: 'v3',
      url: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/forrest_gump.mp4',
      title: 'Cardio Training Demo',
      date: '2024-02-25',
      type: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80',
    },
    {
      id: '9',
      url: 'https://images.unsplash.com/photo-1552158473-8ee045131109?w=400&q=80',
      title: 'Athletic Girl Flexibility',
      date: '2024-02-28',
      type: 'image',
    },
  ]);

  const filteredMedia = media.filter((item) => {
    if (filter === 'all') return true;
    return item.type === filter;
  });

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">{t.title}</h1>
          <p className="text-gray-400 text-lg mb-8">{t.subtitle}</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              filter === 'all'
                ? 'bg-red-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {t.allMedia}
          </button>
          <button
            onClick={() => setFilter('photos')}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              filter === 'photos'
                ? 'bg-red-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {t.photos}
          </button>
          <button
            onClick={() => setFilter('videos')}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              filter === 'videos'
                ? 'bg-red-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {t.videos}
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredMedia.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-lg">
              <div className="relative h-64 w-full bg-gray-800">
                {item.type === 'image' ? (
                  <Image
                    src={item.url}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-300"
                  />
                ) : (
                  <>
                    <Image
                      src={item.thumbnail || 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80'}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition duration-300"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-50 transition">
                      <div className="bg-red-600 rounded-full p-4 transform group-hover:scale-110 transition">
                        <Play size={32} fill="white" />
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 translate-y-full group-hover:translate-y-0 transition duration-300">
                <p className="text-white font-semibold">{item.title}</p>
                <p className="text-gray-300 text-sm">{item.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Google Drive Section */}
        <div className="bg-gray-900 border-2 border-red-600 rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Browse More Content</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Photos Section */}
            <div className="text-center">
              <FolderOpen size={48} className="mx-auto mb-4 text-red-600" />
              <h3 className="text-2xl font-bold mb-4">{t.viewMorePhotos}</h3>
              <p className="text-gray-400 mb-6">{t.viewMorePhotosDesc}</p>
              <a
                href={GOOGLE_DRIVE_PHOTOS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition transform hover:scale-105"
              >
                <FolderOpen size={24} />
                {t.viewMorePhotos}
              </a>
            </div>

            {/* Videos Section */}
            <div className="text-center">
              <Play size={48} className="mx-auto mb-4 text-red-600" />
              <h3 className="text-2xl font-bold mb-4">{t.viewMoreVideos}</h3>
              <p className="text-gray-400 mb-6">{t.viewMoreVideosDesc}</p>
              <a
                href={GOOGLE_DRIVE_VIDEOS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition transform hover:scale-105"
              >
                <Play size={24} />
                {t.viewMoreVideos}
              </a>
            </div>
          </div>
        </div>
      </div>

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
    </div>
  );
}
