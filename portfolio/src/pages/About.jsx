import React from 'react';
import Nav from "../components/public/Nav";
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation(); // Ajoutez cette ligne pour obtenir la fonction t
  
  return (
    <div className='flex flex-col h-screen'>
      <div>
        <Nav />
      </div>

      <div className='flex flex-col items-center justify-center flex-1 p-10 gap-10 dark:bg-gray-950'>
        <h1 className="text-4xl text-purple-1100 font-bold text-center">{t('about.title')}</h1>

        <div className='flex flex-row justify-center items-stretch gap-10 p-5 flex-wrap'>

          {/* Carte Qui suis-je */}
          <div className='flex flex-col justify-center gap-5 max-w-md w-full bg-gradient-to-b from-white to-purple-50 dark:from-gray-950 dark:to-dark-purple-100 rounded-lg border border-purple-500 dark:border-dark-purple-500 shadow-lg shadow-purple-500 dark:shadow-dark-purple-500 p-4 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500 transition-transform duration-300'>
            <h2 className="text-lg text-slate-800 dark:text-slate-100 font-medium text-center">{t('about.card1_title')}</h2>
            <p className="text-lg text-slate-800 dark:text-slate-100 font-medium text-center">
              {t('about.card1_desc')}
            </p>
          </div>

          {/* Carte Mes Études */}
          <div className='flex flex-col justify-center gap-5 max-w-md w-full bg-gradient-to-b from-white to-purple-50 dark:from-gray-950 dark:to-dark-purple-100 rounded-lg border border-purple-500 dark:border-dark-purple-500 shadow-lg shadow-purple-500 dark:shadow-dark-purple-500 p-4 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500 transition-transform duration-300'>
            <h2 className="text-lg text-slate-800 dark:text-slate-100 font-medium text-center">{t('about.card2_title')}</h2>
            <p className="text-lg text-slate-800 dark:text-slate-100 font-medium text-center">

              {t('about.card2_school')}<br />
              {t('about.card2_program')}<br />
              {t('about.card2_degrees')}
            </p>
            <a href="https://www.epsi.fr/campus/campus-de-nantes/" target="_blank" rel="noopener noreferrer" className='flex justify-center items-center'>
              <button className='bg-purple-800 w-1/2 h-full rounded-lg'>{t('about.card2_button')}</button>
            </a>
          </div>

          {/* Carte Mes Passes-temps */}
          <div className='flex flex-col justify-center gap-5 max-w-md w-full bg-gradient-to-b from-white to-purple-50 dark:from-gray-950 dark:to-dark-purple-100 rounded-lg border border-purple-500 dark:border-dark-purple-500 shadow-lg shadow-purple-500 dark:shadow-dark-purple-500 p-4 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500 transition-transform duration-300'>
            <h2 className="text-lg text-slate-800 dark:text-slate-100 font-medium text-center">{t('about.card3_title')}</h2>
            <p className="text-lg text-slate-800 dark:text-slate-100 font-medium text-center">
              {t('about.card3_desc')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
