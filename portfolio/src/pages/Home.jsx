import React from 'react'
import Nav from "../components/public/Nav";



const body = () => {
  return (
    <div>
        <div>
            <Nav/>
        </div>


        <div className="w-full h-screen bg-gradient-to-b from-purple-700 from-85% to-purple-500">
            <div className="max-w-7xl mx-auto flex items-center justify-center h-full">
                <div className="text-center">
                    <h1 className="text-4xl text-purple-1000 font-bold">Bonjour, je suis Killian Gascon</h1>
                    <p className="text-purple-1000 text-lg mt-4">
                        Je suis étudiant en deuxième année d'étude d'informatique !
                    </p>
                </div>
            </div>
        </div>

        <div className='w-full h-auto min-h-screen p-4 flex justify-center items-center bg-gradient-to-b from-purple-500 from-3% to-purple-100 to-97%'>
            <div className="flex flex-col md:flex-row justify-center items-stretch gap-4">
                <section className='flex-1 flex flex-col justify-between text-center bg-purple-500 shadow shadow-purple-800 rounded-xl p-6'>
                    <article>
                        <h1 className="text-4xl text-purple-1100 font-bold">Qui je suis ?</h1>
                        <p className="text-purple-1100 text-lg mt-4">
                            Bonjour, je m'appelle Killian Gascon, je suis actuellement étudiant en informatique afin de devenir développeur ou expert en cybersécurité.
                        </p>
                    </article>
                </section>

                <section className='flex-1 flex flex-col justify-between text-center bg-purple-500 shadow shadow-purple-800 rounded-xl p-6'>
                    <article>
                        <h1 className="text-4xl text-purple-1100 font-bold">Etudes</h1>
                        <p className="text-purple-1100 text-lg mt-4">
                            Ecole : Epsi Nantes<br />
                            Formation : BTS SIO<br />
                            Diplômes : Permis de conduire, Baccalauréat Général, PSC1 (diplôme de premiers secours)
                        </p>
                    </article>
                </section>

                <section className='flex-1 flex flex-col justify-between text-center bg-purple-500 shadow shadow-purple-800 rounded-xl p-6'>
                    <article>
                        <h1 className="text-4xl text-purple-1100 font-bold">Mes Passes-temps</h1>
                        <p className="text-purple-1100 text-lg mt-4">
                            La programmation, le dessin sur tablette graphique et papier, la lecture, les jeux vidéo, l'Apiculture, le Vélo, la musique.
                        </p>
                    </article>
                </section>
            </div>
        </div>
        
    </div>
  )
}

export default body
