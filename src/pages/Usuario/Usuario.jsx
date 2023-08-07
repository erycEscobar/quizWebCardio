import './Usuario.scss';
import MiPerfil from "./components/MiPerfil/MiPerfil";
import MisEstadisticas from "./components/MisEstadisticas/MisEstadisticas";
import { User } from './User.js'

const Usuario = () => {

    return (
      <div className="usuario_container">
        <div className='perfil_back'>
          <MiPerfil User={User}/>
        </div>
        <div className='estadisticas_back'>
          <MisEstadisticas />
        </div>
      </div>
    )
    
}
export default Usuario