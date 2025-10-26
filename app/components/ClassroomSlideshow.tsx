'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const ClassroomSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const slides = [
    {
      id: 1,
      image: '/1.webp',
      title: 'Biology Class',
      description: 'Dr. Noor teaching O Level Biology concepts',
    },
    {
      id: 2,
      image: '/2.webp',
      title: 'Chemistry Lab',
      description: 'A Level Chemistry practical sessions',
    },
    {
      id: 3,
      image: '/3.webp',
      title: 'Interactive Learning',
      description: 'Modern teaching methods and technology',
    },
    {
      id: 4,
      image: '/4.webp',
      title: 'Study Sessions',
      description: 'Exam preparation and review sessions',
    },
    {
      id: 5,
      image: '/5.webp',
      title: 'Classroom Environment',
      description: 'Engaging learning atmosphere with students',
    },
    {
      id: 6,
      image: '/6.webp',
      title: 'Practical Work',
      description: 'Hands-on experiments and demonstrations',
    },
    {
      id: 7,
      image: '/7.webp',
      title: 'Group Learning',
      description: 'Collaborative learning and discussions',
    },
    {
      id: 8,
      image: '/8.webp',
      title: 'Academic Excellence',
      description: 'Achieving top grades with Dr. Noor',
    },
    {
      id: 9,
      image: '/9.webp',
      title: 'Advanced Learning',
      description: 'Advanced concepts and problem-solving techniques',
    },
    {
      id: 10,
      image: '/10.webp',
      title: 'Laboratory Sessions',
      description: 'Comprehensive lab work and practical applications',
    },
    {
      id: 11,
      image: '/11.webp',
      title: 'Student Success',
      description: 'Celebrating achievements and academic milestones',
    },
    {
      id: 12,
      image: '/12.webp',
      title: 'Exam Preparation',
      description: 'Intensive exam preparation and revision sessions',
    },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    // Reset progress when slide changes
    setProgress(0);

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    // Reset progress when currentSlide changes
    setProgress(0);

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 100; // Keep at 100% until next slide
        }
        return prev + 2; // 2% every 100ms = 100% in 5000ms (5 seconds)
      });
    }, 100);

    return () => clearInterval(progressTimer);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    // Progress will be reset automatically by useEffect when currentSlide changes
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    // Progress will be reset automatically by useEffect when currentSlide changes
  };

  return (
    <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-amber-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-teal-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-navy-400/15 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            📚 Dr. Noor's Classroom
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Experience quality O/A Level Biology & Chemistry education
          </p>
        </div>

        {/* Slideshow Container */}
        <div className="relative max-w-4xl mx-auto">
          <div
            className={`relative h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl transition-all duration-1000 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            {/* Progress Bar */}
            <div
              className="absolute top-0 left-0 h-1 bg-gradient-to-r from-amber-400 to-yellow-400 transition-all duration-100 ease-linear z-20"
              style={{ width: `${progress}%` }}
            ></div>

            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-contain bg-navy-800"
                    loading={index === 0 ? 'eager' : 'lazy'}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 70vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/20 via-transparent to-transparent"></div>
                </div>
              </div>
            ))}

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-full p-2 transition-all duration-300 hover:scale-110 z-30"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-full p-2 transition-all duration-300 hover:scale-110 z-30"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-30">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-amber-400 w-6'
                      : 'bg-white/50 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassroomSlideshow;
