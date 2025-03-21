import React, { useEffect } from 'react';
import Nav from "../components/public/Nav";
import { useTranslation } from 'react-i18next';
import AOS from 'aos'; // Import de AOS
import 'aos/dist/aos.css'; // Import des styles de AOS
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {

    const { t } = useTranslation();

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div className='flex flex-col min-h-screen bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100'>
            {/* Navbar */}
            <Nav />

            {/* Contenu de la page */}
            <div className="flex flex-col items-center justify-center flex-grow container mx-auto px-6 py-10 space-y-6">
                <h2 className="text-4xl font-extrabold text-center" data-aos="fade-up">
                  {t('contact.contact_me')}
                </h2>
                <p className="text-lg text-center text-slate-600 dark:text-slate-300 max-w-xl" data-aos="fade-up" data-aos-delay="100">
                  {t('contact.contact_desc')}
                </p>

                {/* Liens de contact */}
                <div className="flex space-x-10" data-aos="fade-up" data-aos-delay="200">
                    <a href="mailto:gasconkillian.pro@gmail.com" className="hover:text-blue-500 transition duration-300">
                        <FaEnvelope size={50} />
                    </a>

                    <a href="https://www.linkedin.com/in/killian-gascon/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition duration-300">
                        <FaLinkedin size={50} />
                    </a>

                    <a href="https://github.com/KillianGascon" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition duration-300">
                        <FaGithub size={50} />
                    </a>
                </div>

                {/* Détails de contact */}
                <div className="text-center text-slate-600 dark:text-slate-300" data-aos="fade-up" data-aos-delay="300">
                    <p>Email : <a href="mailto:gasconkillian.pro@gmail.com" className="hover:text-blue-500 transition">gasconkillian.pro@gmail.com</a></p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
