'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
// import Button from '../ui/Button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuLinks = [
    { label: 'Nos Engagements' },
    { label: 'Pourquoi se protéger ?' },
    { label: "Bénéfices de l'adhésion" },
    { label: 'Rester informer' },
  ];

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="w-full max-w-[1280px] mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-900 flex items-center">
          {/* Desktop Logo */}
          <Image
            src="/icones/logoDesktop.svg"
            alt="Logo ARMLC"
            width={200}
            height={60}
            priority
            className="hidden md:block object-contain transition-transform duration-500 ease-in-out hover:scale-105"
          />
          {/* Mobile Logo */}
          <Image
            src="/icones/logoMobile.svg"
            alt="Logo ARMLC"
            width={120}
            height={40}
            priority
            className="block md:hidden object-contain transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {menuLinks.map((link, index) => (
            <p
              key={index}
              className="text-black text-sm font-black hover:text-amber-400 transition cursor-pointer"
            >
              {link.label}
            </p>
          ))}
        </nav>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 left-0 top-0 bg-white z-50 md:hidden w-screen overflow-x-hidden">
            {/* Mobile Menu Header */}
            <div className="flex justify-between items-center p-4">
              <Link href="/" className="flex items-center">
                <Image
                  src="/icones/logoMobile.svg"
                  alt="Logo ARMLC"
                  width={100}
                  height={40}
                  className="object-contain"
                />
              </Link>

              {/* Close Button */}
              <button onClick={toggleMenu} aria-label="Close menu" className="text-black">
                <FaTimes size={24} />
              </button>
            </div>

            {/* Mobile Menu Links */}
            <ul className="flex flex-col items-center">
              {menuLinks.map((link, index) => (
                <li
                  key={index}
                  className="w-full border-b border-amber-400 py-4 hover:bg-[#fbf7ce] transition cursor-pointer"
                >
                  <p className="text-black pl-5 text-xl font-semibold">{link.label}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-gray-900" onClick={toggleMenu} aria-label="Open menu">
          <FaBars size={24} />
        </button>
      </div>
    </header>
  );
}
