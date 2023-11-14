import './cssStyles/recommendation.css'
import obtenerDatosProductos from "../../Conection/Conection.jsx"
import { useState, useEffect } from 'react';

function Recommendation(){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [failed, setFailed] = useState(false);
  
    useEffect(() => {
        // Haciendo una solicitud a la API
        fetch('https://api.mercadolibre.com/sites/MLC/search?category=MLC1055')
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(apiData => {
            // Aquí, 'apiData' es el objeto JSON que contiene múltiples objetos
            // Puedes trabajar con los datos como desees
            
    
            setData(apiData["results"].slice(0,6));
            setLoading(false);
          })
          .catch(error => {
            setFailed(true);
            setLoading(false);
            console.log("fail when we obtain the MercadoLibre's information")
          });
      }, []);

    var myInfo = obtenerDatosProductos();

    return (
    <div className='body-recommendation'>
        <h2> Nuestras sugerencias para tí</h2>
        {loading? <p>Cargando </p> :
                <a className='scrolleable'>
                  {failed? <p>Parece que tenemos problemas al obtener los productos</p>:
                    <>{data.map((product,index) => {
                      return (
                          <div key={index} className='BoxItem'>
                              <img src={product["thumbnail"]} alt="" />
                              <div className='name'>
                                  <h3>{product["title"]}</h3>
                              </div>
                              <div className='price'>
                                  <h3>{"$" + product["price"]}</h3>
                              </div>
                          </div>
                      )
                  })}</>
                  }
                </a>
        }
    </div>
    )
}

export default Recommendation;