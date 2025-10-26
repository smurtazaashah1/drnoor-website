'use client';

import React from 'react';

// Import Swiper statically to avoid module loading issues
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Testimonials data with TypeScript interface
interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  rating: number;
  avatar: {
    letter: string;
    gradient: string;
  };
}

// Testimonial Card Component
const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="group relative h-full">
      <div className="bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-yellow-400/30 hover:shadow-yellow-400/10 transform hover:scale-105 h-full flex flex-col">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 via-yellow-400/5 to-yellow-400/0 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>

        <div className="relative z-10 flex flex-col h-full">
          {/* Stars */}
          <div className="flex gap-1 mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 text-yellow-400 fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          {/* Quote */}
          <p className="text-gray-700 mb-6 leading-relaxed flex-grow">
            "{testimonial.quote}"
          </p>

          {/* Student Info */}
          <div className="flex items-center gap-4">
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg ${testimonial.avatar.gradient}`}
            >
              {testimonial.avatar.letter}
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">
                {testimonial.name}
              </h4>
              <p className="text-sm text-gray-600">{testimonial.role}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Swiper Component
const SwiperTestimonials = ({
  testimonials,
}: {
  testimonials: Testimonial[];
}) => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="testimonials-swiper"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <TestimonialCard testimonial={testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
// Main Testimonials Component
export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how Dr. Noor Academy has transformed the learning journey
            of thousands of students worldwide
          </p>
        </div>

        <div className="relative">
          <SwiperTestimonials testimonials={testimonials} />
        </div>
      </div>
    </section>
  );
}

// Testimonials data
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Ahmed',
    role: 'A Level Biology Student',
    quote:
      "Dr. Noor's teaching method made complex biological processes so easy to understand. I went from struggling with genetics to scoring an A* in my A Level Biology!",
    rating: 5,
    avatar: {
      letter: 'S',
      gradient: 'bg-gradient-to-br from-pink-500 to-rose-500',
    },
  },
  {
    id: 2,
    name: 'Ahmed Hassan',
    role: 'O Level Chemistry Student',
    quote:
      'The interactive experiments and clear explanations helped me grasp chemistry concepts that seemed impossible before. Highly recommend Dr. Noor Academy!',
    rating: 5,
    avatar: {
      letter: 'A',
      gradient: 'bg-gradient-to-br from-blue-500 to-cyan-500',
    },
  },
  {
    id: 3,
    name: 'Fatima Khan',
    role: 'Medical Student',
    quote:
      'Thanks to the solid foundation I built at Dr. Noor Academy, I was well-prepared for medical school. The career guidance was invaluable!',
    rating: 5,
    avatar: {
      letter: 'F',
      gradient: 'bg-gradient-to-br from-purple-500 to-indigo-500',
    },
  },
  {
    id: 4,
    name: 'Omar Ali',
    role: 'A Level Chemistry Student',
    quote:
      'Dr. Noor made organic chemistry feel like solving puzzles. The personalized attention and practice materials were exactly what I needed.',
    rating: 5,
    avatar: {
      letter: 'O',
      gradient: 'bg-gradient-to-br from-green-500 to-emerald-500',
    },
  },
  {
    id: 5,
    name: 'Zara Malik',
    role: 'O Level Biology Student',
    quote:
      'The visual aids and practical examples made learning biology so engaging. I never thought I could love science this much!',
    rating: 5,
    avatar: {
      letter: 'Z',
      gradient: 'bg-gradient-to-br from-yellow-500 to-orange-500',
    },
  },
  {
    id: 6,
    name: 'Hassan Sheikh',
    role: 'Pre-Medical Student',
    quote:
      'The comprehensive preparation and mentorship at Dr. Noor Academy gave me the confidence to pursue my medical career dreams.',
    rating: 5,
    avatar: {
      letter: 'H',
      gradient: 'bg-gradient-to-br from-teal-500 to-cyan-500',
    },
  },
];
