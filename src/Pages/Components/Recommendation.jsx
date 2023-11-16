import './cssStyles/recommendation.css'
import { useState, useEffect } from 'react';

function Recommendation(){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [failed, setFailed] = useState(false);
  
    useEffect(() => {
        fetch('https://api.mercadolibre.com/sites/MLC/search?limit=10&category=MLC1055')
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(apiData => {
            setData(apiData["results"]);
            setLoading(false);
          })
          .catch(error => {
            setFailed(true);
            setLoading(false);
            console.log("fail when we obtain the MercadoLibre's information")
          });
      }, []);

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