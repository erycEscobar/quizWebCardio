import './MisEstadisticas.scss';
import EstadisticasIcon from '../../../../assets/03-Suscripción/03-icono-estadisticas.png'
import UserSectionTitle from '../UserSectionTitle/UserSectionTitle';
import { Estadisticas } from './Estadisticas';

const MisEstadisticas = () => {
  return (
    <div className='misEstadisticas_container'>
      <UserSectionTitle icon={EstadisticasIcon} title={"MIS ESTADISTICAS"} />
      <div className='misEstadisticas_buttons'>
        <ul>
          {Estadisticas.map((stat) => {
            return (
              <li key={stat.id}>
                <img src={stat.icon} alt={stat.alt} />
                <p>{stat.fieldName}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
export default MisEstadisticas