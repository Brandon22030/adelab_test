'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#fdfdf8] flex flex-col items-center justify-center px-4 py-16">
      <div className="text-center max-w-md">
        <div>
          <Link href="/">
            <Image
              src="/icones/logoDesktop.svg"
              alt="Logo ARMLC"
              width={200}
              height={60}
              className="mx-auto mb-4 object-contain"
            />
          </Link>

          <p className="text-xs font-semibold text-gray-900 mb-8">
            Association du Risk Management des Lieux de Culte
          </p>
        </div>

        <Image
          src="/icones/icone-404.svg"
          alt="Page non trouvée"
          width={250}
          height={250}
          className="md:hidden mx-auto mb-8 object-contain"
        />

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
          <p className="text-3xl md:text-2xl font-semibold text-gray-900">OUPS ...</p>
          <Image
            src="/icones/icone-404.svg"
            alt="Page non trouvée"
            width={250}
            height={250}
            className="hidden md:block mx-4 object-contain"
          />
          <p className="text-3xl md:text-2xl font-semibold text-gray-900">Page introuvable</p>
        </div>
        <Link
          href="/"
          className="inline-block w-full mt-5 bg-[#ecac2b] text-white px-8 py-3 rounded-lg hover:bg-amber-500 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-300"
        >
          RETOUR A L&apos;ACCUEIL
        </Link>
      </div>
    </div>
  );
}
