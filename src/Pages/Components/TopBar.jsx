import { useState } from 'react';
import './cssStyles/TopBar.css'
import iconSearch from '../../assets/search.png'
import iconMenu from '../../assets/menu.png'
import SideBar from './Sidebar';
import { Link,useNavigate  } from 'react-router-dom';
import disneyPNG from '../../assets/Dysnei.png'

const TopBar = (prop) => {
    const dataCategories = (prop.categories == null)? []: prop.categories;
    const [valorInput, setValorInput] = useState('');
    const [botonPresionado, setBotonPresionado] = useState(false);

    const manejarClick = () => {
      setBotonPresionado(!botonPresionado);
    };

    const handleInputChange = (event) => {
        setValorInput(event.target.value);
      };

    const navigate = useNavigate()

    const naviga = (event) => {
      event.preventDefault();
      if (valorInput.length != 0)
        navigate('/search/'+valorInput.toString().replace(/\s+/g,'%')+"/none");
    };

  return (
    <div>
    <div className="top-bar">
            <button onClick={manejarClick}><img src={iconMenu} alt="" /></button>
            <div className='divName'>
              <Link to='/'><img src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Mercadolibre_textlogo.svg" alt="" height={"30px"}/></Link>
            </div>
            <div className='search'>
              <label htmlFor="miInput" className="message-label">
                    {valorInput.length == 0 && <p className='textInit'>Buscar productos,marcas y más ...</p>}
                    <form onSubmit={naviga}>
                    <input
                    type="text"
                    id="miInput"
                    onChange={handleInputChange}
                    className="mi-input"
                    
                    />
                    </form>
                    <div className='buttonSearch'>
                      <Link to={valorInput.length!=0? '/search/'+valorInput.toString().replace(/\s+/g,'%')+"/none": null}><img src={iconSearch} alt="" /></Link>
                    </div>
                </label>
            </div>
            <div className='iconsExt'>
                <img src={disneyPNG} alt="" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5d/START_logo_2021.svg" alt="" />
            </div>
        </div>
        <SideBar divVisible={botonPresionado} categories={dataCategories}/>
    </div>
    
  );
};

export default TopBar;