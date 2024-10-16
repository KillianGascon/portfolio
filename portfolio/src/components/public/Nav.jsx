import { useState } from 'react';
import { FaGithub,FaLinkedin } from 'react-icons/fa';
import { BsSun, BsMoon } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Navbar = () => {
    // État pour le mode sombre
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (darkMode) {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
        }
    };

    return (
        <nav className="w-full py-4 shadow shadow-purple-800 bg-purple-100 dark:bg-dark-purple-100">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
                {/* Section Logo */}
                <div className="flex items-center space-x-2">
                    <div className="bg-purple-500 p-2 rounded">
                        <img src="/logo.svg" alt="logo" className="h-8 w-8" />
                        <Link to="/home" className="p-2"></Link>
                    </div>
                    <span className="text-purple-1200 dark:text-dark-purple-1200 text-lg font-bold">Gascon Killian</span>
                </div>

                {/* Liens de navigation */}
                <ul className="flex space-x-6 bg-purple-500 px-6 py-2 rounded-full dark:bg-dark-purple-500">
                    <li className="text-purple-1100 dark:text-dark-purple-1200 hover:text-purple-1200 dark:hover:text-dark-purple-1100 transition">
                        <Link to="/home" className="p-2">Accueil</Link>
                    </li>
                    <li className="text-purple-1100 dark:text-dark-purple-1200 hover:text-purple-1200 dark:hover:text-dark-purple-1100 transition">
                        <Link to="/work" className="p-2">Projets</Link>
                    </li>
                </ul>

                {/* Section Icônes sociales + Bouton thème */}
                <div className="flex space-x-4 items-center text-purple-1200 dark:text-dark-purple-1200">
                    <FaLinkedin className="hover:text-purple-1000 dark:hover:text-dark-purple-1100 cursor-pointer" />
                    <FaGithub className="hover:text-purple-1000 dark:hover:text-dark-purple-1100 cursor-pointer" />

                    {/* Bouton pour changer de thème avec switch */}
                    <div 
                        className={`relative w-14 h-8 flex items-center bg-purple-500 dark:bg-dark-purple-500 rounded-full p-1 cursor-pointer ${darkMode ? 'bg-fuchsia-600' : ''}`} 
                        onClick={toggleDarkMode}
                    >
                        <div className={`dot absolute w-6 h-6 bg-purple-100 rounded-full shadow-md transform transition-transform ${darkMode ? 'translate-x-6' : ''}`}></div>

                        {/* Affichage conditionnel des icônes en fonction du mode sombre */}
                        {!darkMode && (
                            <BsSun className="text-yellow-300 absolute left-2 w-4 h-4" />
                        )}
                        {darkMode && (
                            <BsMoon className="text-gray-400 absolute right-2 w-4 h-4" />
                        )}
                    </div>
                </div>

            </div>
        </nav>

    );
};

export default Navbar;
