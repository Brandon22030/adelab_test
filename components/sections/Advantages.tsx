import React from 'react';
import Image from 'next/image';

const Advantages = () => {
  const advantagesPoints = [
    {
      icon: '/icones/icone-assurance.svg',
      title: 'Assurance multirisque collective',
      description: 'Spécialement conçue pour les lieux de cultes musulmans',
    },
    {
      icon: '/icones/icone-ressources.svg',
      title: "Réseau d'entraide entre responsables",
      description: 'Echangez entre pairs, partagez vos expériences',
    },
    {
      icon: '/icones/icone-re╠üseau.svg',
      title: 'Accès à des ressources pratiques',
      description: 'Guides, vidéos, modèles utiles au quotidien',
    },
    {
      icon: '/icones/icone-accompagnement.svg',
      title: 'Accompagnement personnalisé',
      description: 'Sécurité, obligations légales, conseils sur mesure',
    },
  ];

  return (
    <section id="security" className="bg-white py-10 md:py-20 lg:pb-10 lg:pt-15 w-full px-4 md:px-6 lg:px-8 xl:px-12 2xl:mx-auto 2xl:max-w-7xl">
      <div className="w-full">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-lg md:text-3xl md:font-black font-bold text-black mb-4">
            Les avantages à rejoindre l&apos;ARMLC
          </h2>
          <p className="text-bold max-w-2xl mx-auto md:font-semibold">
            Rejoindre l&apos;ARMLC, c&apos;est bénéficier d&apos;une couverture adaptée, de conseils
            pratiques et d&apos;un réseau engagé.
          </p>
        </div>

        {/* Advantages Points */}
        <div className="grid md:grid-cols-2 ">
          {advantagesPoints.map((point, index) => (
            <div key={index} className="flex items-center space-x-4 mb-6 max-w-md md:mx-30">
              <div className="flex-shrink-0">
                <Image
                  src={point.icon}
                  alt={point.title}
                  width={40}
                  height={40}
                  className="hidden md:block object-contain mx-auto md:mx-0"
                />
                <Image
                  src={point.icon}
                  alt={point.title}
                  width={30}
                  height={30}
                  className="block md:hidden object-contain mx-auto"
                />
              </div>
              <div className="">
                <h3 className="text-sm md:text-md font-black text-black">{point.title}</h3>
                <p className="text-black text-sm md:text-md">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
