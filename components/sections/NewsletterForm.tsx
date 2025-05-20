'use client';

import React, { useState } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  consent: boolean;
}

const NewsletterForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    consent: false,
  });

  type FormErrors = {
    firstName?: string;
    lastName?: string;
    email?: string;
    consent?: string;
  };

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

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

    if (!formData.consent) {
      newErrors.consent = 'Vous devez accepter de recevoir nos communications';
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
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
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
    <div className="w-full px-4 md:px-6 lg:px-8 xl:px-12 2xl:mx-auto 2xl:max-w-7xl mb-16">
      <section
        id="newsletter"
        className="rounded-lg bg-[#fbf7ce] w-full max-w-[1800px] mx-auto overflow-hidden"
      >
      <div className="rounded-t-lg bg-[#ecac2b] w-full">
        <h2 className="text-lg md:text-md font-black px-2 py-4 text-center text-gray-900">
          Restez informé, même sans adhérer
        </h2>
      </div>
      <div className="w-full py-8 md:py-15">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-5xl mx-auto gap-8">
          <div className="w-full md:w-[45%] text-center md:text-left">
            <p className="text-black text-sm md:text-lg">
              Chaque mois, recevez des conseils concrets pour renforcer la sécurité de vos lieux de
              culte musulmans, rester informé des obligations et réglémentations en vigueur, et
              découvrir les actions menées par l&apos;ARMLC.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-[400px] mx-auto">
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

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  required
                  checked={formData.consent}
                  onChange={handleChange}
                  className="h-4 w-4 text-amber-500 focus:ring-amber-400 border-gray-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="consent" className="text-gray-700">
                  Je consens à recevoir des communications par e-mail de l&apos;ARMLC.
                </label>
              </div>
              {errors.consent && <p className="text-red-500 text-sm mt-1">{errors.consent}</p>}
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="text-white rounded-lg w-full px-8 py-2 text-lg bg-[#ecac2b] hover:bg-amber-200 hover:text-black cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-300"
              >
                S&apos;abonner
              </button>
            </div>
          </form>
        </div>
      </div>
      </section>
    </div>
  );
};

export default NewsletterForm;
