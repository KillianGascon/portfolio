import React from 'react'
import Nav from "../components/public/Nav";

const body = () => {
  return (
    <div>
        <div>
            <Nav/>
        </div>
        <div className="w-full h-screen bg-gradient-to-r from-purple-500 to-purple-300">
            <div className="max-w-7xl mx-auto flex items-center justify-center h-full">
                <div className="text-center">
                    <h1 className="text-4xl text-purple-1000 font-bold">Bonjour, Je suis Killian Gascon</h1>
                    <p className="text-purple-1000 text-lg mt-4">
                        Je suis Etudiant en deuxième année d'étude d'informatique !
                    </p>
                </div>
            </div>
        </div>
        <div className="w-full h-screen bg-purple-100">
            <div className="flex items-center justify-center h-full">
                <div className="text-left bg-purple-950">
                    <h1 className="text-4xl text-purple-1100 font-bold">Qui je suis ?</h1>
                    <p className="text-purple-1100 text-lg mt-4">
                        Bonjour, je m'appelle Killian Gascon, je suis actuellement étudiant en informatique afin de devenir développeur ou expert en cybersécurité
                    </p>
                </div>
                <div className="bg-purple-300">
                    <h1 className="text-4xl text-purple-1100 font-bold">Etudes</h1>
                    <p className="text-purple-1100 text-lg mt-4">
                        Ecole : Epsi Nantes<br/>
                        Formation : BTS SIO<br/>
                        Diplômes : Permis de conduire, Baccalauréat Général, PSC1 (diplôme de premiers secours)
                    </p>
                </div>
                <div className="bg-purple-300">
                    <h1 className="text-4xl text-purple-1100 font-bold">Mes Passes-temps</h1>
                    <p className="text-purple-1100 text-lg mt-4">
                    La programmation, le dessin sur tablette 
                    graphique et papier, la lecture, 
                    les jeux vidéo, l'Apiculture, le Vélo, 
                    la musique 
                    </p>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default body
