'use client';

import { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

interface LazyFAQSectionProps {
  isVisible: boolean;
}

const LazyFAQSection = ({ isVisible }: LazyFAQSectionProps) => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs: FAQ[] = [
    {
      question: 'What subjects does Dr. Noor teach?',
      answer:
        'Dr. Noor specializes in O Level and A Level Biology and Chemistry. With over 15 years of experience, she provides comprehensive coverage of both theoretical concepts and practical applications.',
    },
    {
      question: 'What are the class timings and schedule?',
      answer:
        'We offer flexible timings to accommodate different student schedules. Classes are available in morning, afternoon, and evening slots. Weekend sessions are also available for working students.',
    },
    {
      question: 'How can I enroll in the classes?',
      answer:
        'You can enroll by contacting us through WhatsApp, phone, or by visiting our academy. We offer both individual and group enrollment options with flexible payment plans.',
    },
    {
      question: 'Do you provide online classes?',
      answer:
        'Yes, we offer both in-person and online classes. Our online sessions are interactive with live demonstrations, recorded lectures for revision, and personalized attention to each student.',
    },
    {
      question: 'What is the fee structure?',
      answer:
        'Our fee structure is competitive and varies based on the subject, level (O Level/A Level), and class format (individual/group). Contact us for detailed fee information and available discounts.',
    },
    {
      question: 'Do you provide study materials?',
      answer:
        'Yes, we provide comprehensive study materials including notes, past papers, practical guides, and additional resources. All materials are regularly updated according to the latest syllabus.',
    },
    {
      question: 'What is your success rate?',
      answer:
        'We have an excellent track record with over 95% of our students achieving A* and A grades. Many of our students have secured admissions in top universities worldwide.',
    },
    {
      question: 'Do you offer trial classes?',
      answer:
        'Yes, we offer a free trial class so you can experience our teaching methodology and decide if it suits your learning style. Contact us to schedule your trial session.',
    },
  ];

  return (
    <section
      id="faq"
      className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-amber-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-teal-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-navy-400/15 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ❓ Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our courses and services
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Glassmorphism Card */}
              <div className="group relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 hover:border-amber-400/50 hover:bg-white/15">
                {/* Glowing border effect on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-amber-400/20 via-transparent to-amber-400/20 blur-sm"></div>

                {/* Question Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="relative w-full px-6 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300 group-hover:bg-white/10"
                >
                  <span className="text-lg font-semibold text-white pr-4 group-hover:text-amber-100 transition-colors duration-300">
                    {faq.question}
                  </span>

                  {/* Plus/Minus Icon with rotation */}
                  <div
                    className={`flex-shrink-0 w-8 h-8 flex items-center justify-center transition-all duration-500 ${
                      openFAQ === index
                        ? 'rotate-180 scale-110'
                        : 'rotate-0 scale-100'
                    }`}
                  >
                    <div className="relative">
                      {/* Plus Icon */}
                      <svg
                        className={`absolute w-6 h-6 text-amber-400 transition-all duration-300 ${
                          openFAQ === index
                            ? 'opacity-0 rotate-90'
                            : 'opacity-100 rotate-0'
                        }`}
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

                      {/* Minus Icon */}
                      <svg
                        className={`absolute w-6 h-6 text-amber-400 transition-all duration-300 ${
                          openFAQ === index
                            ? 'opacity-100 rotate-0'
                            : 'opacity-0 -rotate-90'
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M18 12H6"
                        />
                      </svg>
                    </div>
                  </div>
                </button>

                {/* Answer Content with smooth slide + fade animation */}
                <div
                  className={`overflow-hidden transition-all duration-700 ease-out ${
                    openFAQ === index
                      ? 'max-h-96 opacity-100 translate-y-0'
                      : 'max-h-0 opacity-0 -translate-y-4'
                  }`}
                >
                  <div className="px-6 pb-6 border-t border-amber-400/20">
                    <div
                      className={`pt-4 transition-all duration-500 delay-100 ${
                        openFAQ === index
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-2'
                      }`}
                    >
                      <p className="text-gray-200 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LazyFAQSection;