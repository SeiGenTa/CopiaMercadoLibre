import { useParams , useLocation  } from "react-router-dom"
import { useEffect, useState } from "react"
import './Components/cssStyles/BusquedaPage.css'
import NavBar from "./Components/navBar"

export default function Search(){
    const history = useLocation();

    const { data_search,dataCategori } = useParams();

    const [data, setData] = useState([]);
    const [loading,setLoading] = useState(true);
    const [failed, setFailed] = useState(false);

    const [onlyFreeShip, setOnlyFreeShip] = useState(false);

    const [showFilterShipping, setShowFilterShipping] = useState(false);

    const chargeInfo = () => {
        var mySolicitud;
        if (data_search != "none"){
            mySolicitud = 'https://api.mercadolibre.com/sites/MLC/search?q=' + data_search.replace(/%/g, "%20");
        }
        else if(dataCategori != "none"){
            mySolicitud = 'https://api.mercadolibre.com/sites/MLC/search?&category=' + dataCategori;
        }

        
        if (onlyFreeShip){
            console.log("con envio gratis");
            mySolicitud = mySolicitud + "&shipping_cost=free";
        }


        console.log("cambiando");
        fetch(mySolicitud)
        .then(response => {
            console.log(mySolicitud)
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(apiData => {          
            setData(apiData);
            setLoading(false);
          })
          .catch(error => {
            console.log(error)
            setFailed(true);
            setLoading(false);
            console.log("fail when we obtain the MercadoLibre's information")
          });
    }

    useEffect(() => {
        chargeInfo();
    }, [onlyFreeShip,history]);

    const presOnlyFreeShip = (event)  => {
        setOnlyFreeShip(event.target.checked);
    }

    const pressInfo = () => {
        setShowFilterShipping(!showFilterShipping);
    }

    useEffect(()=> {
        console.log("se cambio showFilter: ${showFilterShipping}")
    },[showFilterShipping])

    return (
        <>
        <NavBar/>
        {loading? <p>Cargando!</p>:
            failed? <p>Parece que algo salio mal</p> :
            <div className="bodySearch" >
                <div className={showFilterShipping? "info_busq activate" : "info_busq"} >
                    <div className="divFloating">
                        <h3>{data["query"]}</h3>
                        <div className={"divOnlyFreeShip"}>
                            <p>Envio gratis</p>
                            <div class="switch-button">
                                <input type="checkbox" name="switch-button" id="switch-label" class="switch-button__checkbox" onChange={presOnlyFreeShip}/>
                                <label for="switch-label" class="switch-button__label"></label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="onlySmallWith">
                    <button onClick={pressInfo}>Tipos de envios</button>
                    <button>Filtros extras</button>
                </div>
                <div className="list_product">
                    {(data['results']).map((product,index) => {
                        return (
                            <div key={index} className="Producto">
                            <div className="space_image">
                                <img src={product["thumbnail"]}/>
                            </div>
                            <div className={"info "}>
                                <div className="Title"><p >{product['title']}</p></div>
                                {product["original_price"] != null? <div className="price_original"><p >${product["original_price"]}</p></div>:null}
                                <div className="Price"><h3 > ${product['price']}</h3></div>
                                {product["shipping"]["free_shipping"] == true?<div className="shipping"> <p >Envio gratis</p></div>:null}
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
            }
        </>
    )
}