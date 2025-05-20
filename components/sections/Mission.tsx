import Image from 'next/image';
import React from 'react';

const Mission = () => {
  return (
    <section className="pt-12 md:py-16 lg:py-20 w-full pb-5">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6">
        {/* Logo and Title */}
        <div className="mb-12 md:mb-16">
          <p className="text-lg md:text-2xl lg:text-4xl font-bold text-gray-900 text-center px-5">
            Association du Risk Management des Lieux de Culte
          </p>
        </div>

        {/* Values with Wavy Line */}
        <div className="relative">
          {/* Top Values */}
          <div className="flex justify-between gap-8 mb-8 md:mb-12 text-black">
            <div className="px-2 text-center">
              <h3 className="font-black text-sm md:text-xl mb-2 text-black">Solidarité</h3>
              <p className="text-sm md:text-lg">
                Se protéger, c&apos;est aussi protéger les autres
              </p>
            </div>

            <div className="px-2 text-center">
              <h3 className="font-black text-sm md:text-xl mb-2 text-black">Indépendance</h3>
              <p className="text-sm md:text-lg">Aucune influence commerciale</p>
            </div>
          </div>

          {/* Middle Section - Wave Image */}
          <div className="flex-1 flex items-center justify-center my-4">
            <div className="w-full max-w-2xl mx-auto">
              <Image
                src="/icones/icon-waves.svg"
                alt="Vague décorative"
                width={500}
                height={50}
                className="hidden md:block w-full h-auto"
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
              <h3 className="font-black text-sm md:text-xl mb-2 text-black">Prévention</h3>
              <p className="text-sm md:text-lg">Anticiper les risques pour mieux les éviter</p>
            </div>

            <div className="px-2 text-center">
              <h3 className="font-black text-sm md:text-xl mb-2 text-black">Formation</h3>
              <p className="text-sm md:text-lg">Savoir réagir face aux dangers</p>
            </div>

            <div className="px-2 text-center">
              <h3 className="font-black text-sm md:text-xl mb-2 text-black">Sécurité</h3>
              <p className="text-sm md:text-lg">Protéger les personnes et les biens</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
