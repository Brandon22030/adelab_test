import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative pt-12 md:pt-5 md:pb-16 w-full overflow-hidden">
      <div className="w-full relative z-10 mt-15">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Texte et CTA */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1 md:ml-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center lg:text-left">
              Ensemble, <br className=" md:hidden block" />protégeons <br/> nos lieux de culte
            </h1>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed text-center lg:text-left mx-6 md:mx-0">
              Notre mission est d&apos;accompagner les lieux de culte musulmans en France dans une
              démarche proactive de gestion des risques (risk management), afin de garantir la
              sécurité des fidèles, la protection des biens et la continuité des activités
              culturelles.
            </p>
          </div>

          {/* Conteneur de l'image avec cercle de fond */}
          <div className="w-full lg:w-1/2 relative order-1 lg:order-2">
            {/* Cercle jaune de fond - Parfaitement rond avec un ratio 1:1 */}
            <div className="absolute -z-10 w-[200vmin] h-[200vmin] -right-[90vmin] -top-[155vmin] md:-right-[70vmin] md:-top-[30vmin] lg:-translate-y-1/2 bg-amber-400 rounded-full opacity-20"></div>
            
            {/* Image illustrative */}
            <div className="relative w-full h-[300px] md:h-[300px] lg:h-[400px] z-10">
              <Image
                src="/icones/icon-mosque.svg"
                alt="Illustration de mosquée"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 40vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
