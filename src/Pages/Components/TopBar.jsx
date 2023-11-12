import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import './TopBar.css'
import iconSearch from '../../assets/search.png'
import iconMenu from '../../assets/menu.png'
import SideBar from './Sidebar';

const TopBar = () => {

    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
    const isLandscape = useMediaQuery({ query: '(orientation: landscape)' });

    const [valorInput, setValorInput] = useState('');

    const [botonPresionado, setBotonPresionado] = useState(false);

    const manejarClick = () => {
      // Actualizar el estado cuando el botón es presionado
      setBotonPresionado(!botonPresionado);
    };

    const handleInputChange = (event) => {
        setValorInput(event.target.value);
      };

  return (
    <div>
    <div className="top-bar">
            <button onClick={manejarClick}><img src={iconMenu} alt="" /></button>
            <a className='buttonReturnInit' href='/'>
                <img className='imageInit' src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Mercadolibre_textlogo.svg" ></img>
            </a>
            <div className='search'>
                <label htmlFor="miInput" className="message-label">
                    {valorInput.length == 0 && <p className='textInit'>Buscar productos,marcas y más ...</p>}
                    <input
                    type="text"
                    id="miInput"
                    value={valorInput}
                    onChange={handleInputChange}
                    className="mi-input"
                    />
                    <a className='buttonSearch' href={valorInput != 0 && ("/search/"+valorInput)}><img src={iconSearch} alt="" /></a>
                </label>
            </div>
            {isLandscape && (
            <div className='iconsExt'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Disney_wordmark.svg" alt="" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5d/START_logo_2021.svg" alt="" />
            </div>)}
        </div>
        <SideBar divVisible={botonPresionado}/>
    </div>
    
  );
};

export default TopBar;