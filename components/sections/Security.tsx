import React from "react";
import Image from "next/image";

const Security = () => {
  const securityPoints = [
    {
      icon: "/icones/icone-identifier.svg",
      title: "Identifier les Risques",
    },
    {
      icon: "/icones/icone-be╠üne╠üvole.svg",
      title: "Former les bénévoles",
    },
    {
      icon: "/icones/icone-pre╠üvention.svg",
      title: "Agir en prévention",
    },
    {
      icon: "/icones/icone-incident.svg",
      title: "Réagir efficacement",
    },
  ];

  return (
    <section id="security" className="bg-[#fdfdf8] py-16 md:py-20 lg:py-24">
      <div className="md:flex mx-auto md:mx-10 px-4 gap-10 md:gap-20 md:justify-center">
        <div className="text-center md:text-left mb-12 md:my-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-[3rem]">
            Pourquoi parler de sécurité dans les <br className="hidden md:block" /> lieux de culte ?
          </h2>
          <p className="text-black max-w-2xl mx-auto md:mx-0 mb-5">
            Les lieux de culte musulmans, essentiels à la vie spirituelle, sont
            sonvent ouverts et donc exposés à divers risques tels que les
            incendies, le vandalisme ou les accidents.
          </p>
          <p className="text-black max-w-2xl mx-auto md:mx-0">
            Le Risk Management permet d&apos;anticiper, de se préparer, et de
            protéger ces lieux précieux.
          </p>
        </div>

        {/* Security Points */}
        <div className="flex flex-col items-center space-y-6">
          {securityPoints.map((point, index) => (
            <div key={index} className="flex items-center ml-[8rem] md:ml-0 gap-2 max-w-md w-full">
              <div className="flex-shrink-0">
                <Image
                  src={point.icon}
                  alt={point.title}
                  width={50}
                  height={50}
                  className="hidden md:block object-contain"
                />
                <Image
                  src={point.icon}
                  alt={point.title}
                  width={40}
                  height={40}
                  className="block md:hidden object-contain"
                />
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-900">
                  {point.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Security;
