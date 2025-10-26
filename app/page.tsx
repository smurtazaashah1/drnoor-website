'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Lazy load heavy components
const ClassroomSlideshow = dynamic(
  () => import('./components/ClassroomSlideshow'),
  {
    ssr: false,
    loading: () => (
      <div className="h-96 bg-gray-100 animate-pulse rounded-2xl"></div>
    ),
  }
);

const Schedule = dynamic(() => import('./components/Schedule'), {
  ssr: false,
  loading: () => (
    <div className="h-96 bg-gray-100 animate-pulse rounded-2xl"></div>
  ),
});

// Lazy load Swiper components only when needed
const SwiperComponent = dynamic(
  () => import('./components/SwiperTestimonials'),
  {
    ssr: false,
    loading: () => (
      <div className="h-96 bg-gray-100 animate-pulse rounded-2xl"></div>
    ),
  }
);

// Lazy load FAQ section for better performance
const LazyFAQSection = dynamic(() => import('./components/LazyFAQSection'), {
  ssr: false,
  loading: () => (
    <div className="h-96 bg-navy-900 animate-pulse rounded-2xl flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 bg-amber-400 rounded-full flex items-center justify-center animate-pulse">
          <svg
            className="w-8 h-8 text-navy-900"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <p className="text-white">Loading FAQ section...</p>
      </div>
    </div>
  ),
});

// Affiliations interface
interface Affiliation {
  id: number;
  name: string;
  logo: string;
}

// Affiliations data
const affiliations: Affiliation[] = [
  { id: 1, name: 'CIE Network', logo: 'a.png' },
  { id: 2, name: 'Verge Schooling System', logo: 'b.png' },
  { id: 3, name: 'Podium Professional Education', logo: 'c.png' },
  { id: 4, name: 'Aspire System of Education', logo: 'd.png' },
  { id: 5, name: 'CIE Tutors', logo: 'e.png' },
  { id: 6, name: 'Noon Academy', logo: 'f .png' },
  {
    id: 7,
    name: 'Milestones Coaching Center – Guiding You Towards Success',
    logo: 'g.png',
  },
  {
    id: 8,
    name: 'The Professionals – Journey to Excellence (An Institute of O & A Levels)',
    logo: 'h.png',
  },
  { id: 9, name: 'Wisdom House Education System', logo: 'i.png' },
  { id: 10, name: 'Eden College', logo: 'k.png' },
  { id: 11, name: 'Husamiyah School', logo: 'l .png' },
  { id: 12, name: 'IU School System', logo: 'm.png' },
  { id: 13, name: 'AZ Academy', logo: 'n.png' },
  { id: 14, name: 'Bahria College', logo: 'o.png' },
  { id: 15, name: 'Success Institute', logo: 'q.png' },
  { id: 16, name: 'Siddiqui Tutor Academy', logo: 'r.png' },
  { id: 17, name: 'Army Public School', logo: 's.png' },
  { id: 18, name: 'Inspire Education & Information Systems', logo: 't.png' },
  { id: 19, name: 'Dr. Noor Academy', logo: 'u.png' },
  { id: 20, name: 'Educational Institution V', logo: 'v.png' },
  { id: 21, name: 'Educational Institution W', logo: 'w.png' },
];

