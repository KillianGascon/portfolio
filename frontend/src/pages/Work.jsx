import React, { useEffect } from 'react';
import Nav from "../components/public/Nav";
import pythonImage from '../assets/python.png';
import javascriptImage from '../assets/javascript.png';
import phpImage from '../assets/php.png';
import epsiescape from '../assets/Epsi_Escape.png';
import pp_github from '../assets/pp-github.png';
import iafacial from '../assets/IA_faciale.png';
import rond_artiste from '../assets/rond_artiste.png';
import { useTranslation } from 'react-i18next';
import AOS from 'aos'; // Import de AOS
import 'aos/dist/aos.css'; // Import des styles de AOS

const Work = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className='flex flex-col h-auto dark:bg-gray-950'>
      <div>
        <Nav />
      </div>

      {/* Cartes Technos */}
      <div className="flex flex-col w-full h-auto p-10 lg:p-28 dark:bg-gray-950 justify-center items-center gap-10 lg:gap-28 mb-32 mt-24">
        <h1 className="text-4xl text-purple-1100 font-bold text-center" data-aos="fade-up">{t('work.title_technos')}</h1>
        <div className='flex flex-col lg:flex-row justify-center items-center gap-3 lg:gap-10 w-full flex-wrap' >
          <div data-aos="fade-up" className='flex flex-col justify-center gap-5 max-w-md w-full bg-gradient-to-b from-white to-purple-50 dark:from-gray-950 dark:to-dark-purple-100 rounded-lg border border-purple-500 dark:border-dark-purple-500 shadow-lg shadow-purple-500 dark:shadow-dark-purple-500 p-4 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500 transition-transform duration-300'>
            <img src={pythonImage} alt="Python" className="h-12 w-12 mx-auto" />
            <p className="text-purple-1100 dark:text-slate-100 text-lg mt-4 text-center">Python</p>
          </div>

          <div data-aos="fade-up" className='flex flex-col justify-center gap-5 max-w-md w-full bg-gradient-to-b from-white to-purple-50 dark:from-gray-950 dark:to-dark-purple-100 rounded-lg border border-purple-500 dark:border-dark-purple-500 shadow-lg shadow-purple-500 dark:shadow-dark-purple-500 p-4 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500 transition-transform duration-300'>
            <img src={phpImage} alt="PHP" className="h-12 w-12 mx-auto" />
            <p className="text-purple-1100 dark:text-slate-100 text-lg mt-4 text-center">PHP</p>
          </div>

          <div data-aos="fade-up" className='flex flex-col justify-center gap-5 max-w-md w-full bg-gradient-to-b from-white to-purple-50 dark:from-gray-950 dark:to-dark-purple-100 rounded-lg border border-purple-500 dark:border-dark-purple-500 shadow-lg shadow-purple-500 dark:shadow-dark-purple-500 p-4 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500 transition-transform duration-300'>
            <img src={javascriptImage} alt="Javascript" className="h-12 w-12 mx-auto" />
            <p className="text-purple-1100 dark:text-slate-100 text-lg mt-4 text-center">Javascript</p>
          </div>
        </div>
      </div>

      {/* Derniers Projets */}
      <div className="flex flex-col w-full h-auto p-10 lg:p-28 dark:bg-gray-950 justify-center items-center gap-10 lg:gap-28 mb-32">
        <h1 className="text-4xl text-purple-1100 font-bold text-center" data-aos="fade-up">{t('work.title_projects')}</h1>
        <div className='flex flex-col lg:flex-row justify-center items-center gap-3 lg:gap-10 w-full flex-wrap' data-aos="fade-up">
          <div data-aos="fade-up" className='flex flex-col justify-center gap-5 max-w-md w-full bg-gradient-to-b from-white to-purple-50 dark:from-gray-950 dark:to-dark-purple-100 rounded-lg border border-purple-500 dark:border-dark-purple-500 shadow-lg shadow-purple-500 dark:shadow-dark-purple-500 p-4 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500 transition-transform duration-300 min-h-[500px]'>
            <img src={epsiescape} alt="Projet Epsi Escape" className="w-full" />
            <h2 className="text-purple-1200 dark:text-slate-200 font-bold text-xl mt-4 text-center">{t('work.card1_title')}</h2>
            <p className="text-purple-1100 dark:text-slate-100 text-lg mt-4 text-center">
              {t('work.card1_desc')}
            </p>
          </div>

          <div data-aos="fade-up" className='flex flex-col justify-center gap-5 max-w-md w-full bg-gradient-to-b from-white to-purple-50 dark:from-gray-950 dark:to-dark-purple-100 rounded-lg border border-purple-500 dark:border-dark-purple-500 shadow-lg shadow-purple-500 dark:shadow-dark-purple-500 p-4 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500 transition-transform duration-300 min-h-[500px]'>
            <img src={iafacial} alt="Projet IA" className="w-auto h-56" />
            <h2 className="text-purple-1200 dark:text-slate-200 font-bold text-xl mt-4 text-center">{t('work.card2_title')}</h2>
            <p className="text-purple-1100 dark:text-slate-100 text-lg mt-4 text-center">
              {t('work.card2_desc')}
            </p>
          </div>

          <div data-aos="fade-up" className='flex flex-col justify-center gap-5 max-w-md w-full bg-gradient-to-b from-white to-purple-50 dark:from-gray-950 dark:to-dark-purple-100 rounded-lg border border-purple-500 dark:border-dark-purple-500 shadow-lg shadow-purple-500 dark:shadow-dark-purple-500 p-4 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500 transition-transform duration-300 min-h-[500px]'>
            <img src={rond_artiste} alt="Autre projet" className="w-auto h-56" />
            <h2 className="text-purple-1200 dark:text-slate-200 font-bold text-xl mt-4 text-center">{t('work.card3_title')}</h2>
            <p className="text-purple-1100 dark:text-slate-100 text-lg mt-4 text-center">
              {t('work.card3_desc')}
            </p>
          </div>
        </div>
      </div>


      {/* Github */}
      <div className="flex flex-col lg:flex-row justify-center items-center w-full h-auto p-10 lg:p-28 dark:bg-gray-950 gap-10 lg:gap-28 mb-32">
        <img src={pp_github} alt="GitHub Profile" className="w-1/4 rounded-full"  data-aos="fade-right"/>

        <div className='flex flex-col items-start gap-10 text-center lg:text-left'  data-aos="fade-left">
          <div className='flex gap-3 justify-center lg:justify-start'>
            <h1 className="text-4xl text-slate-800 dark:text-slate-100 font-bold">{t('work.git_my')}</h1>
            <h1 className="text-4xl text-purple-1100 font-bold">Github</h1>
            <h1 className="text-4xl text-slate-800 dark:text-slate-100 font-bold">:</h1>
          </div>
          <a href='https://github.com/KillianGascon' target="_blank" rel="noopener noreferrer" className='text-blue-600 no-underline hover:underline'  data-aos="fade-up">
            https://github.com/KillianGascon
          </a>
        </div>
      </div>
    </div>
  );
};

export default Work;
