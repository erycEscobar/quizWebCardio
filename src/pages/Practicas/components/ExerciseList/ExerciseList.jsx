import { useExerciseContext } from '../../exerciseContext/exerciseContext';
import './ExerciseList.scss';

const ExerciseList = () => {
  
  const { 
    exercisesList, 
    setSelectedExercise,
    completedFilter, 
    levelFilter,
    savedFilter,
    resolutionFilter,
  } = useExerciseContext();

  const completedFilteredExercises = 
    completedFilter === null ? exercisesList :
    completedFilter === true ? exercisesList.filter(exercise => exercise.realizado) :
    exercisesList.filter(exercise => !exercise.realizado);

  const levelFilteredExercises =
    levelFilter === null ? completedFilteredExercises :
    completedFilteredExercises.filter(exercise => exercise.level === levelFilter);

  const savedFilteredExercises =
    savedFilter === null ? levelFilteredExercises :
    levelFilteredExercises.filter(exercise => exercise.destacado === savedFilter);

  const resolutionFilteredExercises =
    resolutionFilter === null ? savedFilteredExercises :
    savedFilteredExercises.filter(exercise => exercise.bienResuelto === resolutionFilter);

  return (
    <div className='exerciseList_container'>
        <ul>
          {resolutionFilteredExercises.map((exercise, index) => {
            return (
              <li key={index} onClick={() => setSelectedExercise(exercise)}>
                  {exercise.key}
              </li>
            )
          })}
        </ul>
    </div>
  )
}
export default ExerciseList