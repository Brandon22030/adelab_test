"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
// import Button from '../ui/Button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuLinks = [
    { label: "Nos Engagements" },
    { label: "Pourquoi se protéger ?" },
    { label: "Bénéfices de l'adhésion" },
    { label: "Rester informer" },
  ];

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-gray-900 flex items-center"
        >
          {/* Desktop Logo */}
          <Image
            src="/icones/logoDesktop.svg"
            alt="Logo ARMLC"
            width={200}
            height={60}
            className="hidden md:block object-contain transition-transform duration-500 ease-in-out hover:scale-105"
          />
          {/* Mobile Logo */}
          <Image
            src="/icones/logoMobile.svg"
            alt="Logo ARMLC"
            width={120}
            height={40}
            className="block md:hidden object-contain transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </Link>

        {/* Navigation Links */}
        <nav
          className={`
          fixed top-0 right-0 h-full w-64 bg-white transform transition-transform duration-300 ease-in-out
          md:static md:w-auto md:translate-x-0 md:bg-transparent
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
          z-50 shadow-lg md:shadow-none
        `}
        >
          <div className="flex flex-col md:flex-row items-center h-full p-8 md:p-0">
            {/* Mobile Close Button */}
            <button
              className="md:hidden absolute top-4 right-4 text-gray-900"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <FaTimes size={24} />
            </button>

            {/* Menu Links */}
            <ul className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 w-full">
              {menuLinks.map((link, index) => (
                <li key={index} className="w-full md:w-auto text-center">
                  <p
                    className="text-black text-sm font-black hover:text-amber-400 transition block md:inline cursor-pointer"
                  >
                    {link.label}
                  </p>
                </li>
              ))} 
            </ul>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-900"
          onClick={toggleMenu}
          aria-label="Open menu"
        >
          <FaBars size={24} />
        </button>
      </div>
    </header>
  );
}
