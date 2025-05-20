import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#fbf7ce] text-white">
      <div className="container mx-auto">
        <div className="py-16 border-b border-black mx-5">
          <div className="md:flex md:space-x-60">
            {/* Logo */}
            <div >
              {/* Desktop Logo */}
              <Image
                src="/icones/logoDesktop.svg"
                alt="Logo ARMLC"
                width={100}
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

            <div className="flex gap-7 md:space-x-60 md:justify-between">
              {/* Liens Rapides */}
              <div className="text-black">
                <h4 className="text-md font-black mb-4">Ressources</h4>
                <ul className="space-y-2 ">
                  <li className="">
                    <p className="hover:text-amber-400 text-sm transition cursor-pointer">
                      MCB Mosque Safety Guide
                    </p>
                  </li>
                  <li>
                    <p className="hover:text-amber-400 text-sm transition cursor-pointer">
                      Risk Assessment Guidance
                    </p>
                  </li>
                  <li>
                    <p className="hover:text-amber-400 text-sm transition cursor-pointer">
                      Risk Assessment Simply
                    </p>
                  </li>
                  <li>
                    <p className="hover:text-amber-400 text-sm transition cursor-pointer">
                      Mosque Insurance
                    </p>
                  </li>
                  <li>
                    <p className="hover:text-amber-400 text-sm transition cursor-pointer">
                      Risk Management Policy
                    </p>
                  </li>
                </ul>
              </div>

              {/* Coordonnées et Réseaux Sociaux */}
              <div className="text-black md:mr-[10rem]">
                <h4 className="text-md font-black mb-4">Contact</h4>
                <div className="space-y-2 mb-4">
                  <div>
                    <p className="text-sm">contact@armlc.fr</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="py-6 text-center">
        <p className="text-black font-semibold">
          ARMLC &copy; {currentYear} - Association loi 1901
        </p>
      </div>
    </footer>
  );
};

export default Footer;
