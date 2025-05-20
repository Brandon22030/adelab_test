import Image from 'next/image';
import React from 'react';

const Mission = () => {
  return (
    <section className="pt-12 md:py-15 w-full pb-5">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6">
        {/* Logo and Title */}
        <div className="mb-12 md:mb-16">
          <p className="text-lg md:text-3xl md:font-black font-bold text-gray-900 text-center px-5">
            Association du Risk Management des Lieux de Culte
          </p>
        </div>

        {/* Values with Wavy Line */}
        <div className="relative">
          {/* Top Values */}
          <div className="flex ml-10 md:ml-[10rem] md:space-x-60 gap-8 mb-8 md:mb-12 text-black">
            <div className="px-2 text-center">
              <h3 className="font-black text-xs md:text-lg mb-2 text-black">Solidarité</h3>
              <p className="text-xs md:text-lg">
                Se protéger, c&apos;est aussi <br/> protéger les autres
              </p>
            </div>

            <div className="px-2 text-center">
              <h3 className="font-black text-xs md:text-lg mb-2 text-black">Indépendance</h3>
              <p className="text-xs md:text-lg">Aucune influence <br /> commerciale</p>
            </div>
          </div>

          {/* Middle Section - Wave Image */}
          <div className="flex-1 flex items-center justify-center -my-5 md:-my-10">
            <div className="w-full max-w-4xl mx-auto">
              <Image
                src="/icones/icon-waves.svg"
                alt="Vague décorative"
                width={1000}
                height={100}
                className="hidden md:block w-full h-auto scale-125"
                priority
              />
              <Image
                src="/icones/icon-waves.svg"
                alt="Vague décorative"
                width={500}
                height={50}
                className="block md:hidden w-full h-auto"
              />
            </div>
          </div>

          {/* Bottom Values */}
          <div className="flex gap-6 md:gap-8 text-black mt-8 md:mt-12">
            <div className="px-2 text-center">
              <h3 className="font-black text-xs md:text-lg mb-2 text-black">Prévention</h3>
              <p className="text-xs md:text-lg">Anticiper les risques pour mieux les éviter</p>
            </div>

            <div className="px-2 text-center md:ml-40">
              <h3 className="font-black text-xs md:text-lg mb-2 text-black">Transparence</h3>
              <p className="text-xs md:text-lg">Des actions claires pour des objectifs partagés</p>
            </div>

            <div className="px-2 text-center md:ml-40">
              <h3 className="font-black text-xs md:text-lg mb-2 text-black">Responsabilité</h3>
              <p className="text-xs md:text-lg">Promouvoir la gestion du risque au service du bien commun</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
