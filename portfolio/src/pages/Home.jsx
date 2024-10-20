import React from 'react';
import Nav from "../components/public/Nav";
import pp from '../assets/pp-github.png';

const Body = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-10">
        <Nav />
      </div>

      {/* Contenu centré */}
      <div className='flex items-center justify-center gap-20 w-full h-full'>
        <div className='w-1/2 flex justify-end'>
          <img src={pp} alt="logo" className="w-1/2 rounded-full" />
        </div>
        <div className='w-1/2'>
        <div className='flex gap-3'>
            <h2 className="text-4xl text-slate-800 font-bold">Gascon</h2>
            <h2 className="text-4xl text-purple-1100 font-bold">Killian</h2>
        </div>
          <p className="text-2xl text-purple-1100 font-bold">Développeur</p>
          <p className="text-lg text-slate-800 font-medium w-1/2">Je suis un étudiant en informatique passionné par le développement web. Je suis actuellement en 2ème année de DUT Informatique à l'IUT de Mulhouse. Je suis à la recherche d'une alternance pour ma 3ème année de DUT.</p>
        </div>
      </div>
    </div>
  );
};

export default Body;
