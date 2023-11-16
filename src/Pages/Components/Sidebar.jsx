import './cssStyles/SideBar.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function SideBar({divVisible, categories}) {
  const dataCategories = (categories == null)? []: categories;

  const [showCategories, setShotCategories] = useState(false)

  const changeShowCategories = () => {
    setShotCategories(!showCategories);
  }
  useEffect(() => {
    console.log(showCategories);
    console.log(dataCategories);
  }, [showCategories,dataCategories])

  useEffect(() => {
    setShotCategories(false);
  }, [divVisible])

  return (
    <div className='emergent'>
        <div className='sideBar' style={{left: !divVisible? "-150px": "0"}}>
            <button className='buttonSearched' onClick={changeShowCategories}><p>Categorias</p></button>
            <button className='buttonSearched'><p>Ofertas</p></button>
            <button className='buttonSearched'><p>Historial</p></button>
            <button className='buttonSearched'><p>Vender</p></button>
            <button className='buttonSearched'><p>Ayuda</p></button>
        </div>
        <div className='categories' style={{left: !showCategories? "-200px": "130px"}} onMouseLeave={changeShowCategories}>
        {(dataCategories != [])?
        <div className='categoriasPosition'>
        {(dataCategories).map((categorie,index) => {
                    return (<Link to={'/search/none/'+categorie["id"]} key={index}><p  className="divCategorie">{categorie["name"]}</p> </Link>)
                   })}</div>
                : null
        }
        </div>
    </div>
    
  )
}

export default SideBar
