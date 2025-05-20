import React from 'react';

const Mission = () => {
  return (
    <section className="py-8 md:py-16 text-center w-full">
      <div className="w-full max-w-4xl mx-auto">
        {/* Logo and Title */}
        <div className="mb-10">
          {/* <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-1">ARMLC</h2> */}
          <p className="text-xl md:text-2xl text-black font-black">
            Association du Risk Management des Lieux de Culte
          </p>
        </div>

        {/* Values with Wavy Line */}
        <div className="relative ">
          {/* Top Values */}
          <div className="flex justify-between mb-6 md:mb-8 text-black">
            <div className="w-1/2 px-2">
              <h3 className="font-bold text-sm md:text-sm mb-1">Solidarité</h3>
              <p className="text-sm md:text-sm">
                Se protéger, c&apos;est aussi <br className="hidden md:block" /> protéger les autres
              </p>
            </div>

            <div className="w-1/2 px-2">
              <h3 className="font-bold text-sm md:text-sm mb-1">Indépendance</h3>
              <p className="text-sm md:text-sm ">Aucune influence <br className="hidden md:block" /> commerciale</p>
            </div>
          </div>

          {/* The SVG Wave */}
          <div className="mx-auto my-4 md:my-6">
            <svg viewBox="0 0 500 50" className="w-full h-8 md:h-12">
              <path
                d="M0,25 C75,0 175,50 250,25 C325,0 425,50 500,25"
                fill="none"
                stroke="#F59E0B"
                strokeWidth="3"
              />
            </svg>
          </div>

          {/* Bottom Values */}
          <div className="grid grid-cols-3 md:gap-7 text-black justify-between mt-4 md:mt-6">
            <div className="px-1">
              <h3 className="font-bold text-sm md:text-sm mb-1">Prévention</h3>
              <p className="text-sm md:text-sm">Anticiper les risques pour <br className="hidden md:block" /> mieux les éviter</p>
            </div>

            <div className="px-1">
              <h3 className="font-bold text-sm md:text-sm mb-1">Transparence</h3>
              <p className="text-sm md:text-sm">Des actions claires pour <br className="hidden md:block" /> des objectifs partagés</p>
            </div>

            <div className="px-1">
              <h3 className="font-bold text-sm md:text-sm mb-1">Responsabilité</h3>
              <p className="text-sm md:text-sm ">
                Promouvoir une culture du risque <br className="hidden md:block" /> au service du bien commun
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
