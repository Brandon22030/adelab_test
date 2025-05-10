'use client';

import React, { useState } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
}

const NewsletterForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Le prénom est requis';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Le nom est requis';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Veuillez entrer un email valide';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Logique de soumission du formulaire
      console.log('Formulaire soumis', formData);
      setIsSubmitted(true);
      // Réinitialiser le formulaire ou envoyer à un backend
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Effacer l&apos;erreur lorsque l&apos;utilisateur commence à saisir
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center bg-amber-50 p-12 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Merci de vous être inscrit !</h2>
        <p className="text-gray-700">Vous recevrez bientôt nos actualités et informations.</p>
      </div>
    );
  }

  return (
    <section id="newsletter" className="rounded-lg bg-[#fbf7ce] mx-4 md:mx-10 my-8  md:py-b-20 lg:py-b-24">
      <div className="rounded-t-lg bg-[#ecac2b]">
        <h2 className="text-lg md:text-2xl px-2 py-4 font-bold text-center text-gray-900 mb-4">
          Restez informé, même sans adhérer
        </h2>
      </div>
      <div className="mx-auto px-4 md:mx-40 md:my-20">
        <div className="md:grid md:grid-cols-2 gap-15 md:items-center ">
          <div className="text-center md:text-left mb-5 md:mb-0">
            <p className="text-black">
              Chaque mois, recevez des conseils concrets pour renforcer la sécurité de vos lieux de
              culte musulmans, rester informé des obligations et réglémentations en vigueur, et
              découvrir les actions menées par l&apos;ARMLC.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`bg-white w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.firstName ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-amber-300'}`}
                placeholder="Votre prénom"
              />
              {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
            </div>

            <div>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`bg-white w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.lastName ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-amber-300'}`}
                placeholder="Votre nom"
              />
              {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
            </div>

            <div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`bg-white w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-amber-300'}`}
                placeholder="Votre adresse email"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="text-white rounded-lg w-full px-8 py-2 text-lg bg-[#ecac2b] mb-15 hover:bg-amber-200 hover:text-black cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-300"
              >
                S&apos;abonner
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterForm;
