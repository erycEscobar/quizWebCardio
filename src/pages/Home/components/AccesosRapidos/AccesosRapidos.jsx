import Teoria from '../../../../assets/00-Home/01-06-teoria01.png'
import Practica from '../../../../assets/00-Home/01-06-practica01.png';
import './AccesosRapidos.scss'

const AccesosRapidos = () => {
  return (
    <div className="accesosRapidos_container">
        <div></div>
        <div></div>
        <div className='accesosRapidos_buttons'>
          <ul>
            <li>
              <img src={Teoria} alt="Icono de teoria"/>
              <p>BASE TEÓRICA</p>
            </li>
            <li>
              <img src={Practica} alt="Icono de practica" />
              <p>PRÁCTICAS</p>
            </li>
          </ul>
        </div>
    </div>
  )
}
export default AccesosRapidos