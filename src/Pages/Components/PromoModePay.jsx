import './cssStyles/PromoModePay.css'

function PromoModePay(){
    return (
        <div className="DivPromoModePay">
            <div className="DivPart1">
                <div className="LineBlueLeft"/>
                <div className="row">
                    <h3>Paga cómodo y seguro</h3>
                    <p>con Mercado Pago</p>
                </div>
            </div>
            <a className="Promos">
                <div className='radiusCirc'>
                    <img src="https://www.svgrepo.com/show/532425/credit-card-alt-1.svg" alt="" style={{left:"15px", width:27}}/>
                </div>
                <div className="row">
                    <h3>Hasta 12 cuotas sin interes</h3>
                    <p>ver mas</p>
                </div>
            </a>
            <a className="Promos">
                <div className='radiusCirc'>
                    <img src="https://www.svgrepo.com/show/487240/credit-card-2.svg" alt="" style={{left:"16px", width:25}}/>
                </div>
                <div className="row">
                    <h3>Tarjeta de debito</h3>
                    <p>ver mas</p>
                </div>
            </a>
            <a className="Promos" >
                <div className='radiusCirc'>
                    <img src="https://www.svgrepo.com/show/494972/add-circle.svg" alt="" style={{left:"16px", width:25}} />
                </div>
                <div className="row">
                    <h3>Ver medios de pago</h3>
                    <p>ver todo</p>
                </div>
            </a>
        </div>
    )
}

export default PromoModePay