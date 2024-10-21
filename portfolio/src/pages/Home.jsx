import React from 'react';
import Nav from "../components/public/Nav";
import pp from '../assets/pp-github.png';
import { useTranslation } from 'react-i18next'; // Ajoutez cette ligne

const Body = () => {
  const { t } = useTranslation(); // Ajoutez cette ligne pour obtenir la fonction t

  return (
    <div className="relative w-full h-screen">
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-10">
        <Nav />
      </div>

      {/* Contenu centré */}
      <div className='flex flex-col dark:bg-gray-950 items-center justify-center gap-20 w-full h-full lg:flex-row'>
        <div className='w-1/2 flex justify-center lg:justify-end'>
          <img src={pp} alt="logo" className="w-1/2 rounded-full" />
        </div>
        <div className='w-full lg:w-1/2 text-center lg:text-left'>
          <div className='flex gap-3 justify-center lg:justify-start mb-4'> {/* Ajout d'un espacement en bas */}
            <h2 className="text-4xl text-slate-800 dark:text-slate-100 font-bold">Gascon</h2>
            <h2 className="text-4xl text-purple-1100 font-bold">Killian</h2>
          </div>

          <p className="text-2xl text-purple-1100 font-bold mb-4">{t('home.developer')}</p> {/* Ajout d'un espacement en bas */}
          <p className="text-lg text-slate-800 dark:text-slate-100 font-medium w-full lg:w-1/2 mb-4">
            {t('home.description')} {/* Utilisez ici la clé de traduction pour la description */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Body;
