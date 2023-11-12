import './recommendation.css'
import obtenerDatosProductos from "../../Conection/Conection.jsx"

function Recommendation(){

    var myInfo = obtenerDatosProductos();

    return (
    <div className='body-recommendation'>
        <h2> Nuestras sugerencias para tí</h2>
        <div className='scrolleable'>
            {myInfo.map((elements,index) => {
                var name = "BoxItem " + index.toString()
                var nameImage = elements["imagen"]
                return <div className={name}>
                    <img src={nameImage} alt="Descripcion"/>
                    <div className='name'><h3 >{elements["nombre"]}</h3></div>
                    <h3 className='price'>{"$"+elements["precio"]}</h3>
                </div>
            }
            )}
        </div>
    </div>
    )
}

export default Recommendation;