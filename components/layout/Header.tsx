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
      <div className="w-full max-w-[1280px] mx-auto px-4 py-4 flex justify-between items-center relative">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-900 flex items-center">
          {/* Desktop Logo */}
          <Image
            src="/icones/logoDesktop.svg"
            alt="Logo ARMLC"
            width={100}
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
          <div className="fixed inset-0 w-full h-full bg-white z-50 md:hidden overflow-y-auto">
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
            <ul className="flex flex-col items-center w-full">
              {menuLinks.map((link, index) => (
                <li
                  key={index}
                  className="w-full border-b border-amber-400 py-4 active:bg-[#fbf7ce] hover:bg-[#fbf7ce] transition-colors duration-200 cursor-pointer"
                >
                  <div className="w-full h-full">
                    <p className="text-black pl-5 text-xl font-semibold">{link.label}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {/* Mobile Menu Toggle Button */}
        <button className="md:hidden text-gray-900" onClick={toggleMenu} aria-label="Open menu">
          <FaBars size={24} />
        </button>
      </div>
    </header>
  );
}