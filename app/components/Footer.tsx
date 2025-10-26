'use client';

import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="mt-auto relative bg-gradient-to-br from-zinc-950 via-gray-900 to-slate-800 text-white">
      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* 4 Column Grid - Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Logo + Academy Intro */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Image
                  src="/logo.webp"
                  alt="Dr. Noor Academy"
                  width={48}
                  height={48}
                  className="rounded-full border-2 border-amber-400/50 shadow-lg"
                />
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-yellow-300 rounded-full opacity-20 blur-sm animate-pulse"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-amber-400">
                  Dr. Noor Academy
                </h3>
                <p className="text-sm text-gray-400">Excellence in Education</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering students with expert guidance in O/A Level Biology &
              Chemistry. Join 20,000+ successful students who achieved their
              academic dreams with us.
            </p>
            {/* Glowing Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent"></div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-amber-400 relative">
              Quick Links
              <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-amber-400 to-transparent"></div>
            </h4>
            <nav className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'Lectures', href: '/lectures' },
                { name: 'About', href: '/about' },
                { name: 'FAQ', href: '/faq' },
                { name: 'Enroll', href: '/enroll' },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-300 hover:text-amber-400 transition-all duration-300 group relative text-sm"
                >
                  <span className="relative z-10">{link.name}</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-300 group-hover:w-full transition-all duration-300 shadow-sm group-hover:shadow-amber-400/50"></div>
                </a>
              ))}
            </nav>
            {/* Glowing Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent lg:hidden"></div>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-amber-400 relative">
              Contact Info
              <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-amber-400 to-transparent"></div>
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <div className="p-2 bg-amber-400/10 rounded-lg group-hover:bg-amber-400/20 transition-colors duration-300">
                  <svg
                    className="w-4 h-4 text-amber-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wide">
                    Email
                  </p>
                  <a
                    href="mailto:drnooracademy@gmail.com"
                    className="text-gray-300 hover:text-amber-400 transition-colors duration-300 text-sm"
                  >
                    drnooracademy@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 group">
                <div className="p-2 bg-amber-400/10 rounded-lg group-hover:bg-amber-400/20 transition-colors duration-300">
                  <svg
                    className="w-4 h-4 text-amber-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wide">
                    Phone
                  </p>
                  <div className="space-y-1">
                    <a
                      href="tel:+923432532596"
                      className="block text-gray-300 hover:text-amber-400 transition-colors duration-300 text-sm"
                    >
                      +92 343 2532596
                    </a>
                    <a
                      href="tel:+923202011677"
                      className="block text-gray-300 hover:text-amber-400 transition-colors duration-300 text-sm"
                    >
                      +92 320 2011677
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3 group">
                <div className="p-2 bg-amber-400/10 rounded-lg group-hover:bg-amber-400/20 transition-colors duration-300">
                  <svg
                    className="w-4 h-4 text-amber-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wide">
                    Location
                  </p>
                  <p className="text-gray-300 text-sm">Karachi, Pakistan</p>
                </div>
              </div>
            </div>
            {/* Glowing Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent lg:hidden"></div>
          </div>

          {/* Column 4: Social Media */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-amber-400 relative">
              Follow Us
              <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-amber-400 to-transparent"></div>
            </h4>
            <div className="flex flex-col space-y-4">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/dr_noor_academy?igsh=MWduZGppbjd0YzQ4Mg%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-amber-400 transition-all duration-300 group"
              >
                <div className="p-3 bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-xl group-hover:from-pink-500/30 group-hover:to-purple-600/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-pink-500/20">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <span className="text-sm font-medium">Instagram</span>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com/@d.n.a.drnooracademy1460?si=gPnhcCvSNPCSZyLV"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-amber-400 transition-all duration-300 group"
              >
                <div className="p-3 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-xl group-hover:from-red-500/30 group-hover:to-red-600/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-red-500/20">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </div>
                <span className="text-sm font-medium">YouTube</span>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/DoctorNoorMuhammad?mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-amber-400 transition-all duration-300 group"
              >
                <div className="p-3 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl group-hover:from-blue-500/30 group-hover:to-blue-600/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/20">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                <span className="text-sm font-medium">Facebook</span>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/923432532596"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-amber-400 transition-all duration-300 group"
              >
                <div className="p-3 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl group-hover:from-green-500/30 group-hover:to-green-600/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-green-500/20">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                </div>
                <span className="text-sm font-medium">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="text-center">
            <p className="text-sm text-gray-400 hover:text-amber-400 transition-colors duration-300 cursor-default">
              Developed by{' '}
              <span className="font-medium hover:text-amber-400 transition-colors duration-300">
                Syed Murtaza
              </span>{' '}
              |{' '}
              <a
                href="mailto:smurtazaemail@gmail.com"
                className="hover:text-amber-400 transition-colors duration-300 underline decoration-transparent hover:decoration-amber-400"
              >
                smurtazaemail@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl pointer-events-none"></div>
    </footer>
  );
};

export default Footer;
