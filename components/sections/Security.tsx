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
    <section id="security" className="bg-[#fdfdf8] py-16 md:py-20 lg:py-10 w-full">
      <h2 className="text-xl md:text-2xl font-black text-gray-900 px-4 md:px-6 lg:px-8 xl:px-12 2xl:mx-auto 2xl:max-w-7xl">
        Pourquoi parler de sécurité dans les <br className="hidden md:block" /> lieux de culte ?
      </h2>
      <div className="w-full md:flex md:justify-between gap-10 md:gap-20 px-4 md:px-6 lg:px-8 xl:px-12 2xl:mx-auto 2xl:max-w-7xl">
        <div className="text-center md:text-left mb-12 md:my-auto">
          <p className="text-black max-w-2xl mx-auto md:mx-0 mb-[2rem]">
            Les lieux de culte musulmans, essentiels à la vie spirituelle, sont sonvent{' '}
            <br className="hidden md:block" />
            ouverts et donc exposés à divers risques tels que les incendies, le{' '}
            <br className="hidden md:block" />
            vandalisme ou les accidents.
          </p>
          <p className="text-black max-w-2xl mx-auto md:mx-0">
            Le Risk Management permet d&apos;anticiper, de se préparer, et de protéger{' '}
            <br className="hidden md:block" />
            ces lieux précieux.
          </p>
        </div>

        {/* Security Points */}
        <div className="flex flex-col items-center space-y-4 md:mr-[15rem]">
          {securityPoints.map((point, index) => (
            <div key={index} className="flex items-center ml-[8rem] md:ml-0 gap-2 max-w-md w-full">
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
                  width={20}
                  height={20}
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