// Testimonial Card Component - moved to SwiperTestimonials.tsx

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [isYouTubeSectionVisible, setIsYouTubeSectionVisible] = useState(false);
  const [isFAQSectionVisible, setIsFAQSectionVisible] = useState(false);
  const [isAboutSectionVisible, setIsAboutSectionVisible] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [studentsCount, setStudentsCount] = useState(0);
  const [yearsExperience, setYearsExperience] = useState(0);
  const [institutionsCount, setInstitutionsCount] = useState(0);
  const [currentAffiliation, setCurrentAffiliation] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isSlideShowPaused, setIsSlideShowPaused] = useState(false);
  const [currentVideoSlide, setCurrentVideoSlide] = useState(0);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    parentContact: '',
    classType: '',
    campus: '',
    city: '',
    country: '',
    countrySpecification: '',
    subject: '',
    level: '',
    examSession: '',
    recordedLecturesEmail: '',
    message: '',
  });

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    // Trigger YouTube section animation after hero section
    const youtubeTimer = setTimeout(() => {
      setIsYouTubeSectionVisible(true);
    }, 800);

    // Trigger FAQ section animation after YouTube section
    const faqTimer = setTimeout(() => {
      setIsFAQSectionVisible(true);
    }, 1200);

    return () => {
      clearTimeout(timer);
      clearTimeout(youtubeTimer);
      clearTimeout(faqTimer);
    };
  }, []);

  // Intersection Observer for About section
  useEffect(() => {
    const aboutSection = document.getElementById('about');
    if (!aboutSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
            // Only trigger when 10% of the section is visible
            setIsAboutSectionVisible(true);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
        rootMargin: '0px 0px 0px 0px', // Trigger as soon as section enters viewport
      }
    );

    observer.observe(aboutSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Typing effect for affiliations
  useEffect(() => {
    const affiliationsList = [
      'Certified Teacher',
      'Expert Educator',
      'Biology Specialist',
      'Chemistry Expert',
      'O/A Level Tutor',
      'Academic Mentor',
      'Science Instructor',
      'Educational Consultant',
      'Subject Matter Expert',
      'Learning Facilitator',
      'Academic Coach',
    ];

    const currentText = affiliationsList[currentAffiliation];
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      // Typing animation
      if (displayText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, 100);
      } else {
        // Pause before erasing
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      // Erasing animation
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      } else {
        // Move to next affiliation
        setCurrentAffiliation((prev) => (prev + 1) % affiliationsList.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentAffiliation]);

  // Animated counter effect for About section
  useEffect(() => {
    if (isAboutSectionVisible) {
      // Reset counters first
      setStudentsCount(0);
      setYearsExperience(0);
      setInstitutionsCount(0);

      // Small delay to ensure the section is fully visible before starting animation
      const animationDelay = setTimeout(() => {
        // Animate students count from 0 to 20000 with smooth progression
        const studentsInterval = setInterval(() => {
          setStudentsCount((prev) => {
            if (prev >= 20000) {
              clearInterval(studentsInterval);
              return 20000;
            }
            // Smooth acceleration - start slow, speed up, then slow down near the end
            if (prev < 2000) {
              return prev + 100; // Slow start
            } else if (prev < 16000) {
              return prev + 400; // Fast middle section
            } else {
              return prev + 200; // Slow down near the end
            }
          });
        }, 25); // Slightly faster interval for smoother animation

        // Animate years experience from 0 to 15 with smooth progression
        const yearsInterval = setInterval(() => {
          setYearsExperience((prev) => {
            if (prev >= 15) {
              clearInterval(yearsInterval);
              return 15;
            }
            return prev + 1;
          });
        }, 120); // Slower for years experience

        // Animate institutions count from 0 to 20 with smooth progression
        const institutionsInterval = setInterval(() => {
          setInstitutionsCount((prev) => {
            if (prev >= 20) {
              clearInterval(institutionsInterval);
              return 20;
            }
            return prev + 1;
          });
        }, 100); // Medium speed for institutions

        return () => {
          clearInterval(studentsInterval);
          clearInterval(yearsInterval);
          clearInterval(institutionsInterval);
        };
      }, 300); // 300ms delay after section becomes visible

      return () => {
        clearTimeout(animationDelay);
      };
    }
  }, [isAboutSectionVisible]);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create WhatsApp message with form details
    const whatsappNumber = '+923432532596'; // Dr. Noor's WhatsApp number

    // Different message format based on class type and subject selection
    let message = '';

    if (formData.classType === 'recorded-lectures') {
      message = `Hello Dr. Noor Academy! I would like to access your recorded lectures.

*Student Details:*
• Name: ${formData.fullName}
• Email: ${formData.email}
• Phone: ${formData.phone}
${formData.parentContact ? `• Parent Contact: ${formData.parentContact}` : ''}
• Class Type: Recorded Lectures
${formData.city ? `• City: ${formData.city}` : ''}
${formData.country === 'Other' && formData.countrySpecification ? `• Country: ${formData.countrySpecification}` : formData.country ? `• Country: ${formData.country}` : ''}
${formData.recordedLecturesEmail ? `• Email for Recorded Lectures: ${formData.recordedLecturesEmail}` : ''}
• Subject: ${formData.subject}
• Level: ${formData.level}
${formData.examSession ? `• Exam Session: ${formData.examSession}` : ''}
${formData.message ? `• Additional Message: ${formData.message}` : ''}

Please provide me with information about accessing recorded lectures, pricing, and available content.

Thank you!`;
    } else {
      message = `Hello Dr. Noor Academy! I would like to enroll in your classes.

*Student Details:*
• Name: ${formData.fullName}
• Email: ${formData.email}
• Phone: ${formData.phone}
${formData.parentContact ? `• Parent Contact: ${formData.parentContact}` : ''}
• Class Type: ${formData.classType}${formData.campus ? ` - ${formData.campus}` : ''}
${formData.city ? `• City: ${formData.city}` : ''}
${formData.country === 'Other' && formData.countrySpecification ? `• Country: ${formData.countrySpecification}` : formData.country ? `• Country: ${formData.country}` : ''}
• Subject: ${formData.subject}
• Level: ${formData.level}
${formData.examSession ? `• Exam Session: ${formData.examSession}` : ''}
${formData.message ? `• Additional Message: ${formData.message}` : ''}

Please provide me with more information about enrollment and class schedules.

Thank you!`;
    }

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);

    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodedMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');

    // Show success toast
    setShowToast(true);

    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      parentContact: '',
      classType: '',
      campus: '',
      city: '',
      country: '',
      countrySpecification: '',
      subject: '',
      level: '',
      examSession: '',
      recordedLecturesEmail: '',
      message: '',
    });

    // Hide toast after 3 seconds
    setTimeout(() => setShowToast(false), 3000);
  };

  // YouTube videos data
  const youtubeVideos = [
    {
      id: 1,
      url: 'https://www.youtube.com/embed/qQ3loMo_n2s?si=ImEfahULQjnqv5aJ',
      title: 'YouTube video player',
    },
    {
      id: 2,
      url: 'https://www.youtube.com/embed/yTG-77fdeYU?si=-Y_BX1KApQzgAh_d',
      title: 'YouTube video player',
    },
    {
      id: 3,
      url: 'https://www.youtube.com/embed/VW5Ubv0ayUk?si=R524Tn73liaHN3O1',
      title: 'YouTube video player',
    },
    {
      id: 4,
      url: 'https://www.youtube.com/embed/fSC8_1tQ4QQ?si=HpfTMgbeBYiZhE86',
      title: 'YouTube video player',
    },
    {
      id: 5,
      url: 'https://www.youtube.com/embed/aFVl6QfzgL4?si=0gDPxeLvcG2lxZIX',
      title: 'YouTube video player',
    },
    {
      id: 6,
      url: 'https://www.youtube.com/embed/traBl-Uj-EE?si=S1jqvgZ0-CMA2E3L',
      title: 'YouTube video player',
    },
    {
      id: 7,
      url: 'https://www.youtube.com/embed/TCZ7A6SNkuY?si=D0aWAHQKMABbRs1P',
      title: 'YouTube video player',
    },
    {
      id: 8,
      url: 'https://www.youtube.com/embed/OhGdiiCr9Zw?si=YXPvdBLqcZFU6noC',
      title: 'YouTube video player',
    },
    {
      id: 9,
      url: 'https://www.youtube.com/embed/Kfc-sR286i0?si=TjCMqEYdzMCxlKM7',
      title: 'YouTube video player',
    },
    {
      id: 10,
      url: 'https://www.youtube.com/embed/DQ5XXDl_EnA?si=35YPeZb8GHw0mlYj',
      title: 'YouTube video player',
    },
    {
      id: 11,
      url: 'https://www.youtube.com/embed/U2svi6lRouo?si=2JbNXLpWkMnKZwq-',
      title: 'YouTube video player',
    },
    {
      id: 12,
      url: 'https://www.youtube.com/embed/1Kbc5ZsVP8A?si=7spQg4GrajnGwH2r',
      title: 'YouTube video player',
    },
  ];

  const nextVideoSlide = () => {
    setCurrentVideoSlide(
      (prev) => (prev + 1) % Math.ceil(youtubeVideos.length / 3)
    );
  };

  const prevVideoSlide = () => {
    setCurrentVideoSlide(
      (prev) =>
        (prev - 1 + Math.ceil(youtubeVideos.length / 3)) %
        Math.ceil(youtubeVideos.length / 3)
    );
  };

  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-[85vh] sm:min-h-[88vh] md:min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden pt-16 pb-8"
      >
        {/* Hero background image - WebP format for fast loading */}
        <div className="absolute inset-0">
          <Image
            src="/hero.webp"
            alt="Dr. Noor Academy Background"
            fill
            className="object-cover"
            priority
            quality={90}
            fetchPriority="high"
            sizes="100vw"
          />
          {/* Navy blue shade overlay to match website theme */}
          <div className="absolute inset-0 bg-navy-800/25"></div>
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/30"></div>
          {/* Subtle gradient overlay for enhanced visual appeal */}
          <div className="absolute inset-0 bg-gradient-to-tr from-navy-700/20 via-transparent to-navy-600/15"></div>
        </div>

        {/* Minimal molecular/DNA overlays - very faint */}
        <div className="absolute inset-0 opacity-5">
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
          {/* Molecular dots pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(251,191,36,0.2)_2px,transparent_2px),radial-gradient(circle_at_80%_70%,rgba(20,184,166,0.2)_2px,transparent_2px)] bg-[size:120px_120px]"></div>
        </div>

        {/* Floating science icons - more subtle */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* DNA Helix */}
          <div className="absolute top-32 left-16 opacity-10 animate-float">
            <svg
              className="w-20 h-20 text-amber-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          </div>

          {/* Atom */}
          <div className="absolute top-40 right-24 opacity-8 animate-float-delayed">
            <svg
              className="w-20 h-20 sm:w-24 sm:h-24 text-teal-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M12 1v6m0 6v6" />
              <path d="m21 12-6-3-6 3-6-3" />
              <path d="m21 12-6 3-6-3-6 3" />
              <path d="M12 1L9 8l3 4 3-4-3-7z" />
            </svg>
          </div>

          {/* Chemistry Flask */}
          <div className="absolute bottom-40 left-24 opacity-10 animate-float-slow">
            <svg
              className="w-16 h-16 sm:w-18 sm:h-18 text-emerald-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9 2v6.17L3.83 13.83c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L10 10.48V2h4v8.48l4.76 4.76c.39.39.39 1.02 0 1.41-.39.39-1.02.39-1.41 0L13 8.17V2H9z" />
            </svg>
          </div>

          {/* Molecular Structure */}
          <div className="absolute bottom-32 right-16 opacity-8 animate-float">
            <svg
              className="w-18 h-18 sm:w-22 sm:h-22 text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="2" />
              <circle cx="6" cy="6" r="2" />
              <circle cx="18" cy="6" r="2" />
              <circle cx="6" cy="18" r="2" />
              <circle cx="18" cy="18" r="2" />
              <line x1="12" y1="12" x2="6" y2="6" />
              <line x1="12" y1="12" x2="18" y2="6" />
              <line x1="12" y1="12" x2="6" y2="18" />
              <line x1="12" y1="12" x2="18" y2="18" />
            </svg>
          </div>
        </div>

        {/* Main content - properly centered with responsive padding and overflow control */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto flex flex-col items-center justify-center space-y-3 max-w-full overflow-hidden py-4">
          {/* Professional Banner with Dr. Noor's Picture */}
          <div
            className={`relative mb-3 transition-all duration-1000 ease-out ${
              isVisible
                ? 'opacity-100 translate-y-0 animate-fade-up'
                : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Banner Container with Glowing Border */}
            <div className="relative bg-gradient-to-r from-amber-500/20 via-amber-400/10 to-teal-400/20 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-amber-400/30 shadow-2xl shadow-amber-500/20 ring-2 ring-amber-400/40 ring-offset-2 ring-offset-navy-800/50">
              {/* Soft Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 via-yellow-300/5 to-amber-400/10 rounded-2xl blur-xl"></div>

              {/* Dr. Noor's Professional Photo */}
              <div className="relative flex flex-col md:flex-row items-center gap-4 md:gap-6">
                <div className="relative">
                  <Image
                    src="/drnoor.webp"
                    alt="Dr. Noor - Biology & Chemistry Expert"
                    width={160}
                    height={160}
                    className="w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-xl shadow-xl object-cover object-top border-3 border-amber-400/50"
                    quality={80}
                    priority
                    sizes="(max-width: 768px) 112px, (max-width: 1024px) 144px, 160px"
                  />
                </div>

                {/* Professional Info - Centered Vertically */}
                <div className="text-center md:text-left flex-1 flex flex-col justify-center">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 whitespace-nowrap">
                    Dr. Noor Muhammad
                  </h2>
                  <p className="text-amber-300 text-sm md:text-base font-medium mb-1">
                    Expert Biology & Chemistry Educator
                  </p>
                  <p className="text-teal-300 text-xs md:text-sm">
                    O/A Level Specialist • 15+ Years Experience
                  </p>
                </div>

                {/* Academy Logo - Smaller and positioned as brand mark */}
                <div className="hidden md:block">
                  <Image
                    src="/logo.webp"
                    alt="Dr. Noor Academy"
                    width={64}
                    height={64}
                    className="w-14 h-14 lg:w-16 lg:h-16 rounded-full shadow-lg border-2 border-amber-400/30 opacity-80"
                    quality={80}
                    priority
                    sizes="(max-width: 1024px) 56px, 64px"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Main Headline - Mobile-optimized font sizes */}
          <h1
            className={`text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 leading-tight tracking-wide transition-all duration-1000 ease-out delay-200 ${
              isVisible
                ? 'opacity-100 translate-y-0 animate-fade-up'
                : 'opacity-0 translate-y-8'
            }`}
            style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}
          >
            <span className="text-amber-400 animate-slide-in-left delay-300">
              Learn
            </span>{' '}
            <span className="text-white">O/A Level</span>{' '}
            <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent animate-scale-in">
              Biology
            </span>{' '}
            <span className="text-white">&</span>{' '}
            <span className="text-teal-400 animate-slide-in-right">
              Chemistry
            </span>{' '}
            <span className="text-white">with</span>{' '}
            <span className="text-amber-400 animate-slide-in-left delay-300 whitespace-nowrap">
              Dr. Noor
            </span>
          </h1>

          {/* Subheadline - Mobile-optimized smaller text */}
          <p
            className={`text-sm sm:text-sm md:text-base lg:text-lg text-white mb-2 font-light max-w-3xl mx-auto leading-relaxed tracking-wide transition-all duration-1000 ease-out delay-300 ${
              isVisible
                ? 'opacity-100 translate-y-0 animate-fade-in'
                : 'opacity-0 translate-y-8'
            }`}
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
          >
            Master{' '}
            <span className="text-amber-400 font-medium animate-scale-in">
              complex concepts
            </span>{' '}
            with
            <span className="text-teal-400 font-medium animate-slide-in-left delay-500">
              {' '}
              expert guidance
            </span>
            ,
            <span className="text-emerald-400 font-medium animate-slide-in-right">
              {' '}
              interactive learning
            </span>
            , and
            <span className="text-amber-400 font-medium animate-scale-in">
              {' '}
              proven results
            </span>
          </p>

          {/* Typing Effect for Affiliations - positioned below subtext, above buttons */}
          <div
            className={`text-xs sm:text-xs md:text-sm text-teal-300 mb-2 font-medium h-4 flex items-center justify-center transition-all duration-1000 ease-out delay-500 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
          >
            <span className="border-r-2 border-teal-300 pr-1 animate-pulse">
              {displayText}
            </span>
          </div>

          {/* CTA Buttons - with scale-in animation */}
          <div
            className={`flex flex-col md:flex-row gap-2 md:gap-3 justify-center items-center mt-2 transition-all duration-1000 ease-out delay-700 ${
              isVisible
                ? 'opacity-100 translate-y-0 animate-scale-in'
                : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Enroll Now Button - Responsive sizing */}
            <button
              onClick={() => scrollToSection('enroll')}
              className="group relative px-6 sm:px-6 lg:px-8 py-3 sm:py-3 lg:py-4 bg-gradient-to-r from-amber-500 to-amber-400 text-white font-bold text-base sm:text-base rounded-2xl transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/50 min-w-[180px] sm:min-w-[180px] lg:min-w-[200px] overflow-hidden"
            >
              <span className="relative z-10 tracking-wide">Enroll Now</span>
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-300 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md scale-110"></div>
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>

            {/* YouTube Button - Responsive sizing */}
            <button
              onClick={() => scrollToSection('youtube')}
              className="group relative px-6 sm:px-6 lg:px-8 py-3 sm:py-3 lg:py-4 border-2 border-amber-400 text-amber-400 font-bold text-base sm:text-base rounded-2xl transition-all duration-300 ease-out hover:scale-105 hover:bg-gradient-to-r hover:from-amber-500 hover:to-amber-400 hover:text-white hover:border-transparent hover:shadow-2xl hover:shadow-amber-500/30 min-w-[180px] sm:min-w-[180px] lg:min-w-[200px] overflow-hidden backdrop-blur-sm bg-white/5"
            >
              <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3 tracking-wide">
                <svg
                  className="w-5 h-5 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                <span className="hidden sm:inline">Watch Lectures</span>
                <span className="sm:hidden">Lectures</span>
              </span>
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-amber-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-teal-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 -right-32 w-32 h-32 bg-emerald-400/15 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>
      </section>

      {/* Institute Logos Ticker */}
      <section className="bg-gradient-to-r from-amber-500/20 via-amber-400/10 to-teal-400/20 py-3 sm:py-4 overflow-hidden border-t border-amber-400/30 relative shadow-lg shadow-amber-500/20">
        {/* Dr. Noor card inspired overlay effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 via-yellow-300/5 to-amber-400/10 blur-xl"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/15 to-transparent"></div>

        {/* Subtle glow effect matching the card */}
        <div className="absolute inset-0 ring-2 ring-amber-400/40 ring-offset-2 ring-offset-navy-800/50 rounded-sm"></div>

        <div className="relative z-10">
          {/* Ticker Container */}
          <div
            className="flex hover:pause-animation"
            style={{
              width: 'calc(12 * (120px + 32px))',
              animation: 'scroll 30s linear infinite',
            }}
          >
            {/* First set of logos */}
            {['a.png', 'b.png', 'c.png', 'd.png', 'e.png', 'f .png'].map(
              (logo, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 mx-4 sm:mx-6 md:mx-8 flex items-center justify-center"
                >
                  <Image
                    src={`/${logo}`}
                    alt={`Institute Logo ${index + 1}`}
                    width={120}
                    height={80}
                    className="h-8 sm:h-10 md:h-12 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300 rounded-lg"
                    loading="lazy"
                    sizes="(max-width: 640px) 32px, (max-width: 768px) 40px, 48px"
                  />
                </div>
              )
            )}
            {/* Second set for seamless loop */}
            {['a.png', 'b.png', 'c.png', 'd.png', 'e.png', 'f .png'].map(
              (logo, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 mx-4 sm:mx-6 md:mx-8 flex items-center justify-center"
                >
                  <Image
                    src={`/${logo}`}
                    alt={`Institute Logo ${index + 1}`}
                    width={120}
                    height={80}
                    className="h-8 sm:h-10 md:h-12 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300 rounded-lg"
                    loading="lazy"
                    sizes="(max-width: 640px) 32px, (max-width: 768px) 40px, 48px"
                  />
                </div>
              )
            )}
            {/* Third set for extra seamless loop */}
            {['a.png', 'b.png', 'c.png', 'd.png', 'e.png', 'f .png'].map(
              (logo, index) => (
                <div
                  key={`third-${index}`}
                  className="flex-shrink-0 mx-4 sm:mx-6 md:mx-8 flex items-center justify-center"
                >
                  <Image
                    src={`/${logo}`}
                    alt={`Institute Logo ${index + 1}`}
                    width={120}
                    height={80}
                    className="h-8 sm:h-10 md:h-12 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300 rounded-lg"
                    loading="lazy"
                    sizes="(max-width: 640px) 32px, (max-width: 768px) 40px, 48px"
                  />
                </div>
              )
            )}
            {/* Fourth set for better seamless loop */}
            {['a.png', 'b.png', 'c.png', 'd.png', 'e.png', 'f .png'].map(
              (logo, index) => (
                <div
                  key={`fourth-${index}`}
                  className="flex-shrink-0 mx-4 sm:mx-6 md:mx-8 flex items-center justify-center"
                >
                  <Image
                    src={`/${logo}`}
                    alt={`Institute Logo ${index + 1}`}
                    width={120}
                    height={80}
                    className="h-8 sm:h-10 md:h-12 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300 rounded-lg"
                    loading="lazy"
                    sizes="(max-width: 640px) 32px, (max-width: 768px) 40px, 48px"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Classroom Slideshow Section */}
      <ClassroomSlideshow />

      {/* YouTube Section */}
      <section
        id="youtube"
        className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isYouTubeSectionVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              📺 YouTube Lectures
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Detailed lessons and past paper discussions on YouTube
            </p>
          </div>

          {/* Video Slideshow */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isYouTubeSectionVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="overflow-hidden rounded-3xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentVideoSlide * 100}%)`,
                }}
              >
                {Array.from(
                  { length: Math.ceil(youtubeVideos.length / 3) },
                  (_, slideIndex) => (
                    <div key={slideIndex} className="w-full flex-shrink-0">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                        {youtubeVideos
                          .slice(slideIndex * 3, slideIndex * 3 + 3)
                          .map((video) => (
                            <div key={video.id} className="group relative">
                              <div className="relative overflow-hidden rounded-2xl bg-navy-900/10 backdrop-blur-sm border border-navy-200/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-yellow-400/20">
                                <div className="aspect-video bg-gradient-to-br from-navy-50 to-navy-100 rounded-2xl overflow-hidden relative z-10">
                                  <iframe
                                    width="560"
                                    height="315"
                                    src={video.url}
                                    title={video.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                    className="w-full h-full relative z-20"
                                  />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none z-0"></div>
                                <div className="absolute inset-0 ring-2 ring-yellow-400/0 group-hover:ring-yellow-400/50 rounded-2xl transition-all duration-300 pointer-events-none z-0"></div>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-center items-center mt-8 gap-4">
              {/* Previous Button */}
              <button
                onClick={prevVideoSlide}
                className="group relative p-3 bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-yellow-400/10 hover:border-yellow-400/50 hover:scale-110"
                disabled={currentVideoSlide === 0}
              >
                <svg
                  className="w-6 h-6 text-navy-900 group-hover:text-yellow-600 transition-colors duration-300"
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

              {/* Slide Indicators */}
              <div className="flex gap-2">
                {Array.from(
                  { length: Math.ceil(youtubeVideos.length / 3) },
                  (_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentVideoSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentVideoSlide
                          ? 'bg-yellow-400 w-8'
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  )
                )}
              </div>

              {/* Next Button */}
              <button
                onClick={nextVideoSlide}
                className="group relative p-3 bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-yellow-400/10 hover:border-yellow-400/50 hover:scale-110"
                disabled={
                  currentVideoSlide === Math.ceil(youtubeVideos.length / 3) - 1
                }
              >
                <svg
                  className="w-6 h-6 text-navy-900 group-hover:text-yellow-600 transition-colors duration-300"
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
            </div>
          </div>

          {/* YouTube Channel Link */}
          <div
            className={`text-center mt-12 transition-all duration-1000 delay-500 ${
              isYouTubeSectionVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <a
              href="https://www.youtube.com/@d.n.a.drnooracademy1460"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              <span>Subscribe on YouTube</span>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section - Lazy Loaded */}
      <LazyFAQSection isVisible={isFAQSectionVisible} />

      {/* About Section */}
      <section
        id="about"
        className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-48 h-48 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div
            className={`text-center mb-12 transition-all duration-1000 ${
              isAboutSectionVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              About Dr. Hafiz Noor Muhammad
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              MBBS Doctor with 15+ years of experience in O/A Level Biology and
              Chemistry
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full mt-4"></div>
          </div>

          {/* Grid Layout: 2 columns on large screens, 1 on mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left Column: Key Points */}
            <div
              className={`space-y-4 transition-all duration-1000 delay-300 ${
                isAboutSectionVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-8'
              }`}
            >
              <h3 className="text-xl font-bold text-navy-900 mb-3">
                Why Choose Dr. Hafiz Noor Muhammad?
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-2.5 h-2.5 text-navy-900"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900 text-sm">
                      MBBS Doctor from Dow Medical College
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Brings both academic excellence and real-world medical
                      insight
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-2.5 h-2.5 text-navy-900"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900 text-sm">
                      Expert in O-Level, IGCSE & A-Level
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Specialized in Chemistry and Biology curriculum with
                      proven results
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-2.5 h-2.5 text-navy-900"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900 text-sm">
                      Calm & Inspiring Teaching Style
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Creates an engaging environment where learning feels easy
                      and exciting
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Philosophy & Stats */}
            <div
              className={`transition-all duration-1000 delay-500 ${
                isAboutSectionVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-8'
              }`}
            >
              <div className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-2xl p-6 text-white relative overflow-hidden">
                {/* Subtle background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-blue-400/5"></div>

                <div className="relative z-10">
                  <h3 className="text-lg font-bold mb-4 text-yellow-400">
                    Teaching Philosophy & Approach
                  </h3>
                  <p className="text-gray-200 leading-relaxed text-sm mb-4">
                    A highly skilled professional with an unwavering work ethic,
                    Dr. Noor stands out for his calm, inspiring demeanor and
                    deep-rooted passion for teaching. His philosophy centers
                    around building strong foundations — always beginning from
                    the core of every concept.
                  </p>
                  <p className="text-gray-200 leading-relaxed text-sm mb-6">
                    Known for breaking down complex concepts into simple,
                    engaging lessons, Dr. Noor's vibrant personality and lively
                    sense of humor foster a relaxed, energetic classroom
                    atmosphere where students feel motivated and confident.
                  </p>

                  {/* Compact Stats Cards */}
                  <div className="grid grid-cols-3 gap-3">
                    {/* Students Taught Card */}
                    <div className="group relative">
                      <div className="bg-navy-900/20 backdrop-blur-xl border border-white/10 rounded-xl p-3 text-center shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-yellow-400/30 hover:shadow-yellow-400/10 transform hover:scale-105">
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 via-yellow-400/5 to-yellow-400/0 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-500"></div>
                        <div className="relative z-10">
                          <div className="text-lg mb-1">🎓</div>
                          <div className="text-lg sm:text-xl font-bold text-yellow-400 mb-1 transition-all duration-300 transform hover:scale-110 flex items-center justify-center">
                            <span className="inline-block animate-pulse">
                              {studentsCount.toLocaleString()}
                            </span>
                            <span className="text-yellow-300 animate-bounce inline-block ml-0.5">
                              +
                            </span>
                          </div>
                          <div className="text-xs text-gray-300 font-medium">
                            Students Taught
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Years Experience Card */}
                    <div className="group relative">
                      <div className="bg-navy-900/20 backdrop-blur-xl border border-white/10 rounded-xl p-3 text-center shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-yellow-400/30 hover:shadow-yellow-400/10 transform hover:scale-105">
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 via-yellow-400/5 to-yellow-400/0 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-500"></div>
                        <div className="relative z-10">
                          <div className="text-lg mb-1">📚</div>
                          <div className="text-lg sm:text-xl font-bold text-yellow-400 mb-1 transition-all duration-300 transform hover:scale-110 flex items-center justify-center">
                            <span className="inline-block animate-pulse">
                              {yearsExperience}
                            </span>
                            <span className="text-yellow-300 animate-bounce inline-block ml-0.5">
                              +
                            </span>
                          </div>
                          <div className="text-xs text-gray-300 font-medium">
                            Years Experience
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Institutions Card */}
                    <div className="group relative">
                      <div className="bg-navy-900/20 backdrop-blur-xl border border-white/10 rounded-xl p-3 text-center shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-yellow-400/30 hover:shadow-yellow-400/10 transform hover:scale-105">
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 via-yellow-400/5 to-yellow-400/0 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-500"></div>
                        <div className="relative z-10">
                          <div className="text-lg mb-1">🏫</div>
                          <div className="text-lg sm:text-xl font-bold text-yellow-400 mb-1 transition-all duration-300 transform hover:scale-110 flex items-center justify-center">
                            <span className="inline-block animate-pulse">
                              {institutionsCount}
                            </span>
                            <span className="text-yellow-300 animate-bounce inline-block ml-0.5">
                              +
                            </span>
                          </div>
                          <div className="text-xs text-gray-300 font-medium">
                            Institutions Taught At
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <div id="schedule">
        <Schedule />
      </div>

      {/* Testimonials Section */}
      <div id="testimonials">
        <SwiperComponent />
      </div>

      {/* Affiliations Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Affiliations{' '}
              <span className="font-light text-gray-500">(Past & Present)</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proud partnerships with leading educational institutions and
              organizations
            </p>
          </div>

          {/* Slideshow - All 19 logos in continuous loop */}
          <div className="relative overflow-hidden bg-gray-100 p-4 sm:p-8">
            <div
              className="flex hover:pause-animation"
              style={{
                width: 'calc(21 * (100px + 8px) * 2)',
                animation: 'scroll 30s linear infinite',
                animationPlayState: isSlideShowPaused ? 'paused' : 'running',
              }}
              onClick={() => setIsSlideShowPaused(!isSlideShowPaused)}
            >
              {/* First set of logos */}
              {affiliations.map((affiliation, index) => {
                // Don't encode spaces - use the filename as-is since the files have literal spaces
                const imagePath = affiliation.logo || 'placeholder.png';

                return (
                  <div
                    key={`first-${affiliation.id || index}`}
                    className="flex-shrink-0 bg-white rounded-lg p-2 sm:p-4 shadow-md border-2 border-gray-200 min-h-[60px] sm:min-h-[80px] w-[100px] sm:w-[120px] flex items-center justify-center mx-1 sm:mx-2 relative cursor-pointer hover:shadow-lg transition-shadow"
                  >
                    <Image
                      src={`/${imagePath}`}
                      alt={affiliation.name}
                      width={120}
                      height={80}
                      className="max-w-full max-h-full object-contain"
                      loading="lazy"
                      sizes="(max-width: 640px) 100px, 120px"
                      onLoad={() => {
                        // Image loaded successfully - no visual feedback needed
                      }}
                      onError={() => {
                        console.error(
                          `❌ FAILED: Could not load ${affiliation.name} - ${imagePath}`
                        );
                      }}
                    />
                  </div>
                );
              })}
              {/* Duplicate set for seamless loop */}
              {affiliations.map((affiliation, index) => {
                // Don't encode spaces - use the filename as-is since the files have literal spaces
                const imagePath = affiliation.logo || 'placeholder.png';

                return (
                  <div
                    key={`second-${affiliation.id || index}`}
                    className="flex-shrink-0 bg-white rounded-lg p-2 sm:p-4 shadow-md border-2 border-gray-200 min-h-[60px] sm:min-h-[80px] w-[100px] sm:w-[120px] flex items-center justify-center mx-1 sm:mx-2 relative cursor-pointer hover:shadow-lg transition-shadow"
                  >
                    <Image
                      src={`/${imagePath}`}
                      alt={affiliation.name}
                      width={120}
                      height={80}
                      className="max-w-full max-h-full object-contain"
                      loading="lazy"
                      sizes="(max-width: 640px) 100px, 120px"
                      onLoad={() => {
                        // Image loaded successfully - no visual feedback needed
                      }}
                      onError={() => {
                        console.error(
                          `❌ FAILED (duplicate): Could not load ${affiliation.name} - ${imagePath}`
                        );
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Course Cards Section */}
      <section
        id="courses"
        className="bg-gradient-to-br from-gray-50 via-white to-blue-50 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-20 w-64 h-64 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-80 h-80 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-green-400 to-teal-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Choose Your Learning Path
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the perfect course designed to help you excel in your
              academic journey
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Course Cards Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* O Level Course Card */}
            <div className="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:bg-white flex flex-col">
              {/* Card Header */}
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">🧪</div>
                <h3 className="text-2xl font-bold text-navy-900 mb-2">
                  O Level / IGCSE Chemistry / Biology
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive coverage of O Level and IGCSE Chemistry and
                  Biology syllabus with handwritten notes, worksheets, and past
                  paper practice.
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    Complete syllabus coverage
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    Handwritten notes for easy revision
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    Worksheets & past papers with marking schemes
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">Exam technique mastery</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    Structured group learning
                  </span>
                </div>
              </div>

              {/* Enroll Button */}
              <div className="text-center mt-auto">
                <a
                  href="#enroll"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group-hover:shadow-blue-500/25"
                >
                  <span>Enroll in O Level / IGCSE</span>
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* A Level Course Card */}
            <div className="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:bg-white flex flex-col">
              {/* Card Header */}
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">🔬</div>
                <h3 className="text-2xl font-bold text-navy-900 mb-2">
                  AS & A2 Level Chemistry / Biology
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Advanced Chemistry and Biology preparation focusing on
                  conceptual clarity, analytical skills, and exam success.
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    Advanced topic explanations
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    Notes for clear understanding
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    Worksheets & past papers with marking schemes
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    Examiner report insights
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">University preparation</span>
                </div>
              </div>

              {/* Enroll Button */}
              <div className="text-center mt-auto">
                <a
                  href="#enroll"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-bold rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group-hover:shadow-purple-500/25"
                >
                  <span>Enroll in A Level</span>
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Recorded Lectures Card */}
            <div className="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:bg-white flex flex-col">
              {/* Card Header */}
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">📹</div>
                <h3 className="text-2xl font-bold text-navy-900 mb-2">
                  O/A Levels Chemistry & Biology – Recorded Lectures
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Recorded lectures covering the complete Chemistry and Biology
                  syllabus for O and A Levels.
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    Comes with an Instructions Book for guided learning
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    Includes notes, worksheets & past papers
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    Flexible, exam-focused preparation at your own pace
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-semibold">
                    24/7 support from Dr. Noor & his team
                  </span>
                </div>
              </div>

              {/* Get Access Button */}
              <div className="text-center mt-auto">
                <a
                  href="#enroll"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group-hover:shadow-green-500/25"
                >
                  <span>Get Access</span>
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enroll Section */}
      <section
        id="enroll"
        className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 py-20 px-4 sm:px-6 lg:px-8 relative"
      >
        {/* Toast Notification */}
        <div
          className={`fixed top-4 right-4 z-50 transition-all duration-500 transform ${
            showToast
              ? 'translate-x-0 opacity-100 scale-100'
              : 'translate-x-full opacity-0 scale-95'
          }`}
        >
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-4 rounded-2xl shadow-2xl backdrop-blur-sm border border-green-400/30">
            <div className="flex items-center gap-3">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="font-semibold">
                Registration Submitted Successfully!
              </span>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join 20,000+ successful students and achieve your academic goals
              with Dr.&nbsp;Noor Academy
            </p>
          </div>

          {/* Ultra-Modern Glassmorphism Form */}
          <div className="relative">
            {/* Glassmorphism Card */}
            <div className="bg-navy-900/20 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:border-yellow-400/20">
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-blue-400/5 rounded-3xl"></div>

              <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Full Name Field */}
                  <div className="relative group">
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="peer w-full px-6 pt-6 pb-2 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50 transition-all duration-300 hover:bg-white/10 shadow-lg hover:shadow-xl focus:shadow-yellow-400/20"
                      placeholder="Full Name"
                      required
                    />
                    <label
                      className={`absolute left-6 transition-all duration-300 pointer-events-none ${
                        formData.fullName
                          ? 'top-2 text-xs text-yellow-400 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 px-2 py-0.5 rounded-md shadow-lg'
                          : 'top-1/2 -translate-y-1/2 text-gray-300 peer-focus:top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-yellow-400 peer-focus:bg-gradient-to-r peer-focus:from-navy-900 peer-focus:via-navy-800 peer-focus:to-navy-900 peer-focus:px-2 peer-focus:py-0.5 peer-focus:rounded-md peer-focus:shadow-lg'
                      }`}
                    >
                      Full Name
                    </label>
                  </div>

                  {/* Email Field */}
                  <div className="relative group">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="peer w-full px-6 pt-6 pb-2 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50 transition-all duration-300 hover:bg-white/10 shadow-lg hover:shadow-xl focus:shadow-yellow-400/20"
                      placeholder="Email Address"
                      required
                    />
                    <label
                      className={`absolute left-6 transition-all duration-300 pointer-events-none ${
                        formData.email
                          ? 'top-2 text-xs text-yellow-400 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 px-2 py-0.5 rounded-md shadow-lg'
                          : 'top-1/2 -translate-y-1/2 text-gray-300 peer-focus:top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-yellow-400 peer-focus:bg-gradient-to-r peer-focus:from-navy-900 peer-focus:via-navy-800 peer-focus:to-navy-900 peer-focus:px-2 peer-focus:py-0.5 peer-focus:rounded-md peer-focus:shadow-lg'
                      }`}
                    >
                      Email Address
                    </label>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Phone Field */}
                  <div className="relative group">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="peer w-full px-6 pt-6 pb-2 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50 transition-all duration-300 hover:bg-white/10 shadow-lg hover:shadow-xl focus:shadow-yellow-400/20"
                      placeholder="Phone Number"
                      required
                    />
                    <label
                      className={`absolute left-6 transition-all duration-300 pointer-events-none ${
                        formData.phone
                          ? 'top-2 text-xs text-yellow-400 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 px-2 py-0.5 rounded-md shadow-lg'
                          : 'top-1/2 -translate-y-1/2 text-gray-300 peer-focus:top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-yellow-400 peer-focus:bg-gradient-to-r peer-focus:from-navy-900 peer-focus:via-navy-800 peer-focus:to-navy-900 peer-focus:px-2 peer-focus:py-0.5 peer-focus:rounded-md peer-focus:shadow-lg'
                      }`}
                    >
                      Phone Number
                    </label>
                  </div>

                  {/* Parent Contact Number Field */}
                  <div className="relative group">
                    <input
                      type="tel"
                      name="parentContact"
                      value={formData.parentContact}
                      onChange={handleInputChange}
                      className="peer w-full px-6 pt-6 pb-2 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50 transition-all duration-300 hover:bg-white/10 shadow-lg hover:shadow-xl focus:shadow-yellow-400/20"
                      placeholder="Parent Contact Number"
                      required
                    />
                    <label
                      className={`absolute left-6 transition-all duration-300 pointer-events-none ${
                        formData.parentContact
                          ? 'top-2 text-xs text-yellow-400 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 px-2 py-0.5 rounded-md shadow-lg'
                          : 'top-1/2 -translate-y-1/2 text-gray-300 peer-focus:top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-yellow-400 peer-focus:bg-gradient-to-r peer-focus:from-navy-900 peer-focus:via-navy-800 peer-focus:to-navy-900 peer-focus:px-2 peer-focus:py-0.5 peer-focus:rounded-md peer-focus:shadow-lg'
                      }`}
                    >
                      Parent Contact Number
                    </label>
                  </div>
                </div>

                {/* Class Type Selection */}
                <div className="space-y-4">
                  <label className="block text-lg font-semibold text-yellow-400 mb-4">
                    Class Type
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { value: 'online-class', label: 'Online Class' },
                      {
                        value: 'recorded-lectures',
                        label: 'Recorded Lectures',
                      },
                      { value: 'on-campus', label: 'On Campus' },
                    ].map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => {
                          setFormData((prev) => ({
                            ...prev,
                            classType: option.value,
                            campus:
                              option.value !== 'on-campus' ? '' : prev.campus,
                            city: option.value === 'on-campus' ? '' : prev.city,
                            country:
                              option.value === 'on-campus' ? '' : prev.country,
                          }));
                        }}
                        className={`relative p-4 rounded-2xl border-2 transition-all duration-300 ${
                          formData.classType === option.value
                            ? 'border-yellow-400 bg-yellow-400/10 text-yellow-400'
                            : 'border-white/20 bg-white/5 text-gray-300 hover:border-yellow-400/50 hover:bg-yellow-400/5'
                        }`}
                      >
                        <div className="flex items-center justify-center space-x-2">
                          <div
                            className={`w-4 h-4 rounded-full border-2 ${
                              formData.classType === option.value
                                ? 'border-yellow-400 bg-yellow-400'
                                : 'border-gray-400'
                            }`}
                          >
                            {formData.classType === option.value && (
                              <div className="w-full h-full rounded-full bg-yellow-400"></div>
                            )}
                          </div>
                          <span className="font-medium">{option.label}</span>
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Campus Selection Dropdown for On Campus */}
                  {formData.classType === 'on-campus' && (
                    <div className="mt-4">
                      <label className="block text-sm font-medium text-gray-300 mb-3">
                        Select Campus
                      </label>
                      <div className="relative">
                        <select
                          name="campus"
                          value={formData.campus}
                          onChange={handleInputChange}
                          className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50 transition-all duration-300 hover:bg-white/10 shadow-lg hover:shadow-xl focus:shadow-yellow-400/20 appearance-none cursor-pointer"
                          required
                        >
                          <option
                            value=""
                            className="bg-navy-900 text-gray-300"
                          >
                            Select a campus...
                          </option>
                          <option
                            value="Bahudrabad"
                            className="bg-navy-900 text-white"
                          >
                            Bahudrabad
                          </option>
                          <option
                            value="Malir"
                            className="bg-navy-900 text-white"
                          >
                            Malir
                          </option>
                          <option
                            value="North Nazimabad"
                            className="bg-navy-900 text-white"
                          >
                            North Nazimabad
                          </option>
                          <option
                            value="Gulshan"
                            className="bg-navy-900 text-white"
                          >
                            Gulshan
                          </option>
                          <option
                            value="Johar"
                            className="bg-navy-900 text-white"
                          >
                            Johar
                          </option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-6 pointer-events-none">
                          <svg
                            className="w-5 h-5 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* City and Country Selection for Online Class and Recorded Lectures */}
                  {(formData.classType === 'online-class' ||
                    formData.classType === 'recorded-lectures') && (
                    <div className="mt-4 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* City Input */}
                        <div className="relative">
                          <label className="block text-sm font-medium text-gray-300 mb-3">
                            City
                          </label>
                          <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50 transition-all duration-300 hover:bg-white/10 shadow-lg hover:shadow-xl focus:shadow-yellow-400/20"
                            placeholder="Enter your city"
                            required
                          />
                        </div>

                        {/* Country Selection */}
                        <div className="relative">
                          <label className="block text-sm font-medium text-gray-300 mb-3">
                            Country
                          </label>
                          <select
                            name="country"
                            value={formData.country}
                            onChange={handleInputChange}
                            className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50 transition-all duration-300 hover:bg-white/10 shadow-lg hover:shadow-xl focus:shadow-yellow-400/20 appearance-none cursor-pointer"
                            required
                          >
                            <option
                              value=""
                              className="bg-navy-900 text-gray-300"
                            >
                              Select country...
                            </option>
                            <option
                              value="Pakistan"
                              className="bg-navy-900 text-white"
                            >
                              Pakistan
                            </option>
                            <option
                              value="India"
                              className="bg-navy-900 text-white"
                            >
                              India
                            </option>
                            <option
                              value="Bangladesh"
                              className="bg-navy-900 text-white"
                            >
                              Bangladesh
                            </option>
                            <option
                              value="United Kingdom"
                              className="bg-navy-900 text-white"
                            >
                              United Kingdom
                            </option>
                            <option
                              value="United States"
                              className="bg-navy-900 text-white"
                            >
                              United States
                            </option>
                            <option
                              value="Canada"
                              className="bg-navy-900 text-white"
                            >
                              Canada
                            </option>
                            <option
                              value="Australia"
                              className="bg-navy-900 text-white"
                            >
                              Australia
                            </option>
                            <option
                              value="UAE"
                              className="bg-navy-900 text-white"
                            >
                              UAE
                            </option>
                            <option
                              value="Saudi Arabia"
                              className="bg-navy-900 text-white"
                            >
                              Saudi Arabia
                            </option>
                            <option
                              value="Qatar"
                              className="bg-navy-900 text-white"
                            >
                              Qatar
                            </option>
                            <option
                              value="Kuwait"
                              className="bg-navy-900 text-white"
                            >
                              Kuwait
                            </option>
                            <option
                              value="Oman"
                              className="bg-navy-900 text-white"
                            >
                              Oman
                            </option>
                            <option
                              value="Bahrain"
                              className="bg-navy-900 text-white"
                            >
                              Bahrain
                            </option>
                            <option
                              value="Other"
                              className="bg-navy-900 text-white"
                            >
                              Other
                            </option>
                          </select>
                          <div className="absolute inset-y-0 right-0 flex items-center pr-6 pointer-events-none mt-8">
                            <svg
                              className="w-5 h-5 text-gray-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Country Specification Input - appears when "Other" is selected */}
                      {formData.country === 'Other' && (
                        <div className="relative">
                          <label className="block text-sm font-medium text-gray-300 mb-3">
                            Please specify your country
                          </label>
                          <input
                            type="text"
                            name="countrySpecification"
                            value={formData.countrySpecification}
                            onChange={handleInputChange}
                            className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50 transition-all duration-300 hover:bg-white/10 shadow-lg hover:shadow-xl focus:shadow-yellow-400/20"
                            placeholder="Please specify your country"
                            required
                          />
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Conditional Email Field for Recorded Lectures */}
                {formData.classType === 'recorded-lectures' && (
                  <div className="relative group">
                    <input
                      type="email"
                      name="recordedLecturesEmail"
                      value={formData.recordedLecturesEmail}
                      onChange={handleInputChange}
                      className="peer w-full px-6 pt-6 pb-2 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50 transition-all duration-300 hover:bg-white/10 shadow-lg hover:shadow-xl focus:shadow-yellow-400/20"
                      placeholder="Email Address for Recorded Lectures"
                      required
                    />
                    <label
                      className={`absolute left-6 transition-all duration-300 pointer-events-none ${
                        formData.recordedLecturesEmail
                          ? 'top-2 text-xs text-yellow-400 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 px-2 py-0.5 rounded-md shadow-lg'
                          : 'top-1/2 -translate-y-1/2 text-gray-300 peer-focus:top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-yellow-400 peer-focus:bg-gradient-to-r peer-focus:from-navy-900 peer-focus:via-navy-800 peer-focus:to-navy-900 peer-focus:px-2 peer-focus:py-0.5 peer-focus:rounded-md peer-focus:shadow-lg'
                      }`}
                    >
                      Email Address for Recorded Lectures
                    </label>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Subject Field */}
                  <div className="relative group">
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="peer w-full px-6 pt-6 pb-2 bg-white/5 border border-white/20 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50 transition-all duration-300 hover:bg-white/10 appearance-none shadow-lg hover:shadow-xl focus:shadow-yellow-400/20 backdrop-blur-sm"
                      required
                    >
                      <option value="" disabled hidden></option>
                      <option
                        value="biology"
                        className="text-gray-900 bg-white"
                      >
                        Biology
                      </option>
                      <option
                        value="chemistry"
                        className="text-gray-900 bg-white"
                      >
                        Chemistry
                      </option>
                      <option value="both" className="text-gray-900 bg-white">
                        Both Biology & Chemistry
                      </option>
                    </select>
                    <label
                      className={`absolute left-6 transition-all duration-300 pointer-events-none ${
                        formData.subject
                          ? 'top-2 text-xs text-yellow-400 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 px-2 py-0.5 rounded-md shadow-lg'
                          : 'top-1/2 -translate-y-1/2 text-gray-300 peer-focus:top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-yellow-400 peer-focus:bg-gradient-to-r peer-focus:from-navy-900 peer-focus:via-navy-800 peer-focus:to-navy-900 peer-focus:px-2 peer-focus:py-0.5 peer-focus:rounded-md peer-focus:shadow-lg'
                      }`}
                    >
                      Subject Interest
                    </label>
                    {/* Custom dropdown arrow with glow effect */}
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none group-focus-within:text-yellow-400 transition-colors duration-300">
                      <svg
                        className="w-5 h-5 text-gray-300 group-focus-within:text-yellow-400 transition-colors duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Exam Session Field */}
                  <div className="relative group">
                    <select
                      name="examSession"
                      value={formData.examSession}
                      onChange={handleInputChange}
                      className="peer w-full px-6 pt-6 pb-2 bg-white/5 border border-white/20 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50 transition-all duration-300 hover:bg-white/10 appearance-none shadow-lg hover:shadow-xl focus:shadow-yellow-400/20 backdrop-blur-sm"
                      required
                    >
                      <option value="" disabled hidden></option>
                      <option
                        value="may-june"
                        className="text-gray-900 bg-white"
                      >
                        May/June
                      </option>
                      <option
                        value="oct-nov"
                        className="text-gray-900 bg-white"
                      >
                        Oct/Nov
                      </option>
                    </select>
                    <label
                      className={`absolute left-6 transition-all duration-300 pointer-events-none ${
                        formData.examSession
                          ? 'top-2 text-xs text-yellow-400 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 px-2 py-0.5 rounded-md shadow-lg'
                          : 'top-1/2 -translate-y-1/2 text-gray-300 peer-focus:top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-yellow-400 peer-focus:bg-gradient-to-r peer-focus:from-navy-900 peer-focus:via-navy-800 peer-focus:to-navy-900 peer-focus:px-2 peer-focus:py-0.5 peer-focus:rounded-md peer-focus:shadow-lg'
                      }`}
                    >
                      Exam Session
                    </label>
                    {/* Custom dropdown arrow with glow effect */}
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none group-focus-within:text-yellow-400 transition-colors duration-300">
                      <svg
                        className="w-5 h-5 text-gray-300 group-focus-within:text-yellow-400 transition-colors duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Level Field Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Level Field */}
                  <div className="relative group">
                    <select
                      name="level"
                      value={formData.level}
                      onChange={handleInputChange}
                      className="peer w-full px-6 pt-6 pb-2 bg-white/5 border border-white/20 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50 transition-all duration-300 hover:bg-white/10 appearance-none shadow-lg hover:shadow-xl focus:shadow-yellow-400/20 backdrop-blur-sm"
                      required
                    >
                      <option value="" disabled hidden></option>
                      <option
                        value="as-level"
                        className="text-gray-900 bg-white"
                      >
                        AS Level
                      </option>
                      <option
                        value="a2-level"
                        className="text-gray-900 bg-white"
                      >
                        A2 Level
                      </option>
                      <option
                        value="o-levels"
                        className="text-gray-900 bg-white"
                      >
                        O Levels
                      </option>
                      <option value="igcse" className="text-gray-900 bg-white">
                        IGCSE
                      </option>
                    </select>
                    <label
                      className={`absolute left-6 transition-all duration-300 pointer-events-none ${
                        formData.level
                          ? 'top-2 text-xs text-yellow-400 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 px-2 py-0.5 rounded-md shadow-lg'
                          : 'top-1/2 -translate-y-1/2 text-gray-300 peer-focus:top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-yellow-400 peer-focus:bg-gradient-to-r peer-focus:from-navy-900 peer-focus:via-navy-800 peer-focus:to-navy-900 peer-focus:px-2 peer-focus:py-0.5 peer-focus:rounded-md peer-focus:shadow-lg'
                      }`}
                    >
                      Level
                    </label>
                    {/* Custom dropdown arrow with glow effect */}
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none group-focus-within:text-yellow-400 transition-colors duration-300">
                      <svg
                        className="w-5 h-5 text-gray-300 group-focus-within:text-yellow-400 transition-colors duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Message Field */}
                <div className="relative group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="peer w-full px-6 pt-6 pb-2 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50 transition-all duration-300 hover:bg-white/10 resize-none shadow-lg hover:shadow-xl focus:shadow-yellow-400/20"
                    placeholder="Message"
                  />
                  <label
                    className={`absolute left-6 transition-all duration-300 pointer-events-none ${
                      formData.message
                        ? 'top-2 text-xs text-yellow-400 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 px-2 py-0.5 rounded-md shadow-lg'
                        : 'top-6 text-gray-300 peer-focus:top-2 peer-focus:text-xs peer-focus:text-yellow-400 peer-focus:bg-gradient-to-r peer-focus:from-navy-900 peer-focus:via-navy-800 peer-focus:to-navy-900 peer-focus:px-2 peer-focus:py-0.5 peer-focus:rounded-md peer-focus:shadow-lg'
                    }`}
                  >
                    Message (Optional)
                  </label>
                </div>

                {/* Submit Button */}
                <div className="text-center pt-4">
                  <button
                    type="submit"
                    className="group relative inline-flex items-center gap-4 px-12 py-5 bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 text-navy-900 font-bold text-lg rounded-2xl shadow-2xl hover:shadow-yellow-400/30 transition-all duration-500 hover:scale-105 hover:shadow-3xl transform-gpu"
                  >
                    {/* Button glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-amber-400 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

                    {/* Icon */}
                    <svg
                      className="w-6 h-6 group-hover:scale-110 transition-transform duration-300 relative z-10"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>

                    {/* Text */}
                    <span className="relative z-10">Enroll Now</span>

                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-700 transform -skew-x-12 group-hover:animate-pulse"></div>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
