import React from 'react';
import Nav from "../components/public/Nav";
import pythonImage from '../assets/python.png';
import javascriptImage from '../assets/javascript.png';
import phpImage from '../assets/php.png';

const Work = () => {
  return (
    <div>
      <div>
        <Nav />
      </div>
        <div className="w-full h-auto p-10 lg:p-28 flex flex-col justify-center items-center bg-purple-100 gap-10 lg:gap-28">
            <h1 className="text-4xl text-purple-1100 font-bold">Mes technos préférées</h1>
            <div className='flex flex-col lg:flex-row justify-center items-stretch gap-3 lg:gap-10 w-full'> {/* Ajouter w-full ici */}
            <section className='flex-1 w-full lg:w-64 h-48 flex flex-col items-center justify-center text-center bg-purple-500 shadow shadow-purple-800 rounded-xl p-6'>
                <img src={pythonImage} alt="Python" className="h-12 w-12" />
                <p className="text-purple-1100 text-lg mt-4">Python</p>
            </section>
            <section className='flex-1 w-full lg:w-64 h-48 flex flex-col items-center justify-center text-center bg-purple-500 shadow shadow-purple-800 rounded-xl p-6'>
                <img src={phpImage} alt="PHP" className="h-12 w-12" />
                <p className="text-purple-1100 text-lg mt-4">PHP</p>
            </section>
            <section className='flex-1 w-full lg:w-64 h-48 flex flex-col items-center justify-center text-center bg-purple-500 shadow shadow-purple-800 rounded-xl p-6'>
                <img src={javascriptImage} alt="Javascript" className="h-12 w-12" />
                <p className="text-purple-1100 text-lg mt-4">Javascript</p>
            </section>
            </div>
        </div>
        <div className="w-full h-auto p-10 lg:p-28 flex flex-col justify-center items-center bg-purple-100 gap-10 lg:gap-28">
            <h1 className="text-4xl text-purple-1100 font-bold">Derniers Projets :</h1>
            <div className='flex flex-col lg:flex-row justify-center items-stretch gap-3 lg:gap-10 w-full'> {/* Ajouter w-full ici */}
            <section className='flex-1 w-full lg:w-64 h-48 flex flex-col items-center justify-center text-center bg-purple-500 shadow shadow-purple-800 rounded-xl p-6'>
                <img src={pythonImage} alt="Python" className="h-12 w-12" />
                <p className="text-purple-1100 text-lg mt-4">Python</p>
            </section>
            <section className='flex-1 w-full lg:w-64 h-48 flex flex-col items-center justify-center text-center bg-purple-500 shadow shadow-purple-800 rounded-xl p-6'>
                <img src={phpImage} alt="PHP" className="h-12 w-12" />
                <p className="text-purple-1100 text-lg mt-4">PHP</p>
            </section>
            <section className='flex-1 w-full lg:w-64 h-48 flex flex-col items-center justify-center text-center bg-purple-500 shadow shadow-purple-800 rounded-xl p-6'>
                <img src={javascriptImage} alt="Javascript" className="h-12 w-12" />
                <p className="text-purple-1100 text-lg mt-4">Javascript</p>
            </section>
            </div>
        </div>
        <div className="w-full h-auto p-10 lg:p-28 flex flex-row justify-center items-center bg-purple-100 gap-10 lg:gap-28">
            <img src={pythonImage} alt="Python" className="h-12 w-12" />
            <div className='flex flex-col gap-10'>
                <h1 className="text-4xl text-purple-1100 font-bold">Mon Github :</h1>
                <a href='https://github.com/KillianGascon' className='text-blue-600 no-underline hover:underline'>https://github.com/KillianGascon</a>
            </div>
        </div>
    </div>
  );
};

export default Work;
