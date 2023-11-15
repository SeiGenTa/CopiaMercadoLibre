import { useState, useEffect } from 'react';
import onSale1 from '../../assets/Promocion1.png'
import onSale2 from '../../assets/Promocion2.png'
import onSale3 from '../../assets/Promocion3.png'
import './cssStyles/oferts.css'

function OnSale(){
    var onSales = [onSale1,onSale2,onSale3];
    const [valorInput, setValorInput] = useState(0);

    const changePhoto = () =>{
        setValorInput((valorInput + 1)%onSales.length);
    };

    useEffect(() => {
        setTimeout(function(){
            changePhoto();
        }, 6000);
    })
    
    return(
        <div className='posSales'>
            {onSales.map((image,index) => {
                return <img key={index} src={image} style={{left:100 * (index-valorInput) + "%"}} />
                })}
        </div>
    );
}

export default OnSale