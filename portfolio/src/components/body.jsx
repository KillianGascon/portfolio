import React from 'react'

const body = () => {
  return (
    <div>
        <div className="w-full h-screen bg-gradient-to-r from-purple-500 to-purple-300">
            <div className="max-w-7xl mx-auto flex items-center justify-center h-full">
                <div className="text-center">
                    <h1 className="text-4xl text-white font-bold">Bonjour, Je suis Killian Gascon</h1>
                    <p className="text-white text-lg mt-4">Je suis Etudiant en deuxième année d'étude d'informatique !</p>
                </div>
            </div>
        </div>
        <div className="w-full h-screen bg-purple-100">
            <div className="flex items-center justify-center h-full">
                <div className="text-left bg-purple-950">
                    <h1 className="text-4xl text-purple-1100 font-bold">Qui je suis ?</h1>
                    <p className="text-purple-1100 text-lg mt-4">Bonjour, je m'appelle Killian Gascon, je suis actuellement étudiant en informatique afin de devenir développeur ou expert en cybersécurité</p>
                </div>
                <div className="bg-purple-300">
                    <h1 className="text-4xl text-purple-1100 font-bold">Etudes</h1>
                    <p className="text-purple-1100 text-lg mt-4">Ecole : Epsi Nantes<br/>Formation : BTS SIO<br/>Diplômes : Permis de conduire, Baccalauréat Général, PSC1 (diplôme de premiers secours)</p>
                </div>
                <div className="text-left bg-purple-300">
                    <h1 className="text-4xl text-purple-1100 font-bold">Mes technos préférées</h1>
                    <div className='flex items-center'>
                        <div className=''>
                            {/* Le logo react */}
                            <img src="/react.svg" alt="react" className="h-8 w-8" />
                            <p className="text-purple-1100 text-lg mt-4"><br/>Python</p>
                        </div>
                        <div className='flex'>
                            {/* Le logo react */}
                            <img src="/react.svg" alt="react" className="h-8 w-8" />
                            <p className="text-purple-1100 text-lg mt-4"><br/>PHP</p>
                        </div>
                        <div className='flex'>
                            {/* Le logo react */}
                            <img src="/react.svg" alt="react" className="h-8 w-8" />
                            <p className="text-purple-1100 text-lg mt-4"><br/>Java</p>
                        </div>
                        <div className='flex'>
                            {/* Le logo react */}
                            <img src="/react.svg" alt="react" className="h-8 w-8" />
                            <p className="text-purple-1100 text-lg mt-4"><br/>Javascript (surtout React)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default body
