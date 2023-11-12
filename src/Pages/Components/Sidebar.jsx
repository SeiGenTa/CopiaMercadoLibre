import './SideBar.css';

function SideBar({divVisible}) {

  return (
    <div className='emergent'>
        <div className='sideBar' style={{left: divVisible? "0": "-150px"}}>
            <button className='buttonSearched'><p>Categorias</p></button>
            <button className='buttonSearched'><p>Ofertas</p></button>
            <button className='buttonSearched'><p>Historial</p></button>
            <button className='buttonSearched'><p>Vender</p></button>
            <button className='buttonSearched'><p>Ayuda</p></button>
        </div>
        <div className='blockBack' style={{display: !divVisible? "none": "block"}}></div>
    </div>
    
  )
}

export default SideBar
