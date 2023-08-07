import './Suscripcion.scss';
import SuscripcionCard from './components/SuscripcionCard/SuscripcionCard';

const Suscripcion = () => {

    return (
      <div className='suscripcion_container'>
        <p>
          Accedé a todas las actividades y contenidos teóricos
        </p>
        <ul>
          <SuscripcionCard title={"MENSUAL"} price={"1.500"}/>
          <SuscripcionCard title={"ANUAL"} price={"14.400"}/>
        </ul>
      </div>
    )
    
}
export default Suscripcion