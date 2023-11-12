import { useState } from 'react';
import onSale1 from '../../assets/Promocion1.png'
import onSale2 from '../../assets/Promocion2.png'
import onSale3 from '../../assets/Promocion3.png'
import './oferts.css'

function OnSale(){
    var onSales = [onSale1,onSale2,onSale3];
    const [valorInput, setValorInput] = useState(0);

    const changePhoto = () =>{
        setValorInput((valorInput + 1)%onSales.length);
    };

    setTimeout(function(){
        changePhoto();
    }, 6000);
    
    return(
        <div className='posSales' width={(window.innerWidth).toString + "px"}>
            {onSales.map((image,index) => {
                var ubq = 100 * (-valorInput);
                return <img src={image} style={{left:ubq.toString() + "%", animationDelay:(ubq == 0? 0: 500)}} />
                })}
        </div>
    );
}

export default OnSale