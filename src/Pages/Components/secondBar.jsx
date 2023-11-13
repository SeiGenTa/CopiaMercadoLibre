import './cssStyles/secondBar.css'
import iconSend from '../../assets/send.png'
import iconUser from '../../assets/user.png'


function SeconBar() {
  return (
    <div className='secondBar'>
        <div className='ubqSend'>
            <img src={iconSend} />
            <div className='info'>
                <p>Enviar a usuario</p>
                <h3>Avenida ...</h3>
            </div>
        </div>
        <div className='CenterButtons'>
            <div className='buttonSearched'><p>Categorias</p></div>
            <div className='buttonSearched'><p>Ofertas</p></div>
            <div className='buttonSearched'><p>Historial</p></div>
            <div className='buttonSearched'><p>Vender</p></div>
            <div className='buttonSearched'><p>Ayuda</p></div>
        </div>
        <div className='infBuy'>
            <a href='/user1234'><img src={iconUser} alt="" /> <p>usuario</p></a>
            <a href='/user1234'> <p>Mis compras</p></a>
            <a href='/user1234'> <p>Favoritos</p></a>
        </div>
    </div>
  )
}

export default SeconBar
