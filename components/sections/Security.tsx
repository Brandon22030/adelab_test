import React from 'react';
import Image from 'next/image';

const Security = () => {
  const securityPoints = [
    {
      icon: '/icones/icone-identifier.svg',
      title: 'Identifier les Risques',
    },
    {
      icon: '/icones/icone-be╠üne╠üvole.svg',
      title: 'Former les bénévoles',
    },
    {
      icon: '/icones/icone-pre╠üvention.svg',
      title: 'Agir en prévention',
    },
    {
      icon: '/icones/icone-incident.svg',
      title: 'Réagir efficacement',
    },
  ];

  return (
    <section id="security" className="bg-[#fbf7ce] py-5 md:py-20 lg:py-10 w-full">
      <h2 className="text-center md:text-justify text-lg md:text-2xl font-bold text-gray-900 px-15 md:px-6 lg:px-8 xl:px-12 2xl:mx-auto 2xl:max-w-7xl mb-5">
        Pourquoi parler de sécurité dans les <br className="hidden md:block" /> lieux de culte ?
      </h2>
      <div className="w-full md:flex md:space-x-30 gap-6 md:gap-12 px-4 mx-auto max-w-7xl">
        <div className="text-center md:text-left mb-8  md:my-auto">
          <p className="text-black max-w-2xl mx-auto md:mx-0 mb-6">
            Les lieux de culte musulmans, essentiels à la vie spirituelle, sont souvent <br className="hidden md:block" />ouverts et donc exposés à divers risques tels que les incendies, le <br className="hidden md:block" />vandalisme ou les accidents.
          </p>
          <p className="text-black max-w-2xl mx-auto md:mx-0">
            Le Risk Management permet d&apos;anticiper, de se préparer, et de protéger <br className="hidden md:block" />ces lieux précieux.
          </p>
        </div>

        {/* Security Points */}
        <div className="flex flex-col items-center space-y-4 md:mr-0">
          {securityPoints.map((point, index) => (
            <div key={index} className="flex items-center ml-[10rem] md:justify-start gap-2 max-w-md w-full">
              <div className="flex-shrink-0">
                <Image
                  src={point.icon}
                  alt={point.title}
                  width={30}
                  height={30}
                  className="hidden md:block object-contain"
                />
                <Image
                  src={point.icon}
                  alt={point.title}
                  width={25}
                  height={25}
                  className="block md:hidden object-contain"
                />
              </div>
              <div className="text-left">
                <h3 className="text-md font-semibold text-gray-900">{point.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Security;
