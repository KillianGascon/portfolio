import React from 'react';
import Nav from "../components/public/Nav";

const About = () => {
  return (
    <div className='flex flex-col h-screen'>
      <div>
        <Nav />
      </div>

      <div className='flex flex-col items-center justify-center flex-1 p-10 gap-10'>
        <h1 className="text-4xl text-purple-1100 font-bold text-center">À propos de moi</h1>

        <div className='flex flex-row justify-center items-stretch gap-10 p-5 flex-wrap'>

          {/* Carte Qui suis-je */}
          <div className='flex flex-col justify-center gap-5 max-w-md w-full bg-gradient-to-b from-white to-purple-50 rounded-lg border border-purple-500 shadow-lg shadow-purple-500 p-4 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500 transition-transform duration-300'>
            <h2 className="text-lg text-slate-800 font-medium text-center">Qui suis-je ?</h2>
            <p className="text-lg text-slate-800 font-medium text-center">
              Bonjour, je m'appelle Killian Gascon, je suis actuellement étudiant en informatique afin de devenir développeur ou expert en cybersécurité.
            </p>
          </div>

          {/* Carte Mes Études */}
          <div className='flex flex-col justify-center gap-5 max-w-md w-full bg-gradient-to-b from-white to-purple-50 rounded-lg border border-purple-500 shadow-lg shadow-purple-500 p-4 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500 transition-transform duration-300'>
            <h2 className="text-lg text-slate-800 font-medium text-center">Mes Études</h2>
            <p className="text-lg text-slate-800 font-medium text-center">
              École : Epsi Nantes<br />
              Formation : BTS SIO<br />
              Diplômes : Permis de conduire, Baccalauréat Général, PSC1 (diplôme de premiers secours)
            </p>
            <a href="https://www.epsi.fr/campus/campus-de-nantes/" target="_blank" rel="noopener noreferrer" className='flex justify-center items-center'>
              <button className='bg-purple-800 w-1/2 h-full rounded-lg'>Mon École</button>
            </a>
          </div>

          {/* Carte Mes Passes-temps */}
          <div className='flex flex-col justify-center gap-5 max-w-md w-full bg-gradient-to-b from-white to-purple-50 rounded-lg border border-purple-500 shadow-lg shadow-purple-500 p-4 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500 transition-transform duration-300'>
            <h2 className="text-lg text-slate-800 font-medium text-center">Mes Passes-temps</h2>
            <p className="text-lg text-slate-800 font-medium text-center">
              La programmation, le dessin sur tablette graphique et papier, la lecture, les jeux vidéo, l'apiculture, le vélo, la musique.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
