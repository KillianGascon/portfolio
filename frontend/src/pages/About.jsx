import Nav from "../components/public/Nav";
import { useTranslation } from 'react-i18next';
import AOS from 'aos'; // Import de AOS
import 'aos/dist/aos.css'; // Import des styles de AOS
import React, { useEffect } from 'react';

const About = () => {
  const { t } = useTranslation(); // Ajoutez cette ligne pour obtenir la fonction t

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  
  return (
    <div className='flex flex-col h-screen'>
      <div>
        <Nav />
      </div>

      <div className='flex flex-col items-center justify-center flex-1 p-10 gap-10 dark:bg-gray-950'  >
        <h1 className="text-4xl text-purple-1100 font-bold text-center" data-aos="fade-up">{t('about.title')}</h1>

        <div className='flex flex-row justify-center items-stretch gap-10 p-5 flex-wrap'>

          {/* Carte Qui suis-je */}
          <div data-aos="fade-up" className='flex flex-col justify-center gap-5 max-w-md w-full bg-gradient-to-b from-white to-purple-50 dark:from-gray-950 dark:to-dark-purple-100 rounded-lg border border-purple-500 dark:border-dark-purple-500 shadow-lg shadow-purple-500 dark:shadow-dark-purple-500 p-4 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500 transition-transform duration-300'>
            <h2 className="text-lg text-slate-800 dark:text-slate-100 font-medium text-center">{t('about.card1_title')}</h2>
            <p className="text-lg text-slate-800 dark:text-slate-100 font-medium text-center">
              {t('about.card1_desc')}
            </p>
          </div>

          {/* Carte Mes Études */}
          <div data-aos="fade-up" className='flex flex-col justify-center gap-5 max-w-md w-full bg-gradient-to-b from-white to-purple-50 dark:from-gray-950 dark:to-dark-purple-100 rounded-lg border border-purple-500 dark:border-dark-purple-500 shadow-lg shadow-purple-500 dark:shadow-dark-purple-500 p-4 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500 transition-transform duration-300'>
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
          <div data-aos="fade-up" className='flex flex-col justify-center gap-5 max-w-md w-full bg-gradient-to-b from-white to-purple-50 dark:from-gray-950 dark:to-dark-purple-100 rounded-lg border border-purple-500 dark:border-dark-purple-500 shadow-lg shadow-purple-500 dark:shadow-dark-purple-500 p-4 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500 transition-transform duration-300'>
            <h2 className="text-lg text-slate-800 dark:text-slate-100 font-medium text-center">{t('about.card3_title')}</h2>
            <p className="text-lg text-slate-800 dark:text-slate-100 font-medium text-center">
              {t('about.card3_desc')}
            </p>
          </div>

          {/* Carte Documents */}
          <div data-aos="fade-up" className='flex flex-col justify-center gap-5 max-w-md w-full bg-gradient-to-b from-white to-purple-50 dark:from-gray-950 dark:to-dark-purple-100 rounded-lg border border-purple-500 dark:border-dark-purple-500 shadow-lg shadow-purple-500 dark:shadow-dark-purple-500 p-4 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500 transition-transform duration-300'>
            <h2 className="text-lg text-slate-800 dark:text-slate-100 font-medium text-center">{t('about.card4_title')}</h2>
            <div className="flex flex-row justify-center gap-8">
              <a href="/path-to-your-cv.pdf" target="_blank" rel="noopener noreferrer" className='flex justify-center items-center'>
                <button className='bg-purple-800 w-48 h-12 rounded-lg text-white hover:bg-purple-700 transition-colors duration-300'>
                  {t('about.card4_cv_button')}
                </button>
              </a>
              <a href="/path-to-your-report.pdf" target="_blank" rel="noopener noreferrer" className='flex justify-center items-center'>
                <button className='bg-purple-800 w-48 h-12 rounded-lg text-white hover:bg-purple-700 transition-colors duration-300'>
                  {t('about.card4_report_button')}
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
