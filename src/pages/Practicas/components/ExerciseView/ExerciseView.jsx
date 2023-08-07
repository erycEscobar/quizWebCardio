import './ExerciseView.scss';
import { useExerciseContext } from '../../exerciseContext/exerciseContext';

const ExerciseView = () => {

  const { selectedExercise } = useExerciseContext(); 

  return (
    <div className='exerciseView_container'>
      {selectedExercise ? 
        <div>
          <h5>EJERCICIO NUMERO {selectedExercise.key} </h5>
          <img src={selectedExercise.img} alt="" />
        </div>
      :
        <h5>Seleccione un ejercicio</h5>
      }      
    </div>
  )
}
export default ExerciseView