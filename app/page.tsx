'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, ChevronRight, Heart } from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
                <span className="text-white font-bold text-sm">TBF</span>
              </div>
              <span className="text-lg font-bold hidden sm:inline">BODY</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('home')} className="hover:text-red-600 transition">Home</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-red-600 transition">About us</button>
              <button onClick={() => scrollToSection('services')} className="hover:text-red-600 transition">Classes</button>
              <button onClick={() => scrollToSection('pricing')} className="hover:text-red-600 transition">Blog</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-red-600 transition">Contact us</button>
              <button className="p-2 hover:text-red-600 transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
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
              <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 hover:text-red-600">Home</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 hover:text-red-600">About us</button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left py-2 hover:text-red-600">Classes</button>
              <button onClick={() => scrollToSection('pricing')} className="block w-full text-left py-2 hover:text-red-600">Blog</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 hover:text-red-600">Contact us</button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-12 md:pt-32 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-black leading-tight">
                  <span className="block">WORKOUT</span>
                  <span className="block">WITH ME</span>
                </h1>
                <p className="text-gray-400 text-lg max-w-md">
                  A huge collection of health and fitness content, healthy recipes and transformation stories to get you inspired.
                </p>
              </div>
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 transition transform hover:scale-105">
                Join Club Now
              </button>
            </div>
            <div className="relative h-96 md:h-[500px]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Our%20Cutting-edge%20Gym%20Website%20Design-mkJQaQP6RuFLWjAkgZMKpUSsUhV9nk.jpeg"
                alt="Fit person doing push-ups"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-gray-900 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-red-600">500</div>
              <p className="text-gray-400 text-sm mt-2">Bpm</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-red-600">300</div>
              <p className="text-gray-400 text-sm mt-2">Bpm</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-red-600">1k</div>
              <p className="text-gray-400 text-sm mt-2">Km</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-red-600">10</div>
              <p className="text-gray-400 text-sm mt-2">Nutrition</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black mb-16">Explore Our Program</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Cardio Strength */}
            <div className="bg-red-600 p-6 rounded-lg hover:shadow-2xl transition transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4">
                <span className="text-red-600 font-bold text-xl">💪</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Cardio Strength</h3>
              <p className="text-red-100 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod</p>
            </div>

            {/* Fat Loss */}
            <div className="bg-red-600 p-6 rounded-lg hover:shadow-2xl transition transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4">
                <span className="text-red-600 font-bold text-xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Fat Loss</h3>
              <p className="text-red-100 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod</p>
            </div>

            {/* Muscle Gain */}
            <div className="bg-red-600 p-6 rounded-lg hover:shadow-2xl transition transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4">
                <span className="text-red-600 font-bold text-xl">🏋️</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Muscle Gain</h3>
              <p className="text-red-100 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod</p>
            </div>

            {/* Nutrition */}
            <div className="bg-red-600 p-6 rounded-lg hover:shadow-2xl transition transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4">
                <span className="text-red-600 font-bold text-xl">🥗</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Nutrition</h3>
              <p className="text-red-100 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod</p>
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
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Our%20Cutting-edge%20Gym%20Website%20Design-mkJQaQP6RuFLWjAkgZMKpUSsUhV9nk.jpeg"
                alt="Professional trainer"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            
            <div className="space-y-6 order-1 md:order-2">
              <div>
                <p className="text-red-600 text-sm font-bold mb-2">TESTIMONIALS</p>
                <h2 className="text-4xl md:text-5xl font-black">How We Can Help You</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-600 flex-shrink-0 flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-gray-400">We are a fitness facility for people with Parkinson's disease</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-600 flex-shrink-0 flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-gray-400">We offer classes and training with lift, and help</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-600 flex-shrink-0 flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-gray-400">We offer a diverse value package can opt and test</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-600 flex-shrink-0 flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-gray-400">We provide a comfortable environment for anyone</p>
                </div>
              </div>

              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 transition transform hover:scale-105 w-fit">
                Contact us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black mb-12 text-center">Our List Packages</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Fit Package */}
            <div className="border border-gray-800 rounded-lg p-8 hover:border-red-600 transition">
              <h3 className="text-sm font-bold text-red-600 mb-2">FIT</h3>
              <div className="mb-4">
                <span className="text-4xl font-black">₹1000</span>
                <span className="text-gray-400 text-sm">/month</span>
              </div>
              <p className="text-gray-400 text-sm mb-6">Basic Fit 22/11/2024</p>
              <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 transition">
                Select Plan
              </button>
            </div>

            {/* Fit Plus Package */}
            <div className="border border-gray-800 rounded-lg p-8 hover:border-red-600 transition">
              <h3 className="text-sm font-bold text-red-600 mb-2">FIT</h3>
              <div className="mb-4">
                <span className="text-4xl font-black">₹1500</span>
                <span className="text-gray-400 text-sm">/month</span>
              </div>
              <p className="text-gray-400 text-sm mb-6">Pro Fit 22/11/2024</p>
              <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 transition">
                Select Plan
              </button>
            </div>

            {/* Elite Package */}
            <div className="border border-gray-800 rounded-lg p-8 hover:border-red-600 transition">
              <h3 className="text-sm font-bold text-red-600 mb-2">ELITE</h3>
              <div className="mb-4">
                <span className="text-4xl font-black">₹2000</span>
                <span className="text-gray-400 text-sm">/month</span>
              </div>
              <p className="text-gray-400 text-sm mb-6">Premium 22/11/2024</p>
              <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 transition">
                Select Plan
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black mb-12 text-center">TESTIMONIALS</h2>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Testimonial 1 */}
            <div className="bg-black border border-gray-800 rounded-lg p-6">
              <div className="flex gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-400 mb-4 text-sm">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-600 rounded-full"></div>
                <div>
                  <p className="font-bold text-sm">Client Name</p>
                  <p className="text-gray-500 text-xs">Member</p>
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
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-600 rounded-full"></div>
                <div>
                  <p className="font-bold text-sm">Client Name</p>
                  <p className="text-gray-500 text-xs">Member</p>
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
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-600 rounded-full"></div>
                <div>
                  <p className="font-bold text-sm">Client Name</p>
                  <p className="text-gray-500 text-xs">Member</p>
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
          <h2 className="text-3xl md:text-4xl font-black mb-4">Subscribe on fitness tips</h2>
          <p className="text-white/90 mb-8">Get daily fitness tips and transformation stories to inspire your journey</p>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded bg-white text-black placeholder-gray-500 outline-none focus:ring-2 focus:ring-black"
            />
            <button className="bg-black hover:bg-gray-900 text-white font-bold px-6 py-3 rounded transition">
              Subscribe
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
              <h2 className="text-3xl font-black mb-8">Get in Touch</h2>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-gray-900 border border-gray-800 rounded px-4 py-3 text-white placeholder-gray-500 focus:border-red-600 outline-none transition"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full bg-gray-900 border border-gray-800 rounded px-4 py-3 text-white placeholder-gray-500 focus:border-red-600 outline-none transition"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={5}
                    className="w-full bg-gray-900 border border-gray-800 rounded px-4 py-3 text-white placeholder-gray-500 focus:border-red-600 outline-none transition"
                  ></textarea>
                </div>
                <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded transition">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold mb-4">The Body Fitness Arena Gym</h3>
                <p className="text-gray-400">Transform your body and achieve your fitness goals with our expert trainers and state-of-the-art facilities.</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-5 h-5 text-red-600 flex-shrink-0 mt-1">📍</div>
                  <div>
                    <p className="font-bold">Location</p>
                    <p className="text-gray-400 text-sm">123 Fitness Street, Gym City, GC 12345</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-5 h-5 text-red-600 flex-shrink-0 mt-1">📞</div>
                  <div>
                    <p className="font-bold">Phone</p>
                    <p className="text-gray-400 text-sm">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-5 h-5 text-red-600 flex-shrink-0 mt-1">✉️</div>
                  <div>
                    <p className="font-bold">Email</p>
                    <p className="text-gray-400 text-sm">info@bodyfitness.com</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button className="w-10 h-10 rounded-full bg-red-600 hover:bg-red-700 flex items-center justify-center transition">f</button>
                <button className="w-10 h-10 rounded-full bg-red-600 hover:bg-red-700 flex items-center justify-center transition">𝕏</button>
                <button className="w-10 h-10 rounded-full bg-red-600 hover:bg-red-700 flex items-center justify-center transition">in</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">The Body Fitness Arena</h4>
              <p className="text-gray-400 text-sm">Your ultimate fitness destination</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-red-600 transition">Home</button></li>
                <li><button onClick={() => scrollToSection('about')} className="hover:text-red-600 transition">About</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-red-600 transition">Services</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-red-600 transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-red-600 transition">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex gap-3">
                <button className="text-gray-400 hover:text-red-600 transition">f</button>
                <button className="text-gray-400 hover:text-red-600 transition">𝕏</button>
                <button className="text-gray-400 hover:text-red-600 transition">in</button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 The Body Fitness Arena Gym. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
