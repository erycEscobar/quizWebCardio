import FiltrosOptions from '../Filtros/components/FiltrosOptions/FiltrosOptions';
import { ExercisesNavigatonIcons } from './ExercisesNavigationIcons';
import './ExercisesNavigation.scss';
import { useExerciseContext } from '../../exerciseContext/exerciseContext';

const ExercisesNavigation = () => {

    const { selectedExercise } = useExerciseContext();

    return (
        <div className='exercisesNavigation_container'>
            {selectedExercise && <p>{selectedExercise.key}</p>}
            <ul>
                <FiltrosOptions title={false} actionButtons={ExercisesNavigatonIcons}  />
            </ul>
        </div>
    )

}
export default ExercisesNavigation