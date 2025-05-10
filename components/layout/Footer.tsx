import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#fbf7ce] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:mx-28">
          {/* Logo */}
          <div>
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
          </div>

          <div className="flex gap-7 md:gap-25 md:justify-between">
            {/* Liens Rapides */}
            <div className="text-black">
              <h4 className="text-lg font-black mb-4">Ressources</h4>
              <ul className="space-y-2 ">
                <li className="">
                  <p className="hover:text-amber-400 transition cursor-pointer">
                    MCB Mosque Safety Guide On Mosque
                  </p>
                </li>
                <li>
                  <p className="hover:text-amber-400 transition cursor-pointer">
                    Risk Assessment Guidance.url
                  </p>
                </li>
                <li>
                  <p className="hover:text-amber-400 transition cursor-pointer">
                    Risk Assessment Simply Mosque Insurance
                  </p>
                </li>
                <li>
                  <p className="hover:text-amber-400 transition cursor-pointer">
                    Risk Management Policy
                  </p>
                </li>
              </ul>
            </div>

            {/* Coordonnées et Réseaux Sociaux */}
            <div className="text-black">
              <h4 className="text-lg font-black mb-4">Contact</h4>
              <div className="space-y-2 mb-4">
                <div>
                  <p>Email</p>
                  <p>contact@armlc.fr</p>
                </div>
                <div>
                  <p>Téléphone</p>
                  <p>01 00 00 00 00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-black font-semibold">
            ARMLC &copy; {currentYear} - Association loi 1901
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
