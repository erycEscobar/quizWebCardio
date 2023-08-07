import './MiPerfil.scss';
import PerfilIcon from '../../../../assets/03-Suscripción/03-icoo-usuario.png';
import { FieldNames } from './FieldNames';
import UserSectionTitle from '../UserSectionTitle/UserSectionTitle';

const MiPerfil = ({ User }) => {
  return (
    <div className='miPerfil_container'>
      <UserSectionTitle icon={PerfilIcon} title={"MI PERFIL"} />
      <div className='form_container'>
        <ul>
          {FieldNames.map((field) => {
            return (
              <li key={field.id}>
                <p className='form_title'>
                  {field.fieldName}
                </p>
                <p className='form_content'>
                  {User[field.field]}
                </p>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
export default MiPerfil