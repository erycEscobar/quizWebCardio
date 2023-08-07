import FiltrosOptions from '../Filtros/components/FiltrosOptions/FiltrosOptions';
import { DestacadoIcon, AutoevaluacionIcons } from './AutoevaluacionIcons';
import './UserAutoEvaluationButtons.scss';

const UserAutoEvaluationButtons = () => {
  return (
    <div className='autoevaluation_container'>
      AUTOEVALUACIÓN
      <ul>
        <FiltrosOptions title={false} actionButtons={DestacadoIcon} />
        <FiltrosOptions title={false} actionButtons={AutoevaluacionIcons} />
      </ul>
    </div>
  )
}
export default UserAutoEvaluationButtons