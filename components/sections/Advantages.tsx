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
      title: 'Accès à des ressources pratiques',
      description: 'Guides, vidéos, modèles utiles au quotidien',
    },
    {
      icon: '/icones/icone-re╠üseau.svg',
      title: "Réseau d'entraide entre responsables",
      description: 'Echangez entre pairs, partagez vos expériences.',
    },
    {
      icon: '/icones/icone-accompagnement.svg',
      title: 'Accompagnement personnalisé',
      description: 'Sécurité, obligations légales, conseils sur mesure',
    },
  ];

  return (
    <section id="security" className="bg-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-4">
            Les avantages à rejoindre l&apos;ARMLC
          </h2>
          <p className="text-black max-w-2xl mx-auto md:font-semibold">
            Rejoindre l&apos;ARMLC, c&apos;est bénéficier d&apos;une couverture adaptée, de conseils
            pratiques et d&apos;un réseau engagé.
          </p>
        </div>

        {/* Advantages Points */}
        <div className="grid md:grid-cols-2 gap-8 justify-center">
          {advantagesPoints.map((point, index) => (
            <div key={index} className="flex space-x-4 mb-6 max-w-md md:mx-30">
              <div className="flex-shrink-0">
                <Image
                  src={point.icon}
                  alt={point.title}
                  width={50}
                  height={50}
                  className="hidden md:block object-contain mx-auto md:mx-0"
                />
                <Image
                  src={point.icon}
                  alt={point.title}
                  width={40}
                  height={40}
                  className="block md:hidden object-contain mx-auto"
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-md md:text-lg font-semibold text-gray-900">{point.title}</h3>
                <p className="text-gray-700">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
