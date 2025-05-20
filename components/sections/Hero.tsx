import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative pt-16 pb-12 md:py-20 lg:py-24">
      <div className="mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center">
          {/* Texte et CTA */}
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8 md:ml-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-7 text-center md:text-left">
              Ensemble, protégeons nos lieux de culte
            </h1>
            <p className="text-gray-700 mb-6 text-base md:text-lg text-center md:text-left">
              Notre mission est d&apos;accompagner les lieux de culte musulmans en Frande dans une
              démarche proactive de gestion des risques (risk management), afin de garantir la
              sécurité des fidèles, la protection des biens et la continuité des activités
              culturelles.
            </p>
          </div>

          {/* Image illustrative */}
          <div className="md:w-1/2 relative">
            <div className="aspect-w-16 aspect-h-9">
              <Image
                src="/mosque-illustration.svg"
                alt="Illustration de mosquée"
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
