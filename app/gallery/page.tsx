'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/providers/LanguageProvider';
import { Upload, X, Plus } from 'lucide-react';

const translations = {
  en: {
    title: 'Gym Gallery',
    subtitle: 'Showcase of our state-of-the-art facilities and members in action',
    uploadImage: 'Upload Image',
    dragDrop: 'Drag and drop your images here',
    selectFiles: 'Select Files',
    noImages: 'No images yet. Be the first to upload a photo of our gym!',
    uploadSuccess: 'Image uploaded successfully!',
    error: 'Error uploading image. Please try again.',
  },
  fr: {
    title: 'Galerie du Gym',
    subtitle: 'Showcase de nos installations modernes et des membres en action',
    uploadImage: 'Télécharger une Image',
    dragDrop: 'Glissez et déposez vos images ici',
    selectFiles: 'Sélectionner les Fichiers',
    noImages: 'Aucune image pour le moment. Soyez le premier à télécharger une photo de notre gym!',
    uploadSuccess: 'Image téléchargée avec succès!',
    error: 'Erreur lors du téléchargement. Veuillez réessayer.',
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
  const [images, setImages] = useState<GalleryImage[]>([
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
  const [loading, setLoading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [uploadMessage, setUploadMessage] = useState('');

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = e.dataTransfer.files;
    if (files && files[0]) {
      handleFiles(files);
    }
  };

  const handleFiles = (files: FileList) => {
    setLoading(true);
    Array.from(files).forEach((file) => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const newImage: GalleryImage = {
            id: Date.now().toString(),
            url: e.target?.result as string,
            title: file.name.split('.')[0],
            date: new Date().toISOString().split('T')[0],
          };
          setImages((prev) => [newImage, ...prev]);
          setUploadMessage(t.uploadSuccess);
          setTimeout(() => setUploadMessage(''), 3000);
        };
        reader.onerror = () => {
          setUploadMessage(t.error);
          setTimeout(() => setUploadMessage(''), 3000);
        };
        reader.readAsDataURL(file);
      }
    });
    setLoading(false);
  };

  const removeImage = (id: string) => {
    setImages((prev) => prev.filter((img) => img.id !== id));
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleFiles(e.target.files);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black mb-4">{t.title}</h1>
          <p className="text-gray-400 text-lg">{t.subtitle}</p>
        </div>

        {/* Upload Section */}
        <div className="mb-12">
          <div
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-lg p-8 text-center transition ${
              dragActive
                ? 'border-red-600 bg-red-600/10'
                : 'border-gray-700 hover:border-red-600'
            }`}
          >
            <Upload className="mx-auto mb-4 text-gray-400" size={48} />
            <p className="text-gray-300 mb-4">{t.dragDrop}</p>
            <label className="inline-block">
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileInput}
                className="hidden"
                disabled={loading}
              />
              <span className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded cursor-pointer transition inline-flex items-center gap-2">
                <Plus size={20} />
                {t.selectFiles}
              </span>
            </label>
          </div>

          {uploadMessage && (
            <div className={`mt-4 p-4 rounded text-center ${
              uploadMessage.includes('success')
                ? 'bg-green-600/20 text-green-400'
                : 'bg-red-600/20 text-red-400'
            }`}>
              {uploadMessage}
            </div>
          )}
        </div>

        {/* Gallery Grid */}
        {images.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">{t.noImages}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image) => (
              <div
                key={image.id}
                className="relative group overflow-hidden rounded-lg bg-gray-900 hover:shadow-lg hover:shadow-red-600/50 transition"
              >
                <div className="relative w-full h-64">
                  <Image
                    src={image.url}
                    alt={image.title}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-300"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex flex-col justify-between p-4">
                  <button
                    onClick={() => removeImage(image.id)}
                    className="self-end bg-red-600 hover:bg-red-700 rounded-full p-2 transition"
                    aria-label="Remove image"
                  >
                    <X size={20} />
                  </button>
                  <div>
                    <p className="text-white font-bold">{image.title}</p>
                    <p className="text-gray-300 text-sm">{image.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
