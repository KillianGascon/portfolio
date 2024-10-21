import { useState, useRef, useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsSun, BsMoon } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import pp from '../../assets/pp-github.png';
import Flag from 'react-world-flags';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const { i18n } = useTranslation();
    const [darkMode, setDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('dark-mode');
        return savedMode ? JSON.parse(savedMode) : false;
    });

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);  // State pour gérer le dropdown des langues
    const menuRef = useRef(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode);
        localStorage.setItem('dark-mode', JSON.stringify(darkMode));
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsMenuOpen(false);
        }
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Mise à jour pour fermer le dropdown après sélection de la langue
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setIsDropdownOpen(false); // Ferme le dropdown après la sélection de la langue
    };

    const { t } = useTranslation();

    return (
        <nav className="w-full py-4 dark:bg-gray-950 relative">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
            <Link to="/home" className="p-2 flex items-center justify-center space-x-2">
                    <img src={pp} alt="logo" className="h-8 w-8 rounded-full" />
                    <span className="text-purple-1200 dark:text-dark-purple-1200 text-lg font-bold">Gascon Killian</span>
                </Link>

                {/* Liens de la navbar */}
                <ul className="hidden md:flex space-x-6 bg-purple-500 px-6 py-2 rounded-full dark:bg-dark-purple-500">
                    <li className="text-purple-1100 dark:text-dark-purple-1200 hover:text-purple-1200 dark:hover:text-dark-purple-1100 transition">
                        <Link to="/home" className="p-2">{t('navbar.home')}</Link>
                    </li>
                    <li className="text-purple-1100 dark:text-dark-purple-1200 hover:text-purple-1200 dark:hover:text-dark-purple-1100 transition">
                        <Link to="/about" className="p-2">{t('navbar.about')}</Link>
                    </li>
                    <li className="text-purple-1100 dark:text-dark-purple-1200 hover:text-purple-1200 dark:hover:text-dark-purple-1100 transition">
                        <Link to="/work" className="p-2">{t('navbar.projects')}</Link>
                    </li>
                </ul>

                <div className="hidden md:flex space-x-4 items-center text-purple-1200 dark:text-dark-purple-1200">
                    <a href='https://www.linkedin.com/in/killian-gascon/' target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="hover:text-purple-1000 dark:hover:text-dark-purple-1100 cursor-pointer" />
                    </a>
                    <a href='https://github.com/KillianGascon' target="_blank" rel="noopener noreferrer">
                        <FaGithub className="hover:text-purple-1000 dark:hover:text-dark-purple-1100 cursor-pointer" />
                    </a>

                    <div 
                        className={`relative w-14 h-8 flex items-center bg-purple-500 dark:bg-dark-purple-500 rounded-full p-1 cursor-pointer ${darkMode ? 'bg-fuchsia-600' : ''}`} 
                        onClick={toggleDarkMode}
                    >
                        <div className={`dot absolute w-6 h-6 bg-purple-100 rounded-full shadow-md transform transition-transform ${darkMode ? 'translate-x-6' : ''}`}></div>
                        {!darkMode ? (
                            <BsSun className="text-yellow-300 absolute left-2 w-4 h-4" />
                        ) : (
                            <BsMoon className="text-gray-400 absolute right-2 w-4 h-4" />
                        )}
                    </div>

                    {/* Dropdown avec drapeaux pour la sélection de langue */}
                    <div className="relative" ref={dropdownRef}>
                        <button onClick={toggleDropdown} className="flex items-center space-x-2">
                            <Flag code={i18n.language === 'fr' ? 'FRA' : 'GBR'} style={{ width: '24px', height: '16px' }} />
                        </button>
                        {/* Affichage conditionnel et animation */}
                        <ul className={`absolute bg-white shadow-lg rounded-lg mt-2 right-0 p-2 space-y-2 transition-all duration-300 ease-in-out transform ${isDropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} ${isDropdownOpen ? 'visible' : 'invisible'}`}>
                            <li className="cursor-pointer" onClick={() => changeLanguage('en')}>
                                <Flag code="GBR" style={{ width: '24px', height: '16px' }} /> English
                            </li>
                            <li className="cursor-pointer" onClick={() => changeLanguage('fr')}>
                                <Flag code="FRA" style={{ width: '24px', height: '16px' }} /> Français
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="md:hidden flex items-center ml-auto">
                    <button onClick={toggleMenu}>
                        {isMenuOpen ? <HiX className="text-purple-1200 text-3xl" /> : <HiMenu className="text-purple-1200 text-3xl" />}
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div ref={menuRef} className="absolute right-0 top-16 w-full flex justify-end transition-all duration-300 ease-in-out">
                    <ul className="bg-purple-400 dark:bg-purple-100 rounded-lg shadow-lg py-8 px-6 text-center space-y-6 w-full flex flex-col">
                        <li className="border-b border-purple-700 dark:border-dark-purple-300 text-purple-1100 dark:text-dark-purple-1200 hover:text-purple-1200 dark:hover:text-dark-purple-1100 transition text-2xl">
                            <Link to="/home" className="p-4 block">Accueil</Link> 
                        </li>
                        <li className="border-b border-purple-700 dark:border-dark-purple-300 text-purple-1100 dark:text-dark-purple-1200 hover:text-purple-1200 dark:hover:text-dark-purple-1100 transition text-2xl">
                            <Link to="/about" className="p-4 block">À Propos</Link>
                        </li>
                        <li className="border-b border-purple-700 dark:border-dark-slate-300 text-purple-1100 dark:text-dark-purple-1200 hover:text-purple-1200 dark:hover:text-dark-purple-1100 transition text-2xl">
                            <Link to="/work" className="p-4 block">Projets</Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
