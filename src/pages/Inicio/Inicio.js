import React from 'react'
import image1 from './images/01.jpg'
import './inicio.css';

const Inicio = () => {
  return (
    <div className='div-Imagen'>
      <img src={image1} className="Imagen" alt="Imagen 1" />
    </div>
  );
}

export default Inicio;
