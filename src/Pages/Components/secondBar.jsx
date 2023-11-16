import './cssStyles/secondBar.css'
import iconSend from '../../assets/send.png'
import iconUser from '../../assets/user.png'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function SeconBar() {

    const [dataCategories, setDataCategories] = useState([]);
    const [showCategories, setShowCategories] = useState(false)

    const changeShowCateries = () => {
        setShowCategories(!showCategories);
    }

    useEffect(() => {
        fetch("https://api.mercadolibre.com/sites/MLC/categories")
        .then(response=> {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
        }).then(data =>{
            console.log(data[0]);
            setDataCategories(data);
        })
        }, [])

    return (
        <div className='secondBarMaster'>
            <div className='secondBar'>
                <div className='ubqSend'>
                    <img src={iconSend} />
                    <div className='info'>
                        <p>Enviar a usuario</p>
                        <h3>Avenida ...</h3>
                    </div>
                </div>
                <ol className='CenterButtons'>
                    <li className='buttonSearched' onMouseEnter={changeShowCateries}><p>Categorias</p></li>
                    <li className='buttonSearched'><p>Ofertas</p></li>
                    <li className='buttonSearched'><p>Historial</p></li>
                    <li className='buttonSearched'><p>Vender</p></li>
                    <li className='buttonSearched'><p>Ayuda</p></li>
                </ol>
                <div className='infBuy'>
                    <a href='/user1234'><img src={iconUser} alt="" /> <p>usuario</p></a>
                    <a href='/user1234'> <p>Mis compras</p></a>
                    <a href='/user1234'> <p>Favoritos</p></a>
                </div>
            </div>
        {(dataCategories != [])?
            <div onMouseLeave={changeShowCateries}>
               <div className={'divCategories'} style={{height:(showCategories? "auto": 0)}}>
                   {(dataCategories).map((categorie,index) => {
                    return (<Link to={'/search/none/'+categorie["id"]} key={index}><p  className="divCategorie">{categorie["name"]}</p> </Link>)
                   })}
                </div>
            </div>: null
        }
        </div>
        )
}

export default SeconBar
