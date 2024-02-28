import { Header } from './Header';
import './style.scss';
import React, { useEffect, useState } from 'react';

export function FirstView() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const getRandomNumber = (min, max) => {
      return Math.random() * (max - min) + min;
    };

    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 250; i++) {
        newStars.push({
          top: getRandomNumber(0, window.innerHeight),
          left: getRandomNumber(0, window.innerWidth)
        });
      }
      setStars(newStars);
    };

    generateStars(); // Générer les étoiles initiales

    const handleResize = () => {
      generateStars(); // Recalculer les positions des étoiles lors du redimensionnement de la fenêtre
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize); // Nettoyer l'écouteur d'événements lors du démontage du composant
    };
  }, []); // Déclencher l'effet uniquement au montage

  return (
    <section className="100-vh">
      <Header />
      <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
        Explore
      </button>
      <div id="stars-container">
        {stars.map((star, index) => (
          <div key={index} className="star" style={{ top: star.top, left: star.left }}></div>
        ))}
      </div>
      <img className='rocket' src="../../rocket3.png" alt='rocket' />
    </section>
  );
}